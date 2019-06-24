const R = require('ramda')

const { loadData, memoryUsage, elapsedTime } = require('./utils.js')
const { wanted } = require('./hooks.js')

const users = loadData('data/small_dataset.json')

console.log('Ramda Find')

let time = elapsedTime(_ => {
    let ramdaFind = R.find(wanted, users)
})

console.log(time)

memoryUsage()
