import React, { useEffect, useState } from 'react'
// import dateFormat from 'dateformat';
import ScrollContainer from 'react-indiana-drag-scroll';

const base_url = 'https://image.tmdb.org/t/p/original';
const MoviesLists = ({fetchUrl,title}) => {
  console.log(`fetchURL is`,fetchUrl);
    const[movies,setMovies]=useState([])
    useEffect(()=>{
      console.log("useEffect call......");

      async function fetchData(){
        const data=await fetch(fetchUrl);
        const response=await data.json();
        console.log(response.results);
        setMovies(response.results)
       

      }
      fetchData();
    },[]);
    // console.log(new Date("2021-06-30").toString().getMonth())
    return (
        <>
        <div className="section__header">
                {title}
        </div>
        <ScrollContainer  className="movies">
        {
          movies.map((movie,index)=>{
            return(
              <div className="movie_card mt-5" key={index}>
          <div className="wrapper">
            <img src={base_url+movie.poster_path} alt="" className="img-fluid"/>
              <div className="movie_rating">
              <i className="fas fa-star"></i> {movie.vote_average}
              </div>
          </div>  
          {/* <div className="content">
          <h2><a className="movie_title card-title">{movie.title}</a></h2>
          <div className="d-flex">

         
          <p className="movie_releasedate">{dateFormat(movie.release_date, "mmmm dS, yyyy")}</p>
    
        </div>
          </div> */}
          </div>

            );
          })
        }
       
         
        
          </ScrollContainer>
        </>
    )
}

export default MoviesLists
