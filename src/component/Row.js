import React, { useEffect, useState } from "react";
import axiosInstance from "../axios";

// styles
import "./styles/RowStyles.css";

function Row({ fetchUrl, title, isLargeRow }) {
    const [movies, setMovies] = useState([]);

    const imageBaseUrl = "https://image.tmdb.org/t/p/w500";
    // I got baseUrl from https://developers.themoviedb.org/3/getting-started/images

    // A snippet of code that runs on a specific condition/variable
    useEffect(() => {
        // useEffect with [] renders the page only once

        async function fetchData() {
            try {
                const request = await axiosInstance.get(fetchUrl);
                // here it take the fetchUrl and append it with the axios i.e. instance that we have declared in the
                // axios.js file and it looks like https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213
                // but here it will replace the api key with our api key
                setMovies(request.data.results); // it has bunch of movies in array like [{..}, {..}, {..}...]
                return request;
            } catch (error) {
                // console.log("it runs");
                console.log(error.response.data);
            } // I used try-catch block bcoz I need to get rid of "(In Promise) Uncaught" error
        }
        fetchData();

        // here we are calling the fetchData() function so how we do the async inside useEffect
    }, [fetchUrl]);

    // console.log(movies);

    return (
        <div className="row">
            <h2 className="row__title">{title}</h2>
            <div className="row__posters">
                {/* movies posters on the screen in the form of row */}
                {movies.map((movie) => {
                    return (
                        <img
                            key={movie?.id} //for removing the error and also for optimising the page
                            className={`${
                                isLargeRow
                                    ? "row__posterImage"
                                    : "row__posterImageLarge"
                            }`}
                            src={`${imageBaseUrl}${
                                isLargeRow
                                    ? movie?.poster_path
                                    : movie?.backdrop_path
                            }`}
                            alt={movie?.name}
                        />
                    );
                    // here movies? is used for checking null or undefined value, and we call this optional chaining
                    // here we are getting poster_path as /6jOpyXVzQyYL4QB12VRpHUxdwg1.jpg which is not the full path
                    // so for that we need to add the baseUrl so it looks like https://image.tmdb.org/t/p/w500/6jOpyXVzQyYL4QB12VRpHUxdwg1.jpg
                })}
            </div>
        </div>
    );
}

export default Row;
