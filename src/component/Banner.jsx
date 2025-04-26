import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';



const Banner = () => {
    return (
        <div className='banner'>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container >
                    <Grid size={12}  >
                        <div className="child">
                            <h1>Unlimited movies, TV<br />  shows and more</h1>
                            <p>Starts at ₹149. Cancel at any time.</p>
                            <p>Ready to watch? Enter your email to create or restart your membership.</p>
                            <Box component="section" className='inputrapper'>
                                <TextField id="filled-basic" label="Email address" className="inputbx" variant="filled" sx={{color:"white"}} />
                                <Button variant="contained" className='btnsend'>Get Started <KeyboardArrowRightIcon/></Button>
                            </Box>
                        </div>
                    </Grid>

                </Grid>
            </Box>
        </div>
    )
}

export default Banner
