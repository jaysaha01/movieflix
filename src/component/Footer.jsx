import React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';

const Footer = () => {
  return (
    <div className='footerwrapper'>
      <Container>
        <Grid container spacing={2} >
          <Grid size={{ xs: 12, md: 3 }} >
            <div className="foochild">
              <p>FAQ</p>
              <p>Investor Relations</p>
              <p>Privacy</p>
              <p>Speed Test</p>
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }} >
            <div className="foochild">
              <p>
              Help Centre</p>
              <p>
              Jobs</p>
              <p>Cookie Preferences</p>
              <p>
              Legal Notices</p>
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }} >
            <div className="foochild">
              <p>
              Account</p>
              <p>
              Ways to Watch</p>
              <p>
              Corporate Information</p>
              <p>
              Only on Netflix</p>
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }} >
            <div className="foochild">
              <p>
              Media Centre</p>
              <p>
              Terms of Use</p>
              <p>Privacy</p>
              <p>Contact Us</p>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Footer
