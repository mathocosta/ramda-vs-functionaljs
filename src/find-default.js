const { loadData, memoryUsage, elapsedTime, printTestResults } = require('./utils.js')
const { wanted } = require('./hooks.js')

const users = loadData('data/small_dataset.json')

console.log('\nDefault JavaScript Find')

let time = elapsedTime(_ => {
    let defaultFind = users.find(wanted)
})

let memoryUsageInfo = memoryUsage()

printTestResults(memoryUsageInfo, time)
