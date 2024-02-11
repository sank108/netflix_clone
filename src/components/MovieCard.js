import React, { useState } from 'react'
import { GoHeart, GoHeartFill} from "react-icons/go";

const MovieCard = ({movie,index,isTopTen}) => {
    const [click,setClick] = useState(false);

    function clickHandler() {
      setClick(!click);
    }


  return (
    <div>
      {isTopTen ? (
      <div className='mr-[0px] p-4 cursor-pointer group'>
      
        <div className='h-[250px] w-[180px]  z-0'>
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} className='h-[200px] min-w-[160px] border-2 -z-40 
            group-hover:opacity-45 transition-opacity duration-500 max-[768px]:min-h-[400px] max-[768px]:min-w-[300px]
            '/>
        </div>
        <div className='text-red-600 font-body text-[120px] z-50 mt-[-140px] ml-[100px] transition-all duration-500 transform group-hover:-translate-y-3 
        max-[768px]:mt-[30px] max-[768px]:ml-[0px]'>{index+1}</div>

        
      </div>
      ) : (
        <div className='p-4 cursor-pointer '>
      
        <div className='max-[768px]:h-[380px] w-[240px] group'>
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} className='h-[300px] min-w-[220px] z-50
            max-[768px]:min-h-[400px] max-[768px]:min-w-[300px]'/>
        
            <div className='bg-[#111] h-[440px] w-[240px] ml-[-10px] mt-[-380px] p-2 flex-col mx-auto transform opacity-0 group-hover:opacity-100 transition-transform duration-500 group-hover:scale-110'>
              <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} className='h-[300px] min-w-[220px] mt-[80px] ml-[2px] z-50
            '/>
            <div className='ml-[2px] mt-2 flex justify-between items-center w-[220px]'>
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
    </div>
    
    
  )
}

export default MovieCard