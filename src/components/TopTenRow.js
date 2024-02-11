import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { CiCircleChevLeft,CiCircleChevRight } from 'react-icons/ci';
import { Link } from 'react-router-dom';


const Row = ({url,isTopTen}) => {
    console.log(url);

    const [movies,setMovies] = useState([]);
    
    const [scroll , setScroll] = useState(0);

    useEffect(() => {
      async function getMovieData() {
        let data = await axios.get(url);
        setMovies(data.data.results);
      }

      getMovieData();

    },[url])
    
    if(isTopTen){
      movies.splice(10);
    }
    
    let box = document.querySelector(".container");

    let width = 0;
    if(isTopTen){
      width = 280;
    }
    function leftShiftHandler() {
        
        box.scrollLeft = box.scrollLeft - width;
        setScroll(box.scrollLeft);
        console.log(box.scrollLeft);

    }

    function rightShiftHandler() {
        
        box.scrollLeft = box.scrollLeft + width;
        setScroll(box.scrollLeft);
        console.log(box.scrollLeft);
    }


    
  return (

    
      <div className='flex'>

        {
            scroll > 0 && 
            <button onClick={leftShiftHandler} className={`${isTopTen ? 'mt-[120px]' : 'mt-[180px]'}
            cursor-pointer text-3xl absolute text-white hover:text-red-500 ml-[80px]
            z-20 mb-10 `}>
                <CiCircleChevLeft/>
            </button>
        }

      <div className='flex max-w-[1300px] max-[768px]:min-h-[450px] max-[768px]:gap-x-[120px]  max-[768px]:min-w-[900px] ml-[100px] mt-6 overflow-x-auto container scroll-smooth'>

      

        {
          movies.map((movie,index) => (
            <Link to="/streamrowvideo" state={{movie:movie}}>
              <MovieCard movie={movie} index={index} key={index} isTopTen={isTopTen}/>
            </Link>
              
            
          ))
        }
      
      
      </div>

        {
        scroll < 1200 && 
        <button onClick={rightShiftHandler} className='cursor-pointer mb-10 text-3xl mt-[-20px] text-white hover:text-red-500'>
            <CiCircleChevRight/>
        </button>
        }
      </div>
    
    
  )
}

export default Row