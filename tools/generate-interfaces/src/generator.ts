import fs from 'fs'
import translate from './translate'
import { GeneratorResult } from './types/generator'

function formatName(selection) {
  return selection.charAt(0).toUpperCase() + selection.slice(1)
}

class Generator {
  outPath: string

  constructor(outPath: string) {
    this.outPath = outPath
  }

  generateSelectionBase() {
    const path = `${this.outPath}/Selection.d.ts`
    const content = 'export type Selection = Record<string, unknown>\n'
    fs.writeFileSync(path, content)
  }

  generateSelectionInterface(
    compartment: string,
    selection: string,
    data: any
  ): GeneratorResult {
    // Get the interface name from the selection
    const name = formatName(selection)
    const content = translate(data, name)
  
    const path = `${this.outPath}/${compartment}/${name}.d.ts`
  
    fs.writeFileSync(path, content.join('\n'))
    console.log(`Created ${name}.d.ts`)
  
    return {
      compartment,
      selection,
      interface: `${compartment}/${selection}`,
      state: 'success',
    }
  }
}

export default Generator
