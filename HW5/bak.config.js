require('mongoose-fill')

module.exports = {
  prefix: '/api',
  routes: [
    './controllers/public/movies'
  ],
  registrations: [
    '@bakjs/mongo',
    '@bakjs/audit'
  ]
}
