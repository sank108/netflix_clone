import React from 'react'

const MovieSlider2 = ({movie1,movie2,movie3,movie4}) => {
  return (
    <div className='mt-[100px] z-10 ml-[100px] absolute'>
        <div className='h-[150px] w-[250px] bg-black mb-5'>
            <img src={`https://image.tmdb.org/t/p/original${movie1?.backdrop_path}`} alt='hi' className='h-[150px] w-[250px]'/>
        </div>

        <div className='h-[155px] rounded-md w-[250px] mb-5 bg-black border-b-[6px] border-red-600'>
            <img src={`https://image.tmdb.org/t/p/original${movie2?.backdrop_path}`} alt='hi' className='h-[150px] w-[250px] 
             opacity-50'/>
        </div>


        <div className='h-[150px] w-[250px] bg-black mb-5'>
            <img src={`https://image.tmdb.org/t/p/original${movie3?.backdrop_path}`} alt='hi' className='h-[150px] w-[250px]'/>

        </div>

        <div className='h-[150px] w-[250px] bg-black'>
            <img src={`https://image.tmdb.org/t/p/original${movie4?.backdrop_path}`} alt='hi' className='h-[150px] w-[250px] opacity-100 object-cover'/>
        </div>

        
    </div>
  )
}

export default MovieSlider2