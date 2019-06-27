const R = require('ramda')

const { loadData, memoryUsage, elapsedTime,
        printTestResults, updateResultsFile } = require('./utils.js')
const { iterable } = require('./hooks.js')

const users = loadData('data/small_dataset.json')

console.log('\nRamda Map')

let time = elapsedTime(_ => {
    let ramdaMap = R.map(iterable, users)
})

let memoryUsageInfo = memoryUsage()

printTestResults(memoryUsageInfo, time)

const testResults = Object.assign(memoryUsageInfo, { time: time })
updateResultsFile('map', 'ramda', testResults)
