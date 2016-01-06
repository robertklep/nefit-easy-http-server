module.exports = (client, opts) => {
  return client.get('/ecus/rrc/userprogram/activeprogram').then((r) => {
    return { value : r.value };
  });
};
