// Selections taken from https://www.torn.com/api.html.
// property, timestamp

const selection = {
  property: 'property',
  timestamp: 'timestamp',
}

export const isPropertySelection = (value: string): boolean =>
  Object.values(selection).some((sel) => sel === value)

export default {
  ...selection,
  isSelection: isPropertySelection,
}
