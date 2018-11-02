// Convert BoardGameGeek CSV's to json files.
// The filename of each resource will become the "person" who might own a game.
const util = require('util') // util.promisify
const nodeFs = require('fs')
const readdir = util.promisify(nodeFs.readdir)
const readFile = util.promisify(nodeFs.readFile)
const writeFile = util.promisify(nodeFs.writeFile)

// The directory to read game collections and write the output json file.
const baseResourcePath = './resources'

// var csv is the CSV file with headers
// Adapted from https://stackoverflow.com/a/27979069/6445206
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

  return result
}

async function getFileNames () {
  try {
    const files = await readdir(baseResourcePath)
    return files.filter(file => file.includes('.csv'))
  } catch (err) {
    console.log(err)
  }
}

async function getFileData (fileName) {
  try {
    const csvData = await readFile(`${baseResourcePath}/${fileName}`, 'utf8')
    const playerName = fileName.replace('.csv', '')
    const boardGames = csvJSON(csvData)
    return {
      name: `${playerName.charAt(0).toUpperCase()}${playerName.slice(1)}`,
      games: boardGames
    }
  } catch (err) {
    console.log(err)
  }
}

async function getAllFileData (fileNames) {
  const fileDataPromises = fileNames.map(async fileName => {
    const fileData = await getFileData(fileName)
    return fileData
  })
  const allFileData = await Promise.all(fileDataPromises)
  return allFileData.reduce((allData, fileData) => ([
    ...allData,
    fileData
  ]), [])
}
async function writeJSON (json) {
  try {
    await writeFile(`${baseResourcePath}/players.json`,
      JSON.stringify(json, null, 2),
      'utf8'
    )
  } catch (err) {
    console.log(err)
  }
}

async function run () {
  try {
    console.log(`Starting...`)

    const fileNames = await getFileNames()
    const allData = await getAllFileData(fileNames)
    await writeJSON(allData)

    console.log(`Done!!!!`)
  } catch (err) {
    console.log(err)
  }
}

run()
