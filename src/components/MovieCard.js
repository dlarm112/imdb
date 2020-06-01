import {Card, ListGroupItem, ListGroup, Badge} from 'react-bootstrap'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import React, { useEffect, useState } from "react";




export default function MovieCard(props) {
    let movie = props.movie
    let genres = props.genreMovieList



    return (
        <div className="flex-basis align-content-center">
    
        <Card className="card" style={{ width: '14rem', height:'40rem'}}>
        <Button className="poster" onClick={() => props.openModalFunc(props.index)}type="image">
        <Card.Img variant="top" className="movie-poster" src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}/>
        </Button>
        <Card.Body>
        <Card.Title>{<b>{movie.original_title}</b>}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
        <ListGroupItem><b>{`Release Date: `}</b><br></br>{movie.release_date}</ListGroupItem>
        <ListGroupItem>{movie.vote_average}/10</ListGroupItem>
        </ListGroup>
        <Card.Body>
        {movie.genre_ids.map((id, i) => {
            if (i<3){
            return(
            <Badge className="dark-pill" pill variant="light">{
            genres.find(genre => id === genre.id).name}
            </Badge>)
            }
        })}
        </Card.Body>
        </Card>

        </div>
    )
}
