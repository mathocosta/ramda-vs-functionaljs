const Chart = require('chart.js')

const chartColors = { red: 'rgb(255, 99, 132)', blue: 'rgb(54, 162, 235)' }

function loadResults(callback) {
    let httpRequest = new XMLHttpRequest()
    httpRequest.overrideMimeType('application/json')
    httpRequest.open('GET', 'src/data/results.json')
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState == 4 && httpRequest.status == '200') {
            const json = JSON.parse(httpRequest.responseText)
            callback(json)
        }
    }
    httpRequest.send(null)
}

function formatResultsData(wantedKey, data) {
    const color = Chart.helpers.color

    let values = { js: [], ramda: [] }

    for (let method in data) {
        for (let origin in data[method]) {
            values[origin].push(data[method][origin][wantedKey])
        }
    }

    const chartData = {
        labels: ['Filter', 'Find', 'Map', 'Reduce'],
        datasets: [{
            label: 'Vanilla Javascript',
            backgroundColor: color(chartColors.red).alpha(0.5).rgbString(),
            borderColor: chartColors.red,
            borderWidth: 1,
            data: values.js
        }, {
            label: 'Ramda',
            backgroundColor: color(chartColors.blue).alpha(0.5).rgbString(),
            borderColor: chartColors.blue,
            borderWidth: 1,
            data: values.ramda
        }]
    }

    return chartData
}

function createChart(title, data) {
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')

    let chart = new Chart(context, {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            legend: { position: 'top' },
            title: {
                display: true,
                text: title
            }
        }
    })

    document.body.appendChild(canvas)
}

(function () {
    Chart.defaults.global.defaultFontSize = 36

    loadResults(data => {
        createChart('Time', formatResultsData('time', data))
        createChart('Resident Set Size', formatResultsData('rss', data))
        createChart('Heap Used', formatResultsData('heapUsed', data))
    })
})()
