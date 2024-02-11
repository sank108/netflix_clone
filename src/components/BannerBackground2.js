import React from 'react'
import imdb from '../assets/imdb.jpg'
import { FaCaretRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const BannerBackGround = ({movieData}) => {

  console.log(movieData);
  return (
    <div className='bg-black'>
      <div className='mt-[-400px]'>
        <img src={`https://image.tmdb.org/t/p/original${movieData?.backdrop_path}`} alt='hi' className="opacity-0 md:opacity-100 md:min-w-[1100px]
          transition-all delay-700"/>
      </div>
      

      <div className='absolute min-[1440px]:ml-[600px] min-[1440px]:mt-[-600px] gap-7 md:mt-[-420px] md:ml-[100px]'>
        

      <div>
        <p className='text-5xl font-bold text-[#fff] mt-2 mb-2'>{movieData?.title}</p>
      </div>

      <div className='w-[600px] mb-4'>
        <p className='text-[#fff]'><span className='font-bold'>Release Date: </span>{movieData?.release_date}</p>
      </div>

      <div className='w-[600px] mb-4'>
        <p className='text-[#fff]'><span className='font-bold'>Popularity: </span>{movieData?.popularity} K's</p>
      </div>

      <div className='w-[600px] mb-4'>
        <p className='text-[#fff]'>{movieData?.overview}</p>
      </div>

      
      
      <div>
        <Link to="/streamrowvideo" state={{movie:movieData}}>
          <div className='h-12 w-[250px] rounded-md hover:bg-[#ff0000] bg-[#BF000A] cursor-pointer mt-12 flex items-center justify-center text-white font-semibold'>
            STREAM NOW <span className='text-2xl'><FaCaretRight/></span>
        </div>
      </Link>
      </div>

      </div>
    </div>
  )
}

export default BannerBackGround