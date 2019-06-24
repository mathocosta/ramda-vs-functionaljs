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
 * @param  {string} filename Nome do arquivo a ser carregado
 */
function loadData(filename) {
    const rawData = fs.readFileSync(path.resolve(__dirname, filename))
    const json = JSON.parse(rawData)

    return json
}

/**
 * Computa o tempo de execução do callback passado como parâmetro
 * @param  {Function} callback Bloco de código a ser executado
 */
function elapsedTime(callback) {
    let start = now()
    callback()
    let end = now()

    return (end-start).toFixed(4)
}

module.exports = {
    loadData,
    memoryUsage,
    elapsedTime
}
