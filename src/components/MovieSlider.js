import React from 'react'

const MovieSlider = (props) => {
    let movieData1 = props.movieData1;
    let movieData2 = props.movieData2;

    console.log(movieData1);
    console.log(movieData2);
  return (
    <div className="absolute flex h-[450px] w-[560px] bg-black z-10 mt-[-700px] ml-[950px]">
        <div className='flex'>
            <div>
                <img src={movieData1.posterPath} className="h-[350px] w-[280px] object-cover mt-7 ml-5 opacity-60 transition-all delay-700 "/>
            </div>

            <div>
                <img src={movieData2.posterPath} className="h-[350px] w-[240px] object-cover mt-7 ml-5 opacity-20 transition-all delay-700"/>
            </div>
            
        </div>
    </div>
  )
}

export default MovieSlider