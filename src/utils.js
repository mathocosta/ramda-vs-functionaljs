const fs = require('fs')
const path = require('path')
const process = require('process')
const now = require('performance-now')

/**
 * Imprime as informações de memória de um processo NodeJS.
 * Os dados são dividos em RSS (Resident Set Size), heap total, heap usada e "external" que é
 * a memória usada pelos objetos C++ para dar suporte aos objetos criados pela V8.
 */
function memoryUsage() {
    const used = process.memoryUsage()

    for (let key in used) {
        console.log(`${key}: ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`)
    }
}

/**
 * Carrega os objetos no arquivo JSON passado como parâmetro na função.
 * @param  {String} filename Nome do arquivo a ser carregado
 */
function loadData(filename) {
    const rawData = fs.readFileSync(path.resolve(__dirname, filename))
    const json = JSON.parse(rawData)

    return json
}

/**
 * Computa o tempo de execução do callback passado como parâmetro
 * executado na quantidade de vezes passada como parâmetro (o padrão é 1000).
 * @param  {Function} callback Bloco de código a ser executado
 * @param  {Number} número de vezes que deve ser executado o callback e guardado os tempos
 */
function elapsedTime(callback, numberOfIterations = 1000) {
    let sum = 0

    for (let i = 0; i < numberOfIterations; i++) {
        let start = now()
        callback()
        let end = now()

        sum += end - start
    }

    return (sum / numberOfIterations).toFixed(4)
}

module.exports = {
    loadData,
    memoryUsage,
    elapsedTime
}
