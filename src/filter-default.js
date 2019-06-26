const { loadData, memoryUsage, elapsedTime, printTestResults } = require('./utils.js')
const { filterable } = require('./hooks.js')

const users = loadData('data/small_dataset.json')

console.log('\nDefault JavaScript Filter')

let time = elapsedTime(_ => {
    let defaultFilter = users.filter(filterable)
})

let memoryUsageInfo = memoryUsage()

printTestResults(memoryUsageInfo, time)


