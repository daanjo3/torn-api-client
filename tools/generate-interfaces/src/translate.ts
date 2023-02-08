import JsonToTS from "json-to-ts"

export default function translate(jsonData: any, rootName: string): string[] {
  // Make a rough translation from JSON to Typescript
  const interfaces = JsonToTS(jsonData, { rootName })
  
  // Make sure the main interface is exported and extends the Selection type
  setExported(interfaces, 0, rootName)
  setInheritance(interfaces, 0, rootName, 'Selection')
  // Add the import line for Selection to the top of the file.
  addImport(interfaces, '../Selection', { named: ['Selection']})

  return interfaces
}

function setExported(interfaces: string[], index: number, name: string) {
  // Make more elegant with regex
  interfaces[index] = interfaces[index].replace(
    `interface ${name}`,
    `export interface ${name}`
  )
}

function setInheritance(interfaces: string[], index: number, name: string, parent: string) {
  // Make more elegant with regex
  interfaces[index] = interfaces[index].replace(
    `interface ${name}`,
    `interface ${name} extends ${parent}`
  )
}

function addImport(interfaces: string[], module: string, exp: { default?: string, named?: string[] }) {
  const imports: string[] = []
  if (exp.default) {
    imports.push(exp.default)
  }
  if (exp.named) {
    imports.push(`{ ${exp.named.join(', ')} }`)
  }
  if (imports.length > 0) {
    const importStr = `import ${imports.join(', ')} from '${module}'`
    interfaces.unshift(importStr)
  }
}
