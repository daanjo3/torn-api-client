import { GeneratorResult } from "../types/generator"

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

export default {
  printOutcome
}
