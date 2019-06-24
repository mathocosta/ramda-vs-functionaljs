const { loadData, memoryUsage, elapsedTime } = require('./utils.js')
const { wanted } = require('./hooks.js')

const users = loadData('data/small_dataset.json')

console.log('Default JavaScript Find')

let time = elapsedTime(_ => {
    let defaultFind = users.find(wanted)
})

console.log(time)

memoryUsage()
