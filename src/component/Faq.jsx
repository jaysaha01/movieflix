import React from 'react'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';


import CustomizedAccordions from './CustomizedAccordions';


const Faq = () => {
    return (
        <Box component="section" className='faqsection'>
            <Container>
                <Typography variant="h4" gutterBottom sx={{ color: "white", paddingBottom:"20px" }}>
                Frequently Asked Questions
                </Typography>
                <CustomizedAccordions/>
            </Container>
        </Box>
    )
}

export default Faq
