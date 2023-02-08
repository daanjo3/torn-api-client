import fs from 'fs'
import TornClient from '../../../src'
import allCompartments, { Compartment } from './compartments'
import RequestLimiter from './RequestLimiter'
import { GeneratorResult } from './types/generator'
import logger from './util/logger'
import Generator from './generator'

const baseOutPath = `${__dirname}/../out`
if (!process.env.TORN_API_KEY) {
  throw new Error('Environment variable TORN_API_KEY is not set')
}
const client = new TornClient(process.env.TORN_API_KEY)

async function main() {
  console.log('done')
  const compartments = allCompartments.filter((c) => c.name == 'user')
  loop(compartments)
}

export default main()

/**
 * Issues with this method
 * 1. user.profile has element basicicons which can have different fields per user. I probably don't have the full picture.
 * 2. Differences in searching by API key and by user/faction/company id are not being accounted for.
 * 3. Attacks is processed per-attack, which is not convenient.
 * 4. Merits have strings with spaces as keys .
 * 5. Multiple interfaces have numbers as name.
 *
 * One way to continue would be to take the current state as-is and process it further by hand.
 * The current method already alleviates a lot of the burden of creating these interfaces.
 * However to make the process repeatable the issues above should be addressed.
 */

async function loop(compartments: Compartment[]) {
  const results: GeneratorResult[] = []
  const limiter = new RequestLimiter()
  const generator = new Generator(baseOutPath)

  generator.generateSelectionBase()

  for (const compartment of compartments) {
    console.log(`Processing compartment ${compartment.name}`)

    for (const selection of compartment.selections) {
      console.log(`Processing selection ${compartment.name}.${selection}`)

      // Fetch the example JSON
      let data
      try {
        data = await fetchData(compartment, selection)
      } catch (err: any) {
        results.push({ ...(err as GeneratorResult) })
        continue
      }

      // Translate it to an interface
      const result = generator.generateSelectionInterface(
        compartment.name,
        selection,
        data
      )
      results.push({ ...result })

      // fetchData(compartment, selection)
      //   .then((data) => generateInterface(compartment.name, selection, data))
      //   .then((result) => outcome.push({ ...result }))
      //   .catch((err) => outcome.push({...(err as GeneratorResult)}))

      await limiter.handle()
    }
  }

  logger.printOutcome(results)
}

// Get a JSON example of the data to be translated.
async function fetchData(
  compartment: Compartment,
  selection: string
): Promise<any> {
  try {
    const data = await compartment.execute(client, selection)
    if ('error' in data) {
      throw data.error.error
    }
    return data
  } catch (err) {
    throw {
      compartment,
      selection,
      interface: `${compartment.name}/${selection}`,
      state: 'failed',
      error: err,
    }
  }
}

function createOutDirectory() {
  try {
    // first check if directory already exists
    if (!fs.existsSync(baseOutPath)) {
      fs.mkdirSync(baseOutPath)
      console.log('Directory is created.')
    } else {
      console.log('Directory already exists.')
    }
  } catch (err) {
    console.log(err)
  }
}

function removeOutDirectory() {
  fs.rmdirSync(baseOutPath, { recursive: true })
}
