var Promise    = require('bluebird');
var express    = require('express');
var bodyParser = require('body-parser');

module.exports = (client, opts) => {
  return new Promise((resolve, reject) => {
    // Set up Express server to handle requests.
    var app    = express();
    var server = app.listen(opts['--port'], opts['--host'])
                    .on('close',     resolve)
                    .on('error',     reject)
                    .on('listening', () => {
                      var addr = server.address();
                      console.log('HTTP server listening on http://%s:%s', addr.address, addr.port);
                    });

    // Setup middleware.
    app.use(require('cors')());
    app.use(require('morgan')('combined'));
    app.use(require('body-parser').json());

    // Bridge (HTTP <-> XMPP) routing.
    var bridgeRouter = express.Router();
    bridgeRouter.route('*').get(function(req, res, next) {
      return client.get(req.url).then((r) => {
        return res.json(r);
      }, next);
    }).post(function(req, res, next) {
      return client.put(req.url, JSON.stringify(req.body)).then((r) => {
        return res.json(r);
      }, next);
    })
    app.use('/bridge', bridgeRouter);

    // API routing.
    var apiRouter = express.Router();
    app.use('/api', apiRouter);

    // Error handler.
    app.use((err, req, res, next) => {
      console.log(err.stack);
      return res.status(500).send(err.stack);
    });
  });
};

