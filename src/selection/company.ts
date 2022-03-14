// Selections taken from https://www.torn.com/api.html.
// applications, companies, detailed, employees, news, newsfull, profile, stock, timestamp

const selection = {
    applications: 'applications', 
    companies: 'companies',
    detailed: 'detailed', 
    employees: 'employees', 
    news: 'news', 
    newsfull: 'newsfull', 
    profile: 'profile', 
    stock: 'stock', 
    timestamp: 'timestamp'
}

export const isCompanySelection = (value: string): boolean => Object.values(selection).some(sel => sel === value);

export default {
    ...selection,
    isSelection: isCompanySelection
};