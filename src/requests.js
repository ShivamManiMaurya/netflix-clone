const API_KEY = "99941102e72110f0de2169e105e87312";

const request = [
    {
        title: "NETFLIX ORIGINALS",
        fetch: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    },
    {
        title: "Trending Now",
        fetch: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    },
    {
        title: "Top Rated",
        fetch: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    },
    {
        title: "Action Movies",
        fetch: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    },
    {
        title: "Comedy Movies",
        fetch: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    },
    {
        title: "Horror Movies",
        fetch: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    },
    {
        title: "Romance Movies",
        fetch: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    },
    {
        title: "Documentaries",
        fetch: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    },
];

// here above these are key value pairs of fetchtype and its location

export default request;
