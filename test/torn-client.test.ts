import TornClient from '../src/torn-client';

const BASE_URL = 'https://api.torn.com';
const MY_API_KEY = 'ydhSfI0i2qxeDIg6';

test('Torn client construction stores API key', () => {
    const client = new TornClient(MY_API_KEY);
    expect(client.apiKey).toEqual(MY_API_KEY);
})

test('Build URL returns valid API string', () => {
    const client = new TornClient(MY_API_KEY);
    const URL_WITHOUT_PARAMS = `${BASE_URL}/user/?selections=&key=${MY_API_KEY}`;

    expect(client.buildUrl('user')).toEqual(URL_WITHOUT_PARAMS);

    // TODO
    // - id is provided
    // - selections are provided as string
    // - selections are provided as array
})