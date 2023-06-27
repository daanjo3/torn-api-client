const TornClient = require('../lib').default;
const api = require('../lib').api;

const client = new TornClient(process.env.TORN_API_KEY);
const clientBadKey = new TornClient(process.env.TORN_API_KEY + 'dda');
const clientBadUrl = new TornClient(process.env.TORN_API_KEY + 'dda', { baseUrl: 'google.com' });

// Basic user request
// client.user(['battlestats', 'money']).then(console.log);
// client.user([api.user.battlestats, api.user.money]).then(console.log);

// Request user inventory
client.user(['inventory'], { id: '2575480' })

// Malformed requests
// clientBadKey.user(['battlestats', 'money']).then(console.log);
// clientBadUrl.user(['battlestats', 'money']).then(console.log);