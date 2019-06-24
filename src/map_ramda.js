const R = require('ramda')

const { loadData, memoryUsage, elapsedTime } = require('./utils.js')
const { iterable } = require('./hooks.js')

const users = loadData('data/small_dataset.json')

console.log('Ramda Map')

let time = elapsedTime(_ => {
    let ramdaMap = R.map(iterable, users)
})

console.log(time)

memoryUsage()
