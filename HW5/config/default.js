/**
 * Created by iman on 5/28/2017.
 */
module.exports = {

  /**
   * Configure mongodb
   */
  mongo: {
    connections: {
      default: {uri: 'mongodb://localhost:27017/iranfilm'}
    }
  },
  auth: {
    secret: 'default'
  },

  minio: {
    endPoint: '',
    port: '',
    accessKey: '',
    secretKey: '',
    public_url: ''
  },

  log: {
    sentry: {
      dsn: null
    },
    audit: {}
  }
}
