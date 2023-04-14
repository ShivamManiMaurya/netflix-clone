import React, { useEffect, useState } from "react";
import axiosInstance from "../axios";
import request from "../requests";
import requests from "../requests";

function Banner() {
    const [movie, setMovie] = useState([]);

    // it will runs once coz [], when the banner component loads
    useEffect(() => {
        async function fetchData() {
            try {
                const request = await axiosInstance.get(requests[0].fetch);
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

    console.log(movie);

    return (
        <header>
            {/* ---- Background Image ------ */}
            {/* title  */}
            {/* div > 2 button - play and myList */}
            {/* discription */}
        </header>
    );
}

export default Banner;
