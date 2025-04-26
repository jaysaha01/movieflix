import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Computer from './svgfolder/Computer';
import Download from './svgfolder/Download';
import Durbin from './svgfolder/Durbin';
import Smiles from './svgfolder/Smiles';
import Grid from '@mui/material/Grid2';


const Reason = () => {
    return (
        <Box component="section" className='rasonbox'>
            <Container>
                <Typography variant="h4" gutterBottom sx={{ color: "white", paddingY: "10px" }}>
                    More reasons to join
                </Typography>
                <Box sx={{ flexGrow: 1 }}>

                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 3 }}>
                            <div className="mycardres">
                                <div className="first">
                                <Typography variant="h5" gutterBottom sx={{ color: "white", paddingY: "10px" }}>
                                Enjoy on your TV
                                </Typography>
                                <Typography variant="subtitle1" gutterBottom sx={{ color:"#bdbaba", lineHeight:"1.5" }}>
                                Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.
                                </Typography>
                                </div>
                                <Box className="iconspance">
                                    <Computer/>
                                </Box>
                            </div>
                        </Grid>


                        <Grid size={{ xs: 12, md: 3 }}>
                            <div className="mycardres">
                                <div className="first">
                                <Typography variant="h5" gutterBottom sx={{ color: "white", paddingY: "10px" }}>
                                Download your shows to watch offline
                                </Typography>
                                <Typography variant="subtitle1" gutterBottom sx={{ color:"#bdbaba", lineHeight:"1.5" }}>
                                Save your favourites easily and always have something to watch.
                                </Typography>
                                </div>
                                <Box className="iconspance">
                                    <Download/>
                                </Box>
                            </div>
                        </Grid>

                        <Grid size={{ xs: 12, md: 3 }}>
                            <div className="mycardres">
                                <div className="first">

                                <Typography variant="h5" gutterBottom sx={{ color: "white", paddingY: "10px" }}>
                                Watch everywhere
                                </Typography>

                                <Typography variant="subtitle1" gutterBottom sx={{ color:"#bdbaba", lineHeight:"1.5" }}>
                                Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.
                                </Typography>
                                </div>
                                <Box className="iconspance">
                                    <Durbin/>
                                </Box>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, md: 3 }}>
                            <div className="mycardres">
                                <div className="first">
                                <Typography variant="h5" gutterBottom sx={{ color: "white", paddingY: "10px" }}>
                                Create profiles for kids
                                </Typography>
                                <Typography variant="subtitle1" gutterBottom sx={{ color:"#bdbaba", lineHeight:"1.5" }}>
                                Send kids on adventures with their favourite characters in a space made just for them — free with your membership.
                                </Typography>
                                </div>
                                <Box className="iconspance">
                                    <Smiles/>
                                </Box>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default Reason
