import React, { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import Typography from '@mui/material/Typography';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';


const Tranding = () => {

    return (
        <div>
            <Box className="trandingBox">
                <Container >

                    <Typography variant="h4" gutterBottom sx={{ color: "white", paddingY: "10px" }}>
                        Trending Now
                    </Typography>
                    <Box sx={{}} >
                        <>
                            <Swiper
                                slidesPerView={4.5}
                                spaceBetween={40}
                                loop={false}
                                breakpoints={{
                                    100: {
                                        slidesPerView: 1,
                                        spaceBetween: 20,
                                    },

                                    500: {
                                        slidesPerView: 1,
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
                                <SwiperSlide className='moviecard'>
                                    <div className="cardm">
                                        <img src="https://occ-0-4995-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABcBQAzZgCcAJyLKGf0x3EjJHKr1h1oCRUQDfVspaHXampP-RjiOkIRlWBz7ViFOvUI1EdPSRcxoOPmB7paPLi52W4OmQZJ4NDMQ.webp?r=a92&quot;" alt="" />
                                        <div className='numbering'>1</div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='moviecard'>
                                    <div className="cardm">
                                        <img src="https://occ-0-4995-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABTsIHqmKvuiJaunFg-3M7eRlEBPik8Un-eqTK-od9x48LzeGITagPm82bIopTRvyhIEMehQNdXN2qfj0AVpDTMhftqYStaCieJdbO-jfhSkFUVGBs9eYkpkjdzOj_UCKZi53.webp?r=06c;" alt="" />
                                        <div className='numbering'>2</div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className='moviecard'>
                                    <div className="cardm">
                                        <img src="https://occ-0-4995-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABRB3rewJT09RhxS4rHE_KfiiI3yrHEI3H2KcP4K5AxMBqUOZVM4QeaV9NjNs8CJ4AEjhH_BXKGaSWdOqQgWLNpHFKadmEfFjdf4.webp?r=de2" alt="" />
                                        <div className='numbering'>3</div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className='moviecard'>
                                    <div className="cardm">
                                        <img src="https://occ-0-4995-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABZnjM_Ljo0Ugt0oFeUE_Nn6aPb-LFvb3uH_GhNmL50iO6RZ8wngRwrKbr40LK-Dp9Hzxy_JWQKjpfXwOXC7SScR0i_3B9yM2kQU.webp?r=d74" alt="" />
                                        <div className='numbering'>4</div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className='moviecard'>
                                    <div className="cardm">
                                        <img src="https://occ-0-4995-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABUqjrcXYtYAmujd_lvpjlzbmqGGyd618yPvHYpwuD83eQOe9Wr1s4C0JuHM407cuFVn7xHWrOzONf0DCmmKCeo07toszDjkzoZiwgFkAG-m_J32iNcD1RnwALqaCqWGGaLgv.webp?r=3e8" alt="" />
                                        <div className='numbering'>5</div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className='moviecard'>
                                    <div className="cardm">
                                        <img src="https://occ-0-4995-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABZJH5UgOhy6NyDoAfEigLLNPRc_cw2W7Gz87mbTfvRDHbr1fLHhrPpcKQdXnREMcUcZbnX8_ZK8mYS1CgW8B4NXHcTA-grl4BSpgtPn-jMwZpsh7Kk2XcJArjUbsdp0u5JLX.webp?r=e02" alt="" />
                                        <div className='numbering'>6</div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className='moviecard'>
                                    <div className="cardm">
                                        <img src="https://occ-0-4995-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABcJkAYihjBQ5SjWbwydLdZE8Dm1cJ0whRc21AEIS4V0VO8w65lEDAW5gwzTFTUuNqVTgBcgucwr6rMeRHra3xlru9n1CCtfOm1s.webp?r=e1d" alt="" />
                                        <div className='numbering'>7</div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='moviecard'>
                                    <div className="cardm">
                                        <img src="https://occ-0-4995-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABScSAnI47ovoETcYBhKCILXN91D3uCQTeh3aG24EF1iRpP7YNh86hK0eF8JkfKAzdNYZcjcvLy4UB_BpSQgg2AcvjjRMpP6A8C0.webp?r=4bd" alt="" />
                                        <div className='numbering'>8</div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </>
                    </Box>
                </Container>
            </Box>
        </div>
    )
}

export default Tranding
