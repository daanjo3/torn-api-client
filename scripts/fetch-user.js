const TornClient = require("../dist/torn-client.js").default;

const client = new TornClient();

// Basic user request
// client.user().then(console.log);

// User selection request (bars)
client.user(null, 'scar').then(console.log);