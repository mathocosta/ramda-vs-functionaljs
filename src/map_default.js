const { loadData, memoryUsage, elapsedTime } = require('./utils.js')
const { iterable } = require('./hooks.js')

const users = loadData('data/small_dataset.json')

console.log('Default JavaScript Map')

let time = elapsedTime(_ => {
    let defaultMap = users.map(iterable)
})

console.log(time)

memoryUsage()
