require('mongoose-fill')

module.exports = {
  prefix: '/api',
  routes: [
    './controllers/public/movies',
    './controllers/public/search'
  ],
  registrations: [
    '@bakjs/mongo',
    '@bakjs/audit',
    'inert'
  ]
}
