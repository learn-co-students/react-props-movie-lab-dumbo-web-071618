import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

//THANKS TO BRYAN AND GABE'S CODE!!!

  generateMovieCards = () => {
    return (
    <div>
      {movieData.map ((movie) =>
        <MovieCard
          title={movie.title} IMDBRating={movie.IMDBRating} genres={movie.genres}
          poster={movie.poster}/>
      )
      }
    </div>
  )
}


        render() {
          return (
            <div id="movie-showcase">
              <ul>
                {this.generateMovieCards()}
              </ul>
            </div>
          )
        }
      }
