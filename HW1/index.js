const axios = require('axios')
const chalk = require('chalk')
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log(chalk.blue.bgRed.bold('Enter the url to analyze:'));

rl.on('line', async (url) => {
  let response = await axios.options(url)
  console.log(response.cookies)
  console.log('Allowed Methods: ' + chalk.green.bold(response.headers.allow))
  rl.close()
})

