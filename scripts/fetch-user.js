const TornClient = require('../lib').default;
const api = require('../lib').api;

const client = new TornClient(process.env.TORN_API_KEY);
const clientBadKey = new TornClient(process.env.TORN_API_KEY + 'dda');
const clientBadUrl = new TornClient(process.env.TORN_API_KEY + 'dda', { baseUrl: 'google.com' });

// Basic user request
client.user(null, ['battlestats', 'money']).then(console.log);
client.user(null, [api.user.battlestats, api.user.money]).then(console.log);

// Malformed requests
clientBadKey.user(null, ['battlestats', 'money']).then(console.log);
clientBadUrl.user(null, ['battlestats', 'money']).then(console.log);