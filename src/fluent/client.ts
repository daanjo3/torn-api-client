import TornClient from "../TornClient"

interface Error {}
type IUserRequest = {}

interface IAmmo extends IUserRequest {
    ammo: {
        ammoID: number,
        typeID: number,
        size: string,
        type: string,
        quantity: number,
        equipped: number
    }[]
}

interface IAttacks extends IUserRequest {
    attacks: { [attackId: string]: {
        code: string,
        timestamp_started: number,
        timestamp_ended: number,
        attacker_id: number,
        attacker_name: string,
        attacker_faction: number,
        attacker_factionname: string,
        defender_id: number,
        defender_name: string,
        defender_faction: number,
        defender_factionname: string,
        result: string,
        stealthed: number,
        respect: number,
        chain: number,
        raid: number,
        ranked_war: number,
        respect_gain: number,
        respect_loss: number,
        modifiers: {
            fair_fight: number,
            war: number,
            retaliation: number,
            group_attack: number,
            overseas: number,
            chain_bonus: number,
        },
    }}
}

interface UserRequestBuilder<T> {
    client: TornClient,
    selections: string[],
    execute: () => Promise<T>,
    ammo: () => UserRequestBuilder<T & IAmmo>
    attacks: () => UserRequestBuilder<T & IAttacks>
}

const UserRequestBuilder = (client: TornClient): UserRequestBuilder<IUserRequest | Error> => ({
    client: client,
    selections: [],
    ammo() {
        this.selections.push('ammo');
        return {
            ...this
        }
    },
    attacks() {
        this.selections.push('attacks');
        return {
            ...this
        }
    },
    async execute(id?: string) {
        return this.client.user(id, this.selections);
    }
});

async function testBuilder() {
    const client = new TornClient("TrKhpksbXUwDGa9U");
    const response = await UserRequestBuilder(client)
        .ammo()
        .attacks()
        .execute();
    
    return response.ammo[0].size;
}

testBuilder().then(console.log);

// const fluentClient = (client: TornClient) => {
//     user: UserRequestBuilder
// }