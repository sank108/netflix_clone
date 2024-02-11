import React from 'react'
import imdb from '../assets/imdb.jpg'
import { FaCaretRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const BannerBackGround = (props) => {

  const movieData = props.movieData;
  console.log(movieData);
  return (
    <div className='bg-black w-screen'>
      <div className='relative'>
        <img src={movieData.backgroundPath} className="opacity-0 md:opacity-100 md:min-w-[1100px]  transition-all delay-700 "/>
      </div>
      

      <div className='mt-[100px] md:mt-[200px]'>
        <div className='absolute mt-[-650px] ml-[100px] gap-7'>
        <div className="flex items-center">
        <div className='flex'>
          <p  className='font-bold text-white'>{movieData.genres.Action} 
          <span className="text-red-700 font-bold text-xl ml-2">•</span></p>
        </div>

        <div className='flex ml-[10px]'>
          <p className='font-bold text-white'>{movieData.genres.Adventure} 
          <span className="text-red-700 font-bold text-xl ml-2">•</span></p>
        </div>

        <div className='flex ml-[10px]'>
          <p className='font-bold text-white'>{movieData.genres.Fantasy}</p>
        </div>
        
      </div>

      <div>
        <p className='text-5xl font-bold text-[#fff] mt-2 mb-2'>{movieData.name}</p>
      </div>

      <div className='w-[500px] mb-4'>
        <p className='text-[#fff]'>{movieData.Overview}</p>
      </div>

      <div>
        <div className='flex gap-8 items-center'>
        <div className='flex gap-3'>
          <img src={imdb} height={40} width={40}/>
          <p className='text-[#fff] font-bold text-sm'>{movieData.imdb}</p>
        </div>

        <div>
          <p className='text-[#fff] font-bold text-sm'>{movieData.Timing}</p>
        </div>

        <div>
          <p className="text-[#fff] font-bold text-sm"><span className="text-[#fff] font-bold text-sm mr-2">Starring:</span>{movieData.Starring}</p>
        </div>

        

        </div>
        <div>
        <Link to="/streamvideo" state={{movieData:movieData}}>
          <div className='h-12 w-[250px] mt-5 rounded-md hover:bg-[#ff0000] bg-[#BF000A] cursor-pointer md:mt-12 flex items-center justify-center text-white font-semibold'>
            STREAM NOW <span className='text-2xl'><FaCaretRight/></span>
        </div>
        </Link>
        </div>
      </div>
      </div>
      
      

      </div>
    </div>
  )
}

export default BannerBackGround