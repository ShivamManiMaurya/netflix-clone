import React, {useEffect, useState} from 'react'
import axiosInstance from '../axios';

function Row({fetchUrl}) {

    const [movies, setMovies] = useState([]);

    // A snippet of code that runs on a specific condition/variable
    useEffect(() => {

        // useEffect with [] renders the page only once

        async function fetchData() {
            try {
                const request = await axiosInstance.get(fetchUrl);
                // here it take the fetchUrl and append it with the axios i.e. instance that we have declared in the
                // axios.js file and it looks like https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213
                // but here it will replace the api key with our api key 
                setMovies(request.data.results);
                return request;
            } catch (error) {
                // console.log("it runs");
                console.log(error.response.data);
            }   // I used try-catch block bcoz I need to get rid of "(In Promise) Uncaught" error
        };
        fetchData();
        
        // here we are calling the fetchData() function so how we do the async inside useEffect
    }, [fetchUrl])

    // console.log(movies);

    return (
        <div className='row'>
            <h2>Titles</h2>
            <div className="row__posters">
                {/* movies posters on the screen in the form of row */}
                {movies.map((movie) => {
                    console.log(movie);
                    return <img src={movie?.poster_path} alt={movie?.name} />

                })}
            </div>
        </div>
    )
}

export default Row