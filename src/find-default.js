const { loadData, memoryUsage, elapsedTime,
        printTestResults, updateResultsFile } = require('./utils.js')
const { wanted } = require('./hooks.js')

const users = loadData('data/large_dataset.json')

console.log('\nDefault JavaScript Find')

let time = elapsedTime(_ => {
    let defaultFind = users.find(wanted)
})

let memoryUsageInfo = memoryUsage()

printTestResults(memoryUsageInfo, time)

const testResults = Object.assign(memoryUsageInfo, { time: time })
updateResultsFile('find', 'js', testResults)
