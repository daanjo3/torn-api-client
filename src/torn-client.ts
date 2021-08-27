import axios, { AxiosResponse } from "axios";

export default class TornClient {
    apiKey: string;
    baseUrl: string;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://api.torn.com';
    }

    async execute(url: string): Promise<any> {
        console.debug(`GET ${url}`);
        const response = await axios.get(url);
        if (response.data['error'] != null) {
            console.error(response.data['error']['error']);
            // TODO eventually do something different here
        }
        return response.data;
    }

    buildUrl(path: string, id?: string, selections?: string | string[]): string {
        return `${this.baseUrl}/${path}/${id != null ? id : ''}` + 
            `?selections=${selections != null ? selections : ''}` +
            `&key=${this.apiKey}`;
    }

    async user(id?: string, selections?: string | string[]): Promise<any> {
        return this.execute(this.buildUrl('user', id, selections));
    }
}