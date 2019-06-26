const R = require('ramda')

const { loadData, memoryUsage, elapsedTime, printTestResults } = require('./utils.js')
const { filterable } = require('./hooks.js')

const users = loadData('data/small_dataset.json')

console.log('\nRamda Filter')

let time = elapsedTime(_ => {
    let ramdaFilter = R.filter(filterable, users)
})

let memoryUsageInfo = memoryUsage()

printTestResults(memoryUsageInfo, time)


