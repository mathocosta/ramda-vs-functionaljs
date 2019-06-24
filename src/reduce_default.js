const { loadData, memoryUsage, elapsedTime } = require('./utils.js')
const { reducer } = require('./hooks.js')

const users = loadData('data/small_dataset.json')

console.log('Default JavaScript Reduce')

let time = elapsedTime(_ => {
    let defaultReduce = users.reduce(reducer, 0)
})

console.log(time)

memoryUsage()
