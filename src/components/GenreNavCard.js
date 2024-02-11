import React from 'react';
import { Link } from 'react-router-dom';

const GenreNavCard = ({movie,isTvGenre}) => {
    
  return (
    <div>
        <div className='h-[250px]'>
        <Link to="/genre" state={{genre:movie,isTvGenre:isTvGenre}}>
            <div className='p-4 group'>
                <img src={movie.image} className='max-h-[300px] max-w-[300px] opacity-40 transform border-transparent group-hover:scale-110 group-hover:border-b-red-600
                transition-all duration-300 border-b-2 group max-[768px]:min-h-[200px] '/>
                <p className='text-white z-10 mt-[-100px] text-center font-bold group-hover:scale-110 transform ml-[-20px]'>{movie.name}</p>
            </div>
        </Link>
        </div>
    </div>
  )
}

export default GenreNavCard