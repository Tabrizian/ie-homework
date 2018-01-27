const {Controller} = require('bak')
const {Device} = require('../../models')
const Boom = require('boom')

class MoviesController extends Controller {
  init () {
    this.get('/posters/{poster}', this.getMoviePoster)
    this.get('/movies/recent/{number}', this.getRecentMovie)
    this.get('/movies/{movie}/detail', this.getMovieDetail)
    this.get('/movies/{movie}/comments', this.getMovieComments)
    this.post('/movies/{movie}/comments', this.createMovieComment)
  }

  async getMoviePoster (request, h) {
  }

  async getMoviePoster (request, h) {
  }
}
