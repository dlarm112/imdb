import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default function Banner(props) {

return (

<div>
   
    <Carousel>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${props.movieList[0].backdrop_path}`}
        alt="First slide"
        />
    <Carousel.Caption>
        <h3>{props.movieList[0].original_title}</h3>

    </Carousel.Caption>
    </Carousel.Item>


    <Carousel.Item>
        <img
        className="d-block w-100"
        src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${props.movieList[1].backdrop_path}`}
        alt="Third slide"
        />
    <Carousel.Caption>
        <h3>{props.movieList[1].original_title}</h3>

    </Carousel.Caption>
    </Carousel.Item>


    <Carousel.Item>
        <img
        className="d-block w-100"
        src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${props.movieList[2].backdrop_path}`}
        alt="Third slide"
        />
    <Carousel.Caption>
    <h3>{props.movieList[2].original_title}</h3>

    </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
</div>
    )
}
