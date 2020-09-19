import React, { useState, useEffect } from 'react';
import axios from './axios';
import requests from './requests'
import bclass from './Banner.module.css'
const base_Url = "https://image.tmdb.org/t/p/original/";

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);

            return request;
        }
        fetchData();
    }, []);

    //  function overview() {
    //      var string =
    //      var dots = "...";
    //      if (string.length > 50) {
    //          // you can also use substr instead of substring
    //          string = string.substring(0, 50) + dots;
    //      }
    //      return string
    //  }

    function dots(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <header className={bclass.banner}
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("${base_Url}${movie?.backdrop_path}")`,
                backgroundPosition: "center center",

            }}>
            <div className={bclass.bannercontents}>
                <h1 className={bclass.naam} >
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className={bclass.buttons}>
                    <button className={bclass.button}>Play</button>
                    <button className={bclass.button}>My List</button>
                </div>

                <div className={bclass.description}>

                    {dots(movie?.overview, 150)}



                </div>

            </div>

            <div className={bclass.fadein} />
        </header>

    )
}

export default Banner
