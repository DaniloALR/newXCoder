const path = require('path');
const fs = require('fs')

function getInfoDatabase(filename){
    const filePath = path.join(__dirname, '..', 'users', `${filename}.json`)
    const readFromFile = fs.readFileSync(filePath, 'utf8')
    const infos = JSON.parse(readFromFile)

    return infos
}

module.exports = getInfoDatabase