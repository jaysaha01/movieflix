export const tmdbbaseUrl="https://api.themoviedb.org/3";
export const nowPlaying ="/movie/now_playing?language=en-US&page=1";
export const accessToken= process.env.REACT_APP_SUPABASE_TOKEN_KEY;
export const trandingMovies ="/trending/movie/day?language=en-US&page=3";
export const movieDetails =(mid)=>{
    return `/movie/${mid}?language=en-US`
}
export const movieVideoDetails =(mid)=>{
    return `/movie/${mid}/videos`
}
export const movieRecomentadionDetails =(mid)=>{
    return `/movie/${mid}/recommendations?language=en-US&page=1`
}

export const movieSearch=(mname)=>{
    return `/search/movie?query=${mname}`
}