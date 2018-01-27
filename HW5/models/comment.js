const {Model, Schema} = require('@bakjs/mongo')

class Comment extends Model {
  static get $schema () {
    return {
      rate: [{type: Number}],
      comment: {type: String},
      author: {type: String},
      movie: {type: Schema.Types.ObjectId, ref: 'Movie', required: true}
    }
  }
}

module.exports = Comment.$model
