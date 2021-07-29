import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import requests from './requests';
import ScrollContainer from 'react-indiana-drag-scroll';


const base_url = 'https://image.tmdb.org/t/p/original';
const MovieSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        className: "slides"
      };
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            console.log("movieSlider useeffect call.....");
            const data = await fetch(requests.fecthMarvelMovies);
            const response = await data.json();
            console.log(response)
            console.log("marvel Movies...")

            console.log(response.results);
            setMovies(response.results);

        }

        fetchData();

    }, [])



    return (
        <>

            <Slider {...settings} >


                {movies.map((item, index) => {
                    return (
                        <div className="banner" key={index}>
                        <div>
                            <img src={base_url+item.backdrop_path} alt=""/>
                        </div>
                        {/* <img src={base_url+item.backdrop_path} /> */}
                            {/* <div className="banner__contents">
                                <h1 className="banner__title">{item.title ? item.title : item.original_title}</h1>
                                <p className="banner__description">
                                    {item.overview}
                                </p>
                            </div> */}
                            <div className="banner__fadeBottom" />
                        </div>

                    );
                })}


                {/* 5 */}
                {/* <div className="banner" style={bannerStyle}>
                    <div className="banner__contents">
                        <h1 className="banner__title">Ragnork</h1>
                        <p className="banner__description">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam numquam sint quos, rerum, laudantium nostrum a necessitatibus reiciendis in eos nisi quae fugit cum reprehenderit accusamus fugiat eveniet iusto ratione.
                        </p>
                    </div>
                    <div className="banner__fadeBottom" />
                </div> */}


            </Slider>
            <ScrollContainer className="movies movies_bottom">
                {
                    movies.map((item,index) => {
                        return(
                        <div className="movie_card" key={index}>
                            <div className="">
                                <img src={base_url + item.poster_path} alt="" className="img-fluid" />

                            </div>
                        </div>
                        );
                    })
                }

            </ScrollContainer>
        </>
    )
}

export default MovieSlider;
