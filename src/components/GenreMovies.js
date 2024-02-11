import React,{useState} from 'react'
import { GoHeart, GoHeartFill} from "react-icons/go";

const GenreMovies = ({movie}) => {

    const [click,setClick] = useState(false);

    function clickHandler() {
      setClick(!click);
    }

    

  return (
    <div className=''>
        <div className='relative group hover-h-[3px] cursor-pointer'>
            <img src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`} className='max-h-[300px] max-w-[250px] 
             max-[768px]:min-h-[500px] max-[768px]:min-w-[300px] max-[768px]:border-2'/>


            <div className='h-[380px] w-[240px] p-4 ml-[-20px] bg-[#111] absolute mt-[-320px] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out
            group-hover:scale-100 transform z-10'>
            <img src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`} className='max-h-[310px] max-w-[250px]'/>
            
            <div className='ml-[2px] mt-1 flex justify-between items-center'>
              <p className='text-lg font-semibold text-white leading-none'>{movie.title}</p>
              <div onClick={clickHandler}>
                {
                  click ? (<GoHeartFill className='text-red-600'/>) : (<GoHeart className="text-white"/>)
                }
              </div>

            </div>
              

            

        </div>
        </div>

        
    </div>
  )
}

export default GenreMovies