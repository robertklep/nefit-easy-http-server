module.exports = (client, opts) => {
  var decrypted = client.decrypt(opts['<base64>'], opts['--type']);
  try {
    return JSON.parse(decrypted);
  } catch(e) {
    return decrypted;
  }
};
