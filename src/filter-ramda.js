const R = require('ramda')

const { loadData, memoryUsage, elapsedTime,
        printTestResults, updateResultsFile } = require('./utils.js')
const { filterable } = require('./hooks.js')

const users = loadData('data/small_dataset.json')

console.log('\nRamda Filter')

let time = elapsedTime(_ => {
    let ramdaFilter = R.filter(filterable, users)
})

let memoryUsageInfo = memoryUsage()

printTestResults(memoryUsageInfo, time)

const testResults = Object.assign(memoryUsageInfo, { time: time })
updateResultsFile('filter', 'ramda', testResults)


