// Selections taken from https://www.torn.com/api.html.
// ammo, attacks, attacksfull, bars, basic, battlestats, bazaar, cooldowns, crimes, discord, display,
// education, events, gym, hof, honors, icons, inventory, jobpoints, log, medals, merits, messages,
// money, networth, newevents, newmessages, notifications, perks, personalstats, profile, properties,
// receivedevents, refills, reports, revives, revivesfull, skills, stocks, timestamp, travel, weaponexp, workstats

const selection = {
  ammo: "ammo",
  attacks: "attacks",
  attacksfull: "attacksfull",
  bars: "bars",
  basic: "basic",
  battlestats: "battlestats",
  bazaar: "bazaar",
  cooldowns: "cooldowns",
  crimes: "crimes",
  discord: "discord",
  display: "display",
  education: "education",
  events: "events",
  gym: "gym",
  hof: "hof",
  honors: "honors",
  icons: "icons",
  inventory: "inventory",
  jobpoints: "jobpoints",
  log: "log",
  medals: "medals",
  merits: "merits",
  messages: "messages",
  money: "money",
  networth: "networth",
  newevents: "newevents",
  newmessages: "newmessages",
  notifications: "notifications",
  perks: "perks",
  personalstats: "personalstats",
  profile: "profile",
  properties: "properties",
  receivedevents: "receivedevents",
  refills: "refills",
  reports: "reports",
  revives: "revives",
  revivesfull: "revivesfull",
  skills: "skills",
  stocks: "stocks",
  timestamp: "timestamp",
  travel: "travel",
  weaponexp: "weaponexp",
  workstats: "workstats",
};

export const isUserSelection = (value: string): boolean =>
  Object.values(selection).some((sel) => sel === value);

export default {
  ...selection,
  isSelection: isUserSelection,
};
