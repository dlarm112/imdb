import React from 'react'
// import {Card, ListGroupItem,ListGroup} from 'react-bootstrap'
import MovieCard from './MovieCard'

export default function MovieList(props) {

    return (
        <div className="row justify-content-center">
          {props.movieList.map((item) => {
          return<MovieCard genreMovieList={props.genresFromApp} movie={item} />;
          })}
        </div>
    )
}