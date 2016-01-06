var fs     = require('fs');
var path   = require('path');
var docopt = require('docopt').docopt;
var Client = require('nefit-easy-commands');

// Parse command line options.
var opts = docopt(fs.readFileSync(__dirname + '/docopt.txt', 'utf8'), {
  version : require('../../package').version
});

module.exports = function() {
  // Set and check required parameters.
  var params = {
    serialNumber : opts['--serial']     || process.env.NEFIT_SERIAL_NUMBER,
    accessKey    : opts['--access-key'] || process.env.NEFIT_ACCESS_KEY,
    password     : opts['--password']   || process.env.NEFIT_PASSWORD,
  };
  var error = null;
  if (! params.serialNumber) error = 'missing serial number';
  if (! params.accessKey)    error = 'missing access key';
  if (! params.password)     error = 'missing password';
  if (error) {
    console.error('Error: %s', error);
    process.exit(1);
  }

  // Instantiate client.
  const client = Client(params);

  // Connect client and start server.
  return client.connect().then(() => {
    return require('./server')(client, opts);
  }).catch((err) => {
    console.error(err);
    if (opts['--verbose'] && err.stack) {
      console.error(err.stack);
    }
    process.exit(1);
  }).finally(() => {
    client.end();
  });
};
