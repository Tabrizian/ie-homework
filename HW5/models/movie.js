const {Model, Schema} = require('@bakjs/mongo')

class Movie extends Model {
  static get $schema () {
    return {
      title: {type: String, required: true},
      original_title: {type: String, required: true},
      rate: {type: Number},
      year: {type: Number},
      length: {type: String},
      language: {type: String},
      country: {type: String},
      description: {type: String},
      director: {type: String}
    }
  }
}

module.exports = Movie.$model
