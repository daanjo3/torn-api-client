// Selections taken from https://www.torn.com/api.html.
// applications, armor, armorynews, attacknews, attacks, attacksfull, basic, boosters,
// caches, cesium, chain, chainreport, chains, contributors, crimeexp, crimenews, crimes,
// currency, donations, drugs, fundsnews, mainnews, medical, membershipnews, positions,
// reports, revives, revivesfull, stats, temporary, territory, territorynews, timestamp,
// upgrades, weapons

const selection = {
  applications: 'applications',
  armor: 'armor',
  armorynews: 'armorynews',
  attacknews: 'attacknews',
  attacks: 'attacks',
  attacksfull: 'attacksfull',
  basic: 'basic',
  boosters: 'boosters',
  caches: 'caches',
  cesium: 'cesium',
  chain: 'chain',
  chainreport: 'chainreport',
  chains: 'chains',
  contributors: 'contributors',
  crimeexp: 'crimeexp',
  crimenews: 'crimenews',
  crimes: 'crimes',
  currency: 'currency',
  donations: 'donations',
  drugs: 'drugs',
  fundsnews: 'fundsnews',
  mainnews: 'mainnews',
  medical: 'medical',
  membershipnews: 'membershipnews',
  positions: 'positions',
  reports: 'reports',
  revives: 'revives',
  revivesfull: 'revivesfull',
  stats: 'stats',
  temporary: 'temporary',
  territory: 'territory',
  territorynews: 'territorynews',
  timestamp: 'timestamp',
  upgrades: 'upgrades',
  weapons: 'weapons',
}

export const isFactionSelection = (value: string): boolean =>
  Object.values(selection).some((sel) => sel === value)

export default {
  ...selection,
  isSelection: isFactionSelection,
}
