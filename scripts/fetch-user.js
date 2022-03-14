const TornClient = require('../dist/TornClient').default;

const client = new TornClient(process.env.TORN_API_KEY);

// Basic user request
// client.user().then(console.log);
client.user(null, ['battlestats', 'money']).then(console.log);