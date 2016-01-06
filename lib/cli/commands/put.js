module.exports = (client, opts) => {
  return client.put(opts['<uri>'], opts['<data>']);
};

