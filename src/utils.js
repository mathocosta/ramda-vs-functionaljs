const fs = require('fs')
const path = require('path')
const process = require('process')
const now = require('performance-now')

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
 * Atualiza o arquivo de resultados dos testes
 * @param  {Object} results resultados do último teste
 */
function updateResultsFile(resultsChange) {
    const resultsFilename = 'results.json'

    let results = loadData(resultsFilename)
    results = Object.assign(results, resultsChange)

    let resultsData = JSON.stringify(results)

    fs.writeFileSync(resultsFilename, resultsData)
}

/**
 * Retorna as informações de memória de um processo NodeJS.
 * Os dados são dividos em RSS (Resident Set Size), heap total, heap usada e "external" que é
 * a memória usada pelos objetos C++ para dar suporte aos objetos criados pela V8.
 */
function memoryUsage() {
    const used = process.memoryUsage()

    return used
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

/**
 * Imprime os resultados do teste.
 * @param  {Object} memoryUsageInfo informações de uso de memória
 * @param  {Number} elapsedTimeRegistered média do tempo gasto registrado
 */
function printTestResults(memoryUsageInfo, elapsedTimeRegistered) {
    console.log(`TIME: ${elapsedTimeRegistered}`)

    for (let key in memoryUsageInfo) {
        console.log(
            `${key.toUpperCase()}: ${Math.round(memoryUsageInfo[key] / 1024 / 1024 * 100) / 100} MB`
        )
    }
}

module.exports = {
    loadData,
    memoryUsage,
    elapsedTime,
    printTestResults,
    updateResultsFile
}
