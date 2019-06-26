const R = require('ramda')

const { loadData, memoryUsage, elapsedTime, printTestResults } = require('./utils.js')
const { wanted } = require('./hooks.js')

const users = loadData('data/small_dataset.json')

console.log('\nRamda Find')

let time = elapsedTime(_ => {
    let ramdaFind = R.find(wanted, users)
})

let memoryUsageInfo = memoryUsage()

printTestResults(memoryUsageInfo, time)
