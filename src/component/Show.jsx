import React, { useEffect, useState } from 'react'
import { getMoviesData, trandingMoviesData } from '../api/movieapi'
import { imageImdbsrc } from '../utils/constances'
import Header from './Header'
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Moviecard from './Moviecard';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';
import Bannershimmer from './Bannershimmer';
import { useNavigate } from "react-router-dom";


const Show = () => {

    let [moviedata, setMoviedata] = useState([]);
    let [tandingMovie, setTandingMovie] = useState([]);
    let [banner, setBannerdetails] = useState({});
    let navgiation= useNavigate();
   

    const fetchingMovies = async () => {
        let data = await getMoviesData();
        let data1 = await trandingMoviesData();
        setMoviedata(data?.data?.results)
        setTandingMovie(data1?.data?.results)
    }

    const randombanner = () => {
        let myrandomnum = Math.floor(Math.random() * moviedata.length);
        setBannerdetails(moviedata[myrandomnum])
    }

    
    useEffect(() => {
        fetchingMovies()
    }, [])

    useEffect(() => {
        randombanner()
    }, banner)

    
    return (
        <div className='showrapper'>
            
            <div className="bannerbx">
                <Header />
                <div className='videobx' style={{ backgroundImage: `linear-gradient(8deg, rgb(0 0 0) 22%, rgba(255, 255, 255, 0.52) 85%), url(${imageImdbsrc(banner?.backdrop_path)} )` }}></div>
                <div className="textrapper">
                    {
                        moviedata.length ?    <Container>
                        <Grid container spacing={2} >
                            <Grid size={{ xs: 12, md: 7 }} >
                                <div className="textrapper">
                                    <h1>{banner?.title?.slice(0, 15)}<span>{banner?.title?.length >= 11 ? "..." : null}</span></h1>
                                    <p>{banner?.overview?.slice(0, 200) + "..."}</p>
                                    <Button variant="outlined" startIcon={<PlayArrowIcon />}>
                                        <Link to={`/browse/fullview/${banner?.id}`}>Play Now</Link>
                                    </Button>
                                </div>
                            </Grid>
                        </Grid>
                    </Container> : <Bannershimmer/>
                    }
                  
                </div>
            </div>

        
            <Container >
                <Box sx={{ borderBottom: "1px solid #e1dbdb7a", marginBottom: "30px" }}>
                    <Typography variant="h4" gutterBottom sx={{ color: "white", fontWeight: "800", }}>
                        Now Playing
                    </Typography>
                </Box>
                <Grid container spacing={2} >
                    { moviedata.length ? 
                        moviedata.map((elms) => {
                            return (
                                <Grid size={{ xs: 6, md: 2 }} >
                                    <Moviecard mydata={elms} />
                                </Grid>
                            )
                        }) : <Shimmer/>
                    }
                </Grid>
            </Container>

            <Container style={{ paddingTop: "8rem" }}>
                <Box sx={{ borderBottom: "1px solid #e1dbdb7a", marginBottom: "30px" }}>
                    <Typography variant="h4" gutterBottom sx={{ color: "white", fontWeight: "800", }}>
                        Trending Movies
                    </Typography>
                </Box>
                <Grid container spacing={2} >
                    { tandingMovie.length ?
                        tandingMovie.map((elms) => {
                            return (
                                <Grid size={{ xs: 6, md: 2 }} >
                                    <Moviecard mydata={elms} />
                                </Grid>
                            )
                        }) :<Shimmer/>
                    }
                </Grid>
            </Container>
        </div>
    )
}

export default Show
