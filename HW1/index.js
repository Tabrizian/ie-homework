const chalk = require('chalk')
const http = require('http')
const readline = require('readline')
const cookie = require('cookie')
const prettyjson = require('prettyjson')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question(chalk.blue.bgRed.bold('Enter the url to analyze:'), (url) => {
  rl.question(chalk.blue.bgRed.bold('Persistent? (true|false)'), (persistent) => {
    const agent = new http.Agent({ keepAlive: persistent === 'true' ? true : false});
    let parts = url.split('/')
    let hostname = parts[0]
    parts.splice(0, 1)
    let path = '/' + parts.join('/')
    let req = http.request({
      method: 'OPTIONS',
      hostname: hostname,
      port: 80,
      path: path,
      agent: agent
    }, (res) => {
      console.log(chalk.blue('Allowed Methods: ') + chalk.green.bold(res.headers.allow))
    }).on('error', (e) => {
      console.error(`Got error: ${e.message}`)
    })
    req.end()

    req = http.request({
      method: 'GET',
      hostname: hostname,
      port: 80,
      path: path,
      agent: agent
    }, (res) => {
      let cookies = []
      console.log(chalk.blue('Cookies'))
      for (let cookieItem of res.headers['set-cookie']) {
        let parsed = cookie.parse(cookieItem)
        cookies.push(parsed)
      }
      console.log(prettyjson.render(cookies))
      console.log(chalk.blue('Authentication: ') + chalk.green.bold(res.headers['www-authenticate'] || 'No authentication'))
      console.log(chalk.blue('Server: ') + chalk.green.bold(res.headers['server']))
      console.log(chalk.blue('Status: ') + chalk.green.bold(res.statusCode + ' ' + res.statusMessage))
    }).on('error', (e) => {
      console.error(`Got error: ${e.message}`)
    })
    req.end()
  })

})

