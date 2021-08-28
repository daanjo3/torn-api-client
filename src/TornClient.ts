import axios from "axios";

import type { Selection, CompanySelection, FactionSelection, ItemMarketSelection,
    PropertySelection, TornSelection, UserSelection } from 'src/@types/selections';

import { isCompanySelection } from './company/selections';
import { isFactionSelection } from './faction/selections';
import { isItemMarketSelection } from './item-market/selections';
import { isPropertySelection } from './property/selections';
import { isTornSelection } from './torn/selections';
import { isUserSelection } from './user/selections';
import verifySelections from './verifySelections';

export default class TornClient {
    apiKey: string;
    baseUrl: string;

    constructor(apiKey?: string) {
        if (apiKey != null) {
            this.apiKey = apiKey;
        } else if (process.env.TORN_API_KEY != null) {
            this.apiKey = process.env.TORN_API_KEY;
        } else {
            throw new Error('No API key was provided.');
        }
        this.baseUrl = 'https://api.torn.com';
    }

    // Endpoint specific calls
    async company(id?: string, selections?: CompanySelection | CompanySelection[]): Promise<any> {
        verifySelections(selections, isCompanySelection);
        return this.execute(this.buildUrl('company', id, selections));
    }

    async faction(id?: string, selections?: FactionSelection | FactionSelection[]): Promise<any> {
        verifySelections(selections, isFactionSelection);
        return this.execute(this.buildUrl('faction', id, selections));
    }

    async market(id?: string, selections?: ItemMarketSelection | ItemMarketSelection[]): Promise<any> {
        verifySelections(selections, isItemMarketSelection);
        return this.execute(this.buildUrl('market', id, selections));
    }

    async property(id?: string, selections?: PropertySelection | PropertySelection[]): Promise<any> {
        verifySelections(selections, isPropertySelection);
        return this.execute(this.buildUrl('property', id, selections));
    }

    async torn(id?: string, selections?: TornSelection | TornSelection[]): Promise<any> {
        verifySelections(selections, isTornSelection);
        return this.execute(this.buildUrl('torn', id, selections));
    }

    async user(id?: string, selections?: UserSelection | UserSelection[]): Promise<any> {
        verifySelections(selections, isUserSelection);
        return this.execute(this.buildUrl('user', id, selections));
    }

    // API call
    async execute(url: string): Promise<any> {
        console.debug(`GET ${url}`);
        const response = await axios.get(url);
        if (response.data['error'] != null) {
            console.error(response.data['error']['error']);
            // TODO eventually do something different here
        }
        return response.data;
    }

    // URL builders
    buildUrl(path: string, id?: string, selections?: Selection | Selection[]): string {
        return `${this.baseUrl}/${path}/${id != null ? id : ''}` + 
            `?selections=${selections != null ? selections : ''}` +
            `&key=${this.apiKey}`;
    }

    buildSelectionString(selections: Selection | Selection[]): string {
        if (selections == null) {
            return '';
        }
        if (Array.isArray(selections)) {
            return selections.map(s => s.toLowerCase()).join(',');
        }
        return selections;
    }
}