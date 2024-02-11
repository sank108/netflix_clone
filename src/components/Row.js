import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { CiCircleChevLeft,CiCircleChevRight } from 'react-icons/ci';
import { Link } from 'react-router-dom';


const Row = ({url,isTopTen,isPopularMovies,isTrendingMovies}) => {

    const [movies,setMovies] = useState([]);
    
    const [scroll , setScroll] = useState(0);

    useEffect(() => {
      async function getMovieData() {
        let data = await axios.get(url);
        setMovies(data.data.results);
      }

      getMovieData();

    },[url])
    
    
    let box = document.querySelector(".container1");

    if(isTrendingMovies){
      box = document.querySelector(".container6");
    }

    if(isPopularMovies){
      box = document.querySelector(".container3")
    }

    
    

    function leftShiftHandler() {
        box.scrollLeft = box.scrollLeft - 260;
        setScroll(box.scrollLeft);
        console.log(box.scrollLeft);
    }

    function rightShiftHandler() {
        box.scrollLeft = box.scrollLeft + 260;
        setScroll(box.scrollLeft);
        console.log(box.scrollLeft);
    }


    
  return (

    <div className='flex '>

        {
            scroll > 0 && 
            <button onClick={leftShiftHandler} className='mt-[180px]
            cursor-pointer text-3xl absolute text-white hover:text-red-500 ml-[90px]
            z-20 mb-10 max-[768px]:ml-[60px] max-[768px]:mt-[225px]'>
                <CiCircleChevLeft/>
            </button>
        }

      <div className={`${isTrendingMovies ? "container6" : " "} ${isPopularMovies ? "container3" : " "} flex max-w-[1300px] md:min-w-[900px] ml-[100px] mt-6 overflow-x-auto container1 scroll-smooth
      max-[768px]:min-h-[400px] max-[768px]:gap-x-[120px] max-[768px]:overflow-y-hidden`}>
 
        
          {
            movies.map((movie,index) => (
              
              <Link to="/streamrowvideo" state={{movie:movie}}>
                <MovieCard movie={movie} index={index} key={index} isTopTen={isTopTen}/>
              </Link>
            ))
          }
        
        
        
      
      
      </div>

        {
        scroll < 3800 && 
        <button onClick={rightShiftHandler} className='cursor-pointer max-[768px]:ml-[10px] max-[768px]:mt-[80px] mb-10 ml-[10px] text-3xl mt-[10px] text-white hover:text-red-500'>
            <CiCircleChevRight/>
        </button>
        }
    </div>
    
  )
}

export default Row