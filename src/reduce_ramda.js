const R = require('ramda')

const { loadData, memoryUsage, elapsedTime } = require('./utils.js')
const { reducer } = require('./hooks.js')

const users = loadData('data/small_dataset.json')

console.log('Ramda Reduce')

let time = elapsedTime(_ => {
    let ramdaReduce = R.reduce(reducer, 0, users)
})

console.log(time)

memoryUsage()
