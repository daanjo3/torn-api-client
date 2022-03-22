const JsonToTS = require('json-to-ts')
const fs = require('fs')
const TornClient = require('../../lib').default;

const baseOutPath = './out';
const client = new TornClient('TrKhpksbXUwDGa9U');

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
    fs.rmdirSync(baseOutPath, { recursive: true, force: true})
}

async function getBarsAndPrintInterface() {
    const barsJson = await client.user(null, ['bars'])
    const interfaces = JsonToTS(barsJson);
    const path = baseOutPath + '/IBars.d.ts'
    fs.writeFileSync(path, interfaces.join('\n'))
    interfaces.forEach(console.log);
}

getBarsAndPrintInterface().then(console.log('done'))
 
// JsonToTS(json).forEach( typeInterface => {
//   console.log(typeInterface)
// })