import TornClient, { api } from '../../src'

export interface Compartment {
  name: string
  selections: string[]
  execute: (client: TornClient, selection: string) => Promise<any>
}

function filterStrings(apiValues: unknown[]): string[] {
  return apiValues.filter((value): value is string => typeof value == 'string')
}

export default <Compartment[]>[
  {
    name: 'company',
    selections: filterStrings(Object.values(api.company)),
    execute: async (client, selection) =>
      client.company(undefined, [selection]),
  },
  {
    name: 'faction',
    selections: filterStrings(Object.values(api.faction)),
    execute: async (client, selection) =>
      client.faction(undefined, [selection]),
  },
  {
    name: 'market',
    selections: filterStrings(Object.values(api.market)),
    execute: async (client, selection) => client.market(undefined, [selection]),
  },
  {
    name: 'property',
    selections: filterStrings(Object.values(api.property)),
    execute: async (client, selection) =>
      client.property(undefined, [selection]),
  },
  {
    name: 'torn',
    selections: filterStrings(Object.values(api.torn)),
    execute: async (client, selection) => client.torn(undefined, [selection]),
  },
  {
    name: 'user',
    selections: filterStrings(Object.values(api.user)),
    execute: async (client, selection) => client.user(undefined, [selection]),
  },
]
