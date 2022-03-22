const JsonToTS = require('json-to-ts')
const fs = require('fs')
const TornClient = require('../../lib').default;
const selections = require('../../lib').api;

const baseOutPath = `${__dirname}/out`;
const client = new TornClient(process.env.TORN_API_KEY);

/**
 * Issues with this method
 * 1. user.profile has element basicicons which can have different fields per user. I probably don't have the full picture.
 * 2. Differences in searching by API key and by user/faction/company id are not being accounted for.
 * 3. Attacks is processed per-attack, which is not convenient.
 * 4. Merits have strings with spaces as keys .
 * 5. Multiple interfaces have numbers as name.
 * 
 * One way to continue would be to take the current state as-is and process it further by hand.
 * The current method already alleviates a lot of the burden of creating these interfaces.
 * However to make the process repeatable the issues above should be addressed.
 */

const compartments = [
    {
        name: 'company',
        selections: Object.values(selections.company),
        execute: async (selection) => client.company(null, [selection])
    },
    {
        name: 'faction',
        selections: Object.values(selections.faction),
        execute: async (selection) => client.faction(null, [selection])
    },
    {
        name: 'market',
        selections: Object.values(selections.market),
        execute: async (selection) => client.market(null, [selection])
    },
    {
        name: 'property',
        selections: Object.values(selections.property),
        execute: async (selection) => client.property(null, [selection])
    },
    {
        name: 'torn',
        selections: Object.values(selections.torn),
        execute: async (selection) => client.torn(null, [selection])
    },
    {
        name: 'user',
        selections: Object.values(selections.user),
        execute: async (selection) => client.user(null, [selection])
    }
]

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function loop() {
    const outcome = [];
    let countPerMin = 0;
    // For now just test the user compartment
    for (const compartment of [compartments[5]]) {
        console.log(`Processing compartment ${compartment.name}`)

        for (const selection of compartment.selections) {
            if (typeof selection != 'string') {
                continue;
            }
            console.log(`Processing selection ${compartment.name}.${selection}`)
            const result = await generateInterface(compartment.name, selection);
            outcome.push({
                ...result
            });
            countPerMin += 1;
            if (countPerMin > 50) {
                console.log('Performed 50 request, sleeping for 1min to prevent IP ban.')
                await sleep(60000)
                countPerMin = 0;
            }
        }
    }
    const successNum = outcome.filter((result) => result.state == 'success').length
    const failed = outcome.filter((result) => result.state == 'failed').map((result) => result.compartment + '.' + result.selection + ': ' + result.error)
    const failedNum = failed.length
    console.log(`--Outcome--\nSuccess\n\tCount: ${successNum}\nFailed:\n\tCount: ${failedNum}\n\tSelections:\n\t\t${failed.join('\n\t\t')}`);
}

loop().then(console.log('done'))

function selectionToInterfaceName(selection) {
    return 'I' + selection.charAt(0).toUpperCase() + selection.slice(1);
}

async function generateInterface(compartment, selection) {
    // Get the interface name from the selection
    const interfaceName = selectionToInterfaceName(selection);
    // Get a JSON example of the data to be translated.
    const jsonData = await client.user(null, [selection])
    if ('error' in jsonData) {
        console.log(`Failed to create interface ${interfaceName} due to ${jsonData.error}`);
        return {
            compartment,
            selection,
            interface: interfaceName,
            state: 'failed',
            error: jsonData.error.error
        }
    }
    // Make a rough translation from JSON to Typescript
    const interfaceContent = JsonToTS(jsonData, { rootName: interfaceName });
    // Make sure the main interface is exported and extends the ISelection type
    interfaceContent[0] = interfaceContent[0].replace(
        `interface ${interfaceName}`, 
        `export interface ${interfaceName} extends ISelection`
    );
    // Add the import line for ISelection to the top of the file.
    interfaceContent.unshift('import { ISelection } from "../ISelection";');
    const path = `${baseOutPath}/${compartment}/${interfaceName}.d.ts`;
    fs.writeFileSync(path, interfaceContent.join('\n'));
    console.log(`Created ${interfaceName}.d.ts`);
    return {
        compartment,
        selection,
        interface: interfaceName,
        state: 'success',
    }
}

// generateInterface('ammo', 'IAmmo').then(console.log('done'));


function createOutDirectory() {
    try {
        // first check if directory already exists
        if (!fs.existsSync(baseOutPath)) {
            fs.mkdirSync(baseOutPath);
            console.log("Directory is created.");
        } else {
            console.log("Directory already exists.");
        }
    } catch (err) {
        console.log(err);
    }
}

function removeOutDirectory() {
    fs.rmdirSync(baseOutPath, { recursive: true, force: true});
}