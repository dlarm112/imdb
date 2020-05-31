import {Card, ListGroupItem, ListGroup, Badge} from 'react-bootstrap'
import React from 'react'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'



export default function MovieCard(props) {
    let movie = props.movie
    let overview = movie.overview
    let genres = props.genreMovieList
    let alertMessage = ''
    const description = () =>{
        alertMessage = JSON.stringify(overview)
        alert(JSON.stringify(overview))
    }
    return (
        <div className="flex-basis align-content-center">
    
        <Card className="card" style={{ width: '18rem', height:'44rem'}}>
        <Button className="poster" onClick={() => description()}type="image">
        <Card.Img variant="top" className="movie-poster" src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}/>
        </Button>
        <Card.Body>
        <Card.Title>{<b>{movie.original_title}</b>}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
        <ListGroupItem>{`Release Date: ${movie.release_date}`}</ListGroupItem>
        <ListGroupItem>{movie.vote_average}/10</ListGroupItem>
        </ListGroup>
        <Card.Body>
        {movie.genre_ids.map(id => {return(
        <Badge className="dark-pill" pill variant="light">{
        genres.find(genre => id === genre.id).name}
        </Badge>
        )})}
        </Card.Body>
        </Card>

        </div>
    )
}
