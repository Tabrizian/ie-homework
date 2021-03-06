const {Controller} = require('bak')
const {Movie, Comment} = require('../../models')
const Boom = require('boom')
const fs = require('fs')

class MoviesController extends Controller {
  init () {
    this.get('/posters/{poster}', this.getMoviePoster)
    this.get('/movies/recent/{number?}', this.getRecentMovie)
    this.get('/movies/{movie}/detail', this.getMovieDetail)
    this.get('/movies/{movie}/comments', this.getMovieComments)
    this.post('/movies/{movie}/comments', this.createMovieComment)
    this.post('/movies/submit', this.submitNewMovie)
  }

  async getMoviePoster (request, h) {
    let path = `${__dirname}/../../public/images/${request.params.poster}.jpg`;
    return h.file(path);
  }

  async getRecentMovie (request, h) {
    let number = request.query.number || request.params.number || null
    try {
      let recentMovies = await Movie.find().sort({created_at: -1})
      if (number) {
        let movie = recentMovies[number]
        return movie
      } else {
        return recentMovies
      }
    } catch (e) {
      console.log(e)
      throw Boom.badRequest()
    }
  }

  async getMovieDetail (request, h) {
    let movie = request.params.movie
    try {
      movie = await Movie.findById(movie)
      let comments = await Comment.find({movie})

      let score = 0
      let number = 0
      for (let comment of comments) {
        if (comment.rate) {
          console.log(comment.rate)
          score += comment.rate
          number++
        }
      }

      movie = JSON.stringify(movie)
      movie = JSON.parse(movie)
      if (number > 10)
        movie.score = score / number
      return {movie}
    } catch (e) {
      console.log(e)
      throw Boom.badRequest()
    }

  }

  async getMovieComments (request, h) {
    let movie = request.params.movie
    try {
      let comments = await Comment.find({movie})
      return {comments}
    } catch (e) {
      console.log(e)
      throw Boom.badRequest()
    }
  }

  async createMovieComment (request, h) {
    let comment = new Comment
    comment.movie = request.params.movie
    comment.comment = request.payload.comment
    comment.rate = request.payload.rate || null

    try {
      await comment.save()
      return {comment}
    } catch (e) {
      console.log(e)
      throw Boom.badRequest()
    }
  }

  async submitNewMovie (request, h) {
    let movie = new Movie
    let {title, original_title, rate, year, length,
      language, country, description, director, poster} = request.payload

    movie.title = title
    movie.original_title = original_title
    movie.rate = rate
    movie.year = year
    movie.length = length
    movie.language = language
    movie.country = country
    movie.description = description
    movie.director = director


    try {
      movie = await movie.save()
      if (request.payload.poster) {
        if (request.payload.poster instanceof Buffer) {
          fs.writeFile(`${__dirname}/../../public/images/${movie._id}.jpg`, request.payload.poster, function(err) {
            if(err) {
              console.log(err)
            }
          })
        }
      }
    } catch (e) {
      console.log(e)
      throw Boom.badRequest()
    }

    return movie
  }
}

module.exports = MoviesController
