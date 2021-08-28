// Selections taken from https://www.torn.com/api.html.
// applications, companies, detailed, employees, news, newsfull, profile, stock, timestamp

enum Selection {
    applications = 'applications', 
    companies = 'companies',
    detailed = 'detailed', 
    employees = 'employees', 
    news = 'news', 
    newsfull = 'newsfull', 
    profile = 'profile', 
    stock = 'stock', 
    timestamp = 'timestamp'
}

export const isCompanySelection = (value: string): boolean => companySelectionList.some(selection => selection === value);

export const companySelectionList = ((): string[] => Object.values(Selection))();

export default Selection;