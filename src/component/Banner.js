import React, { useEffect, useState } from "react";
import axiosInstance from "../axios";
import requests from "../requests";
import "./styles/BannerStyles.css";

function Banner() {
    const [movie, setMovie] = useState([]);

    // it will runs once coz [], when the banner component loads
    useEffect(() => {
        async function fetchData() {
            try {
                const request = await axiosInstance.get(requests[1].fetch);
                setMovie(
                    request.data.results[
                        Math.floor(
                            Math.random() * request.data.results.length - 1
                        )
                    ]
                );
            } catch (error) {
                console.log("ye chala");
                console.log(error.response.data);
            }
        }
        fetchData();
    }, []);

    // console.log(movie);

    function truncateOverviewString(overviewString, truncateLength) {
        if (overviewString?.length > truncateLength) {
            return overviewString.slice(0, truncateLength) + "...";
        } else {
            return overviewString;
        }
    }

    return (
        <header
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
                backgroundPosition: "center center",
            }}
        >
            <div className="banner__content">
                {/* title  */}
                <h1 className="banner__heading">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                {/* div > 2 button - play and myList */}
                <div className="banner__buttons">
                    <button className="banner__btn banner__playBtn">
                        Play
                    </button>
                    <button className="banner__btn banner__myListBtn">
                        My List
                    </button>
                </div>
                {/* discription */}
                <p className="banner__discription">
                    {truncateOverviewString(movie?.overview, 220)}
                </p>
            </div>

            <div className="banner--fadeBottom"></div>
        </header>
    );
}

export default Banner;
