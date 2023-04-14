import axios from 'axios';

// base url to make requests to the movie database
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
})


// What is does here if we send a get request like
//     instance.get('/action'); then the url we actually sending is look like this
//     https://api.themoviedb.org/3/action
//    So, basically it takes the /action and append into the baseUrl


export default instance;