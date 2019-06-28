const R = require('ramda')

const { loadData, memoryUsage, elapsedTime,
        printTestResults, updateResultsFile } = require('./utils.js')
const { reducer } = require('./hooks.js')

const users = loadData('data/large_dataset.json')

console.log('\nRamda Reduce')

let time = elapsedTime(_ => {
    let ramdaReduce = R.reduce(reducer, 0, users)
})

let memoryUsageInfo = memoryUsage()

printTestResults(memoryUsageInfo, time)

const testResults = Object.assign(memoryUsageInfo, { time: time })
updateResultsFile('reduce', 'ramda', testResults)
