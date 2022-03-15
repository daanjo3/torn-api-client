const TornClient = require('../dist').default;
const api = require('../dist').api;

const client = new TornClient(process.env.TORN_API_KEY);

// Basic user request
client.user(null, ['battlestats', 'money']).then(console.log);
client.user(null, [api.user.battlestats, api.user.money]).then(console.log);