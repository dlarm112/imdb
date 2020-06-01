import React from 'react'
// import {Card, ListGroupItem,ListGroup} from 'react-bootstrap'
import MovieCard from './MovieCard'

export default function MovieList(props) {

    return (
        <div className="row justify-content-center">
          {props.movieList.map((item, index) => {
          return<MovieCard index={index} genreMovieList={props.genresFromApp} movie={item} openModalFunc={props.openModalFunc} openModal={props.openModal}/>;
          })}
        </div>
    )
}