const { loadData, memoryUsage, elapsedTime, printTestResults } = require('./utils.js')
const { reducer } = require('./hooks.js')

const users = loadData('data/small_dataset.json')

console.log('\nDefault JavaScript Reduce')

let time = elapsedTime(_ => {
    let defaultReduce = users.reduce(reducer, 0)
})

let memoryUsageInfo = memoryUsage()

printTestResults(memoryUsageInfo, time)
