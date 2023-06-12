// Selections taken from https://www.torn.com/api.html.
// bank, cards, chainreport, cityshops, companies, competition, 
// education, factiontree, gyms, honors, itemdetails, items, itemstats, 
// logcategories, logtypes, medals, organisedcrimes, pawnshop, 
// pokertables, properties, rackets, raids, rankedwarreport, rankedwars, 
// stats, stocks, territory, territorynames, territorywars, timestamp

const selection = {
    bank: 'bank', 
    cards: 'cards',
    chainreport: 'chainreport',
    cityshops: 'cityshops',
    companies: 'companies', 
    competition: 'competition', 
    education: 'education', 
    factiontree: 'factiontree', 
    gyms: 'gyms', 
    honors: 'honors', 
    itemdetails: 'itemdetails',
    items: 'items', 
    itemstats: 'itemstats',
    logcategories: 'logcategories', 
    logtypes: 'logtypes', 
    medals: 'medals', 
    organisedcrimes: 'organisedcrimes', 
    pawnshop: 'pawnshop',
    pokertables: 'pokertables',
    properties: 'properties', 
    rackets: 'rackets', 
    raids: 'raids', 
    rankedwarreport: 'rankedwarreport',
    stats: 'stats', 
    stocks: 'stocks', 
    territory: 'territory', 
    territorynames: 'territorynames',
    territorywars: 'territorywars', 
    timestamp: 'timestamp'
}

export const isTornSelection = (value: string): boolean => Object.values(selection).some(selection => selection === value);

export default {
    ...selection,
    isSelection: isTornSelection
};