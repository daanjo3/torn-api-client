// Selections taken from https://www.torn.com/api.html.
// bazaar, itemmarket, pointsmarket, timestamp

enum Selection {
    bazaar = 'bazaar', 
    itemmarket = 'itemmarket', 
    pointsmarket = 'pointsmarket', 
    timestamp = 'timestamp'
}

export const isItemMarketSelection = (value: string): boolean => itemMarketSelectionList.some(selection => selection === value);

export const itemMarketSelectionList = ((): string[] => Object.values(Selection))();

export default Selection;