import React, { useEffect, useState } from 'react'
import { getMoviesData, trandingMoviesData, getmovievieRecomendationData } from '../api/movieapi'
import Header from './Header'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Moviecard from './Moviecard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getmovieDetailsData } from '../api/movieapi';
import { getmovievideoDetailsData } from '../api/movieapi';
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

const Fullview = () => {

    let { resId } = useParams();

    let [moviedtls, setmoviedtls] = useState({});
    let [ivideos, setivideodtls] = useState([]);
    let [recomended, setRecomended] = useState([]);

    
    const fetchingMovies = async () => {
        let getmoviedetailsdata = await getmovieDetailsData(resId);
        let getmoveVdieodetils = await getmovievideoDetailsData(resId)
        let getmoverecomdetils = await getmovievieRecomendationData(resId)
        setmoviedtls(getmoviedetailsdata?.data)
        setivideodtls(getmoveVdieodetils?.data?.results)
        setRecomended(getmoverecomdetils?.data?.results)
    }

    useEffect(() => {
        fetchingMovies()
    }, [resId])


    let ytDetails = ivideos[0]

    let targetVideo = ytDetails?.key;

    console.log(recomended)

    return (
        <div className='fullviewcover'>
            <Header />
            <Container>
                <div className="tvbx">
                    <iframe src={`https://www.youtube.com/embed/${targetVideo}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>

                <div className="details">
                    <h1>{moviedtls?.original_title}</h1>
                    <p>
                        {moviedtls?.overview}
                    </p>

                    <div className="tablecover">

                        <div className="showdetailbx">
                            <div className="tablerow">Release Data :</div>
                            <div className="tablerow">{moviedtls?.release_date}</div>
                        </div>
                        <div className="showdetailbx">
                            <div className="tablerow">Tagline :</div>
                            <div className="tablerow">{moviedtls?.tagline}</div>
                        </div>
                        <div className="showdetailbx">
                            <div className="tablerow">Language :</div>
                            <div className="tablerow">{moviedtls?.original_language}</div>
                        </div>
                    </div>
                </div>

                {
                    recomended.length == 0 ? null :

                        <>
                            <Box sx={{ borderBottom: "1px solid #e1dbdb7a", marginBottom: "30px", marginTop: "5rem" }}>
                                <Typography variant="h4" gutterBottom sx={{ color: "white", fontWeight: "800", }}>
                                    More Like This
                                </Typography>
                            </Box>

                            <Swiper
                                slidesPerView={4.5}
                                spaceBetween={15}
                                loop={false}
                                breakpoints={{
                                    100: {
                                        slidesPerView: 1,
                                        spaceBetween: 20,
                                    },

                                    412: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    640: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 4.5,
                                        spaceBetween: 40,
                                    },
                                }}

                                navigation={true}
                                modules={[Navigation]}
                                className="mySwiper"
                            >
                                { recomended.length ?
                                    recomended.map((elms) => {
                                        return (
                                            <SwiperSlide className='moviecard'>
                                                <Moviecard mydata={elms} />
                                            </SwiperSlide>
                                        )
                                    }) :<Shimmer/>
                                } 
                            </Swiper>
                        </>
                }
            </Container>
        </div>
    )
}

export default Fullview
