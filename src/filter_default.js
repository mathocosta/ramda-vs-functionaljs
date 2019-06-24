const { loadData, memoryUsage, elapsedTime } = require('./utils.js')
const { filterable } = require('./hooks.js')

const users = loadData('data/small_dataset.json')

console.log('Default JavaScript Filter')

let time = elapsedTime(_ => {
    let defaultFilter = users.filter(filterable)
})

console.log(time)

memoryUsage()

