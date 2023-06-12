// Selections taken from https://www.torn.com/api.html.
// bazaar, itemmarket, pointsmarket, timestamp

const selection = {
  bazaar: 'bazaar',
  itemmarket: 'itemmarket',
  pointsmarket: 'pointsmarket',
  timestamp: 'timestamp',
}

export const isItemMarketSelection = (value: string): boolean =>
  Object.values(selection).some((sel) => sel === value)

export default {
  ...selection,
  isSelection: isItemMarketSelection,
}
