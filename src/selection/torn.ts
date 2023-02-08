// Selections taken from https://www.torn.com/api.html.
// bank, cards, companies, competition, education, factiontree, gyms, honors, items,
// logcategories, logtypes, medals, organisedcrimes, pawnshop, properties, rackets,
// raids, stats, stocks, territory, territorywars, timestamp

const selection = {
  bank: 'bank',
  cards: 'cards',
  companies: 'companies',
  competition: 'competition',
  education: 'education',
  factiontree: 'factiontree',
  gyms: 'gyms',
  honors: 'honors',
  items: 'items',
  logcategories: 'logcategories',
  logtypes: 'logtypes',
  medals: 'medals',
  organisedcrimes: 'organisedcrimes',
  pawnshop: 'pawnshop',
  properties: 'properties',
  rackets: 'rackets',
  raids: 'raids',
  stats: 'stats',
  stocks: 'stocks',
  territory: 'territory',
  territorywars: 'territorywars',
  timestamp: 'timestamp',
}

export const isTornSelection = (value: string): boolean =>
  Object.values(selection).some((selection) => selection === value)

export default {
  ...selection,
  isSelection: isTornSelection,
}
