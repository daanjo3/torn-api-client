// Selections taken from https://www.torn.com/api.html.
// applications, armor, armorynews, attacknews, attacks, attacksfull, basic, boosters,
// cesium, chain, chains, contributors, crimenews, crimes, currency, donations, drugs,
// fundsnews, mainnews, medical, membershipnews, positions, reports, revives, revivesfull,
// stats, temporary, territory, timestamp, upgrades, weapons

const selection = {
  applications: "applications",
  armor: "armor",
  armorynews: "armorynews",
  attacknews: "attacknews",
  attacks: "attacks",
  attacksfull: "attacksfull",
  basic: "basic",
  boosters: "boosters",
  cesium: "cesium",
  chain: "chain",
  chains: "chains",
  contributors: "contributors",
  crimenews: "crimenews",
  crimes: "crimes",
  currency: "currency",
  donations: "donations",
  drugs: "drugs",
  fundsnews: "fundsnews",
  mainnews: "mainnews",
  medical: "medical",
  membershipnews: "membershipnews",
  positions: "positions",
  reports: "reports",
  revives: "revives",
  revivesfull: "revivesfull",
  stats: "stats",
  temporary: "temporary",
  territory: "territory",
  timestamp: "timestamp",
  upgrades: "upgrades",
  weapons: "weapons",
};

export const isFactionSelection = (value: string): boolean =>
  Object.values(selection).some((sel) => sel === value);

export default {
  ...selection,
  isSelection: isFactionSelection,
};
