// Selections taken from https://www.torn.com/api.html.
// property, timestamp

enum Selection {
    property = 'property',
    timestamp = 'timestamp'
}

export const isPropertySelection = (value: string): boolean => propertySelectionList.some(selection => selection === value);

export const propertySelectionList = ((): string[] => Object.values(Selection))();

export default Selection;