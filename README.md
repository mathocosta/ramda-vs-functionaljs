# Ramda vs Vanilla JavaScript

Projeto da cadeira de análise e desempenho que compara a performance de implementações de métodos funcionais da biblioteca [Ramda](https://ramdajs.com) e os disponíveis no JavaScript padrão. Os métodos escolhidos foram `map`, `filter`, `find` e `reduce`. 

Cada teste é feito em um script separado para poder capturar as informações de memória utilizadas. Para capturar a memória é utilizado o `process.memoryUsage()` do Node.js e o pacote [performance-now](https://www.npmjs.com/package/performance-now) é utilizado para obter os tempos de execução.
Também foi usado a biblioteca [Chart.js](https://www.npmjs.com/package/chartjs) para criação dos gráficos e o [budo](https://www.npmjs.com/package/budo) para servir a página.

## Passos para executar o projeto
1. Clone o repositório
2. Execute `npm install` para adicionar as dependências
3. Execute os comandos para iniciar os testes. Existe um para cada teste no `package.json` mas pode executar `npm run test` para fazer todos os testes de uma só vez
4. Por fim, execute `npm run show-results` e abra o navegador no endereço que aparece no console para ver os resultados de forma gráfica
