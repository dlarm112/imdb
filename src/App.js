import React, { useEffect, useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Loader from 'react-loader-spinner'
import Banner from "./components/Banner"
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'

let page = 1
let x
let y

const apiKey = process.env.REACT_APP_APIKEY;
function App() {
  let [movieList, setMovieList] = useState(null);
  let [genreList, setGenreList] = useState(null);
  console.log(page, "ggg")
  let searchContents = ''




  const getGenreList = async () =>{
    let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
    let data = await fetch(url);
    let result = await data.json();
    getNowPlayingMovie();
    setGenreList(result.genres);
    console.log("movie genres", result);
  }
  const getNowPlayingMovie = async () => {
    let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=${page}`;
    let data = await fetch(url);
    let result = await data.json();
    setMovieList(result.results);
    console.log("movies", result);
  };

  useEffect(() => {
    getGenreList();
  }, []);

  const seeMore=(i)=>{
    if (i == null){
    page++;
    }
    else{
    page = i
    }
    console.log(page, "page number")
    getGenreList();
  }

  const seeLess = ()=>{
    if (page>1){
      page--
      getGenreList();
    }
  }


  if (movieList === null || genreList === null) {
    return (<Loader
      className="loader"
      type="TailSpin" 
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000}
    />);
  
  }
  return (
    <div className="app-body">
      <div className="header">
      <div>
        <h1 className="top-text">
        <svg class="bi bi-film" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0h8v6H4V1zm8 8H4v6h8V9zM1 1h2v2H1V1zm2 3H1v2h2V4zM1 7h2v2H1V7zm2 3H1v2h2v-2zm-2 3h2v2H1v-2zM15 1h-2v2h2V1zm-2 3h2v2h-2V4zm2 3h-2v2h2V7zm-2 3h2v2h-2v-2zm2 3h-2v2h2v-2z"/>
        </svg>
          {` Movie Database`}
        </h1>
      </div>
 
      <div>
        <Form inline className="form align-self-end">
        <FormControl onChange={e => {searchContents = e.target.value;}} type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
        </Form>
      </div>
      </div>

        <Banner movieList={movieList}/>
      <div className="container">
        <MovieList movieList={movieList} genresFromApp={genreList} />
      </div>
      <div className="row justify-content-center">
      <button id="see-wide" onClick={()=>seeLess()}>Go Back</button>
      <button id="see-more" onClick={()=>seeMore(1)}>1</button>
      <button id="see-more" onClick={()=>seeMore(2)}>2</button>
      <button id="see-more" onClick={()=>seeMore(3)}>3</button>
      <button id="see-more" onClick={()=>seeMore(4)}>4</button>
      <button id="see-more" onClick={()=>seeMore(5)}>5</button>
      <button id="see-wide" onClick={()=>seeMore()}>See More</button>
      </div>

    </div>
  );
}

export default App;