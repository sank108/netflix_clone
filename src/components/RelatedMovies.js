import React from 'react'
import { Link } from 'react-router-dom'

const RelatedMovies = ({review}) => {
  console.log(review.poster_path);
  return (
    <Link to="/streamrowvideo" state={{movie:review}}>
      <div>
          <img src={`https://image.tmdb.org/t/p/original${review.poster_path}`} 
          className='h-[300px] w-[220px] max-[768px]:h-[250px] cursor-pointer transform hover:scale-110 hover:z-20 transition-transform duration-300 rounded-sm'/>
        </div>
    </Link>
  )
}

export default RelatedMovies 