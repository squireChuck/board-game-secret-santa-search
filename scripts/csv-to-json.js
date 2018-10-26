// Convert BoardGameGeek CSV's to json files.
// The filename of each resource will become the "person" who might own a game.
const util = require('util') // util.promisify
const nodeFs = require('fs')
const readdir = util.promisify(nodeFs.readdir)
const readFile = util.promisify(nodeFs.readFile)
const writeFile = util.promisify(nodeFs.writeFile)

const baseResourcePath = './resources'

// var csv is the CSV file with headers
// From https://stackoverflow.com/a/27979069/6445206
function csvJSON (csv) {
  var lines = csv.split('\n')

  var result = []

  var headers = lines[0].split(',')

  // BGG has a lot of double quotes, which really messes
  //  with writing the file to JSON.
  const stripQuotes = (str) => str.replace(/['"]*/g, '')

  for (var i = 1; i < lines.length; i++) {
    var obj = {}
    var currentline = lines[i].split(',')

    for (var j = 0; j < headers.length; j++) {
      obj[stripQuotes(headers[j])] = stripQuotes(currentline[j])
    }

    result.push(obj)
  }

  // return result; //JavaScript object
  return JSON.stringify(result)
}

async function getFileNames () {
  try {
    const files = await readdir(dirPath)
    return files
  } catch (err) {
    console.log(err)
  }
}

async function getFileData () {
  try {
    const csvData = await readFile(`${baseResourcePath}/jane.csv`, 'utf8')
    const boardGames = csvJSON(csvData)
    console.log(boardGames)
    const playerData = [
      {
        player: 'jane',
        games: JSON.parse(boardGames)
      }
    ]
    await writeFile('test.json', JSON.stringify(playerData, null, 4), 'utf8')
  } catch (err) {
    console.log(err)
  }
}

console.log(`Starting...`)
getFileData()

console.log(`Done!!!!`)
