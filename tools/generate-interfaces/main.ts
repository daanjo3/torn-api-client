import JsonToTS from 'json-to-ts'
import fs from 'fs'
import TornClient, { api } from '../../src'
import allCompartments, { Compartment } from './compartments'
import RequestLimiter from './RequestLimiter'

const baseOutPath = `${__dirname}/out`
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
  const outcome: GeneratorResult[] = []
  const limiter = new RequestLimiter()

  generateSelectionBase()

  for (const compartment of compartments) {
    console.log(`Processing compartment ${compartment.name}`)

    for (const selection of compartment.selections) {
      console.log(`Processing selection ${compartment.name}.${selection}`)

      // Fetch the example JSON
      let data
      try {
        data = await fetchData(compartment, selection)
      } catch (err: any) {
        outcome.push({ ...(err as GeneratorResult) })
        continue
      }

      // Translate it to an interface
      const result = await generateInterface(compartment.name, selection, data)
      outcome.push({ ...result })

      // fetchData(compartment, selection)
      //   .then((data) => generateInterface(compartment.name, selection, data))
      //   .then((result) => outcome.push({ ...result }))
      //   .catch((err) => outcome.push({...(err as GeneratorResult)}))

      await limiter.handle()
    }
  }

  printOutcome(outcome)
}

function formatName(selection) {
  return selection.charAt(0).toUpperCase() + selection.slice(1)
}

interface GeneratorResult {
  compartment: string
  selection: string
  interface: string
  state: string
  data?: any
  error?: string
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

function generateSelectionBase() {
  const path = `${baseOutPath}/Selection.d.ts`
  const content = 'export type Selection = Record<string, unknown>\n'
  fs.writeFileSync(path, content)
}

async function generateInterface(
  compartment: string,
  selection: string,
  data: any
): Promise<GeneratorResult> {
  // Get the interface name from the selection
  const name = formatName(selection)
  const content = translateInterface(data, name)
  const path = `${baseOutPath}/${compartment}/${name}.d.ts`

  fs.writeFileSync(path, content.join('\n'))
  console.log(`Created ${name}.d.ts`)

  return {
    compartment,
    selection,
    interface: `${compartment}/${selection}`,
    state: 'success',
  }
}

function translateInterface(jsonData: any, rootName: string): string[] {
  // Make a rough translation from JSON to Typescript
  const interfaceContent = JsonToTS(jsonData, { rootName })
  // Make sure the main interface is exported and extends the ISelection type
  interfaceContent[0] = interfaceContent[0].replace(
    `interface ${rootName}`,
    `export interface ${rootName} extends Selection`
  )
  // Add the import line for ISelection to the top of the file.
  interfaceContent.unshift('import { Selection } from "../Selection";')

  return interfaceContent
}

function printOutcome(outcome: GeneratorResult[]) {
  const successNum = outcome.filter(
    (result) => result.state == 'success'
  ).length
  const failed = outcome
    .filter((result) => result.state == 'failed')
    .map(
      (result) =>
        result.compartment + '.' + result.selection + ': ' + result.error
    )
  const failedNum = failed.length
  console.log(
    `--Outcome--\nSuccess\n\tCount: ${successNum}\nFailed:\n\tCount: ${failedNum}\n\tSelections:\n\t\t${failed.join(
      '\n\t\t'
    )}`
  )
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
