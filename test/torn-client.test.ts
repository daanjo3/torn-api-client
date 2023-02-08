import TornClient from '../src/TornClient'
import dummyresponse from './resources/user-response-1.json'

const BASE_URL = 'https://api.torn.com'
const TEST_API_KEY = 'ydhSfI0i2qxeDIg6'

const client = new TornClient(TEST_API_KEY)
const spy = jest
  .spyOn(client, 'execute')
  .mockImplementation((url) => new Promise(() => dummyresponse))

test('Torn client construction stores API key', () => {
  expect(client.apiKey).toMatch(TEST_API_KEY)
})

test('Build URL returns valid API string', () => {
  const URL_WITHOUT_PARAMS = `${BASE_URL}/user/?selections=&key=${TEST_API_KEY}`
  expect(client.buildUrl('user', [])).toMatch(URL_WITHOUT_PARAMS)

  // TODO
  // - id is provided
  // - selections are provided as array
})

test('Build selection string correctly builds', () => {
  const SINGLE_SELECTION_STRING = client.buildUrl('ammo', [])
  expect(SINGLE_SELECTION_STRING).toMatch('ammo')

  const MULT_SELECTION_STRING = client.buildSelectionParam(['ammo', 'attacks'])
  expect(MULT_SELECTION_STRING).toMatch('ammo,attacks')

  // Using any other values crashes the typescript compiler
})

test('Providing non-user selection to user() throws', async () => {
  const client = new TornClient(TEST_API_KEY, { verifySelection: true })
  expect.assertions(1)
  try {
    await client.user(undefined, ['something_false'])
  } catch (e) {
    expect(e).toBeDefined()
  }
})
