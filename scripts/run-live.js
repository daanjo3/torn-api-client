const TornClient = require("../dist/torn-client.js").default;

const MY_API_KEY = 'ydhSfI0i2qxeDIg6';

const client = new TornClient(MY_API_KEY);

client.user().then(console.log);