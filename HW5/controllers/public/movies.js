const {Controller} = require('bak')
const {Movie, Comment} = require('../../models')
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

  async getRecentMovie (request, h) {
  }

  async getMovieDetail (request, h) {
    let movie = request.params.movie
    try {
      movie = await Movie.findById(movie)
      return {movie}
    } catch (e) {
      console.log(e)
      throw Boom.badRequest()
    }

  }

  async getMovieComments (request, h) {
    let movie = request.params.movie
    try {
      comments = await Comment.find({movie})
      return {comments}
    } catch (e) {
      console.log(e)
      throw Boom.badRequest()
    }
  }

  async createMovieComment (request, h) {
    let comment = new Comment
    comment.movie = request.params.comment
    comment.comment = request.payload.comment

    try {
      await comment.save()
    } catch (e) {
      console.log(e)
      throw Boom.badRequest()
    }
  }
}

module.exports = MoviesController
