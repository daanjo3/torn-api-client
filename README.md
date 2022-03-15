# torn-api-client
Unofficial API client for the official Torn API. This API client provides a simplified interface on the Torn API, which should make integration of Torn into JS applications easier.

## Features
- Configurable `TornClient` class with convenience methods to call each endpoint/compartment.
- List of available selections for each compartment.
- Full type definitions for the above to make integration in Typescript projects easier.

### Example
Try it out using this example below.
```js
import TornClient, { api } from 'torn-api-client';
const client = new TornClient('my-api-key');

// Get the default from the user compartment of the API key owner.
client.user().then(console.log);
// Get the perks info from the user compartment of the API key owner.
client.user(null, ['perks']).then(console.log);
// Get the basic and icons info for a user with id 887766.
client.user('887766', ['basic', 'icons']).then(console.log);

// Get the default section from the faction compartment for faction with id 1234.
client.faction('1234').then(console.log);
// Get the employees section from the company compartment for company with id 9101.
client.company('9101', ['employees']).then(console.log);

// Use the api object to select compartments
client.company('9101', [api.company.employees]).then(console.log);

// ... And more, like torn, properties and item-market!

```

### Future additions
This API is far from finished so a lot will be added or updated. Below is an (incomplete) list of items that might be added in the future:
1. API response types.
2. Improved testing and coverage reports.
3. Better client configurations.
4. More example scripts in both TS and JS.

## Installation
The NPM package is published here, https://www.npmjs.com/package/torn-api-client.

Simply install it using `npm install torn-api-client`.

## Contributing
1. Get your API key from the [Torn website](https://www.torn.com/preferences.php#tab=api).
2. After running `yarn build` you can use the scripts in the `scripts/` directory.

    For your testing convenience it is advisable to set your API key as environment variable called `TORN_API_KEY`. The scripts will use this to fill in the key when creating the client.

Feel free to open issues to suggest improvements or additional features. 
Contributions are more than welcome, both in the form of PR's and issues.