const { loadData, memoryUsage, elapsedTime, printTestResults } = require('./utils.js')
const { iterable } = require('./hooks.js')

const users = loadData('data/small_dataset.json')

console.log('\nDefault JavaScript Map')

let time = elapsedTime(_ => {
    let defaultMap = users.map(iterable)
})

let memoryUsageInfo = memoryUsage()

printTestResults(memoryUsageInfo, time)
