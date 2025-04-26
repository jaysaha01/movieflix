import React from 'react'
import { imageImdbsrc } from '../utils/constances'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Moviecard = ({ mydata }) => {

  const { id, original_title, poster_path,backdrop_path } = mydata

  return (
    <>
      <Link to={`/browse/fullview/${id}`}>
        <div className='moviecard'>
          <img src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` || `http://image.tmdb.org/t/p/w500/${backdrop_path}` : "https://drive-in-theatre.netlify.app/movieImages/default-movie.png"} alt="" srcset="" />
          <div className="overlybx">
            <div className="header">
              <AddCircleIcon />
            </div>
            <div className="footer">
              <h6>{original_title}</h6>
              <Button variant="contained" startIcon={<PlayArrowIcon />}>
                <Link to={`/browse/fullview/${id}`}>Watch Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </Link>

    </>

  )
}

export default Moviecard
