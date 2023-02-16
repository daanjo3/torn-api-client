import { createSchema } from 'genson-js'
import fs from 'fs'
import { compile } from 'json-schema-to-typescript'

const resourceDir = `${__dirname}/../resources`
const compartmentName = 'user-attacks'
const compartmentDir = `${resourceDir}/${compartmentName}`

const inputFilePath = `${compartmentDir}/input.json`
const schemaFilePath = `${compartmentDir}/schema.json`
const interfaceFilePath = `${compartmentDir}/interface.d.ts`

// https://www.jsdocs.io/package/json-schema-to-typescript

function main(): void {
  const inputJson = JSON.parse(fs.readFileSync(inputFilePath, { encoding: 'utf-8'}))
  console.log(JSON.stringify(inputJson, null, 2))
  const schema = createSchema(inputJson)
  console.log(JSON.stringify(schema, null, 2))
  fs.writeFileSync(schemaFilePath, JSON.stringify(schema, null, 2))
  
  compile(schema, 'Ammo', { additionalProperties: false }).then((out) => {
    console.log(out)
    fs.writeFileSync(interfaceFilePath, out)
  })
}

main()
