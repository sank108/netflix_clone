import React from 'react'
import { Link } from 'react-router-dom'

const GenreCard = ({genre}) => {
  return (
    <div className='h-[250px]'>
        <Link to="/genre" state={{genre:genre}}>
            <div className='p-4 group'>
                <img src={genre.image} className='max-h-[300px] max-w-[250px] opacity-40 transform border-transparent group-hover:scale-110 group-hover:border-b-red-600
                transition-all duration-300 border-b-2 group'/>
                <p className='text-white z-10 mt-[-80px] text-center font-bold group-hover:scale-110 transform'>{genre.name}</p>
            </div>
        </Link>
    </div>
  )
}

export default GenreCard