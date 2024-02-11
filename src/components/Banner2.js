import axios from 'axios';
import React, { useEffect, useState } from 'react'
import BannerBackground2 from './BannerBackground2';
import MovieSlider2 from './MovieSlider2';
import { CiCircleChevUp ,CiCircleChevDown} from "react-icons/ci";
import { IoChevronDown } from "react-icons/io5";

const API_KEY= "77b820c2f4a5f9c3469b40a9e771de82"
const Banner2 = () => {

    const [movie,setMovie] = useState([]);
    const [index1,setIndex1] = useState(0);
    const [index2,setIndex2] = useState(1);
    const [index3,setIndex3] = useState(2);
    const [index4,setIndex4] = useState(3);

    useEffect(() => {
        try{
            async function getMovieData() {
                let data = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
                setMovie(data.data.results);
            }
            getMovieData();
        }catch(e){
            console.log(e);
        }

        
    },[])

    movie.splice(10);

    function addClickHandler() {
        if(index1+1 == movie.length){
            setIndex1(0);
        }else{
            setIndex1(index1+1);
        }

        if(index2+1 == movie.length){
            setIndex2(0);
        }else{
            setIndex2(index2+1);
        }

        if(index3+1 == movie.length){
            setIndex3(0);
        }else{
            setIndex3(index3+1);
        }

        if(index4+1 == movie.length){
            setIndex4(0);
        }else{
            setIndex4(index4+1);
        }

    }

    function subClickHandler() {
        if(index1-1 < 0){
            setIndex1(movie.length-1);
        }else{
            setIndex1(index1-1);
        }

        if(index2-1 < 0){
            setIndex2(movie.length-1);
        }else{
            setIndex2(index2-1);
        }

        if(index3-1 < 0){
            setIndex3(movie.length-1);
        }else{
            setIndex3(index3-1);
        }

        if(index4-1 < 0){
            setIndex4(movie.length-1);
        }else{
            setIndex4(index4-1);
        }
    }


  return (
    
    <div className='relative mt-[450px]'>

        <CiCircleChevUp className='min-[1440px]:block hidden text-white z-50 absolute cursor-pointer hover:text-red-600 transition-colors duration-500 ml-[210px] mt-[65px] text-3xl' onClick={addClickHandler}/>

        <div>
            <div className=' min-[1440px]:block hidden'>
                <MovieSlider2 movie1={movie[index1]} movie2={movie[index2]} movie3={movie[index3]} movie4={movie[index4]}/>
            </div>
            <BannerBackground2 movieData={movie[index2]}/>

        </div>
        
        
        <CiCircleChevDown className='min-[1440px]:block hidden text-white cursor-pointer absolute hover:text-red-600 transition-colors duration-500 z-50  text-3xl mt-[-90px] ml-[210px]' onClick={subClickHandler} />
        
    </div>
  )
}

export default Banner2