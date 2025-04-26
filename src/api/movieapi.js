import axios from "axios";
import { tmdbbaseUrl, accessToken, nowPlaying, trandingMovies , movieDetails,  movieVideoDetails, movieRecomentadionDetails, movieSearch} from "./apiurls";


const instance = axios.create({
    baseURL: tmdbbaseUrl,
    headers: { 'Authorization': `Bearer ${accessToken}` }
});

export const getMoviesData = () => {
    return instance.get(nowPlaying)
}

export const trandingMoviesData = () => {
    return instance.get(trandingMovies)
}

export const getmovieDetailsData=(id)=>{
    return instance.get(movieDetails(id))
}

export const getmovievideoDetailsData=(id)=>{
    return instance.get(movieVideoDetails(id))
}

export const getmovievieRecomendationData=(id)=>{
    return instance.get(movieRecomentadionDetails(id))
}

export const getSearchResulsts=(sname)=>{
    return instance.get(movieSearch(sname))
}