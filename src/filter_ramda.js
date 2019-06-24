const R = require('ramda')

const { loadData, memoryUsage, elapsedTime } = require('./utils.js')
const { filterable } = require('./hooks.js')

const users = loadData('data/small_dataset.json')

console.log('Ramda Filter')

let time = elapsedTime(_ => {
    let ramdaFilter = R.filter(filterable, users)
})

console.log(time)

memoryUsage()
