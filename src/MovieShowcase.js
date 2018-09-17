import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => (
    // map over your movieData array and return the correct
    movieData.map((movie) => (
            <MovieCard
                  key={movie.title}
                  title={movie.title}
                  IMDBRating={movie.IMDBRating}
                  genres={movie.genres}
                  poster={movie.poster}/>
    )
  )
)

  render() {
    console.log(this.generateMovieCards())
    return (
      <div id="movie-showcase">
        <ul>
          {this.generateMovieCards()}
        </ul>
      </div>
    )
  }
}
