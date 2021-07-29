import React from 'react'
import MoviesLists from './moviesList'
import MovieSlider from './movieSlider'
import requests from './requests'

const MiniNetflixApp = () => {
   
    return (
        <div className="netflix_clone">
            <MovieSlider/>
            <MoviesLists title="Trending" fetchUrl={requests.fecthTrending} />
            <MoviesLists title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
            <MoviesLists title="Top Rated" fetchUrl={requests.fetchTopRated} />
			<MoviesLists title="Action Movies" fetchUrl={requests.fetchActionMovies} />
			<MoviesLists title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
			<MoviesLists title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
			<MoviesLists title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
			<MoviesLists title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
           
        </div>
    )
}

export default MiniNetflixApp
