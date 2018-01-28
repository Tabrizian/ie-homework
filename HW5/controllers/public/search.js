const {Controller} = require('bak')
const {Movie} = require('../../models')
const Boom = require('boom')

class SearchController extends Controller {
  init () {
    this.get('/search', this.search)
  }

  async search (request, h) {
    let query = request.query.q
    try {
      let movies = await Movie.find({title: query})
      return movies
    } catch (e) {
      console.log(e)
      throw Boom.badRequest()
    }



  }
}


module.exports = SearchController
