const { loadData, memoryUsage, elapsedTime,
        printTestResults, updateResultsFile } = require('./utils.js')
const { iterable } = require('./hooks.js')

const users = loadData('data/large_dataset.json')

console.log('\nDefault JavaScript Map')

let time = elapsedTime(_ => {
    let defaultMap = users.map(iterable)
})

let memoryUsageInfo = memoryUsage()

printTestResults(memoryUsageInfo, time)

const testResults = Object.assign(memoryUsageInfo, { time: time })
updateResultsFile('map', 'js', testResults)
