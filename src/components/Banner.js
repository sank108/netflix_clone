import React, { useEffect, useState } from 'react'
import axios from 'axios';
import BannerBackGround from './BannerBackGround';
import MovieSlider from './MovieSlider';
import { CiCircleChevLeft , CiCircleChevRight } from "react-icons/ci";

const url = "https://api.themoviedb.org/3/movie/572802?api_key=77b820c2f4a5f9c3469b40a9e771de82";
const Banner = () => {

    const [movie,setMovie] = useState([]);
    const [index,setIndex] = useState(0);
    
    const [index1,setIndex1] = useState(1);

    const movieData = [
        {
            id : "1",
            name:"Aquaman and the Lost Kingdom",
            genres : {
                Action : "Action",
                Adventure : "Adventure",
                Fantasy : "Fantasy"
            },
            Overview : "Black Manta, still driven by the need to avenge his father's death and wielding the power of the mythic Black Trident, will stop at nothing to take Aquaman down once and for all. To defeat him, Aquaman must turn to his imprisoned brother Orm, the former King of Atlantis, to forge an unlikely alliance in order to save the world from irreversible destruction.",
            imdb : "5.8",
            Timing : "2h : 4mins",
            Starring : "Jason Momoa",
            backgroundPath : "https://image.tmdb.org/t/p/original/cnqwv5Uz3UW5f086IWbQKr3ksJr.jpg",
            posterPath : "https://image.tmdb.org/t/p/original/7lTnXOy0iNtBAdRP3TZvaKJ77F6.jpg",
            movieVideokey : 'UGc5Tzz19UY',
            movieId : 572802,
            releaseDate: "Dec 2023"

        },{
            id : "2",
            name:"Wonka",
            genres : {
                Action : "Comedy",
                Adventure : "Family",
                Fantasy : "Adventure"
            },
            Overview : "Willy Wonka – chock-full of ideas and determined to change the world one delectable bite at a time – is proof that the best things in life begin with a dream, and if you’re lucky enough to meet Willy Wonka, anything is possible.",
            imdb : "7.2",
            Timing : "1h : 56 mins",
            Starring : "Timothee Chalamet",
            backgroundPath : "https://image.tmdb.org/t/p/original/yOm993lsJyPmBodlYjgpPwBjXP9.jpg",
            posterPath : "https://image.tmdb.org/t/p/original/qhb1qOilapbapxWQn9jtRCMwXJF.jpg",
            movieVideokey : 'otNh9bTjXWg',
            movieId : 787699,
            releaseDate: "Dec 2023"
        },
        {
            id : "3",
            name:"The Beekeeper",
            genres : {
                Action : "Comedy",
                Adventure : "Family",
                Fantasy : "Fantasy"
            },
            Overview : "One man’s campaign for vengeance takes on national stakes after he is revealed to be a former operative of a powerful and clandestine organization known as Beekeepers.",
            imdb : "6.5",
            Timing : "1h : 45 mins",
            Starring : "Jason Statham",
            backgroundPath : "https://image.tmdb.org/t/p/original/42m67GBzlxwu2fcjcsLdMB4VeAN.jpg",
            posterPath : "https://image.tmdb.org/t/p/original/A7EByudX0eOzlkQ2FIbogzyazm2.jpg",
            movieVideokey : 'CHKn-yDCE2w',
            movieId : 866398,
            releaseDate: "Jan 2024"
        }
    ]

    function leftShiftHandler() {
        if(index-1 < 0){
            setIndex(movieData.length - 1);
        }
        else{
            setIndex(index-1);
            
        }
        
            
        if(index1-1 < 0){
            setIndex1(movieData.length - 1);
        }else{
            setIndex1(index1-1);
        }
        
    }

    function rightShiftHandler() {
        if(index+1 >= movieData.length){
            setIndex(0);
        }
        else{
            setIndex(index+1);
        }
        if(index1+1 >= movieData.length){
            setIndex1(0);
        }else{
            setIndex1(index1+1);
        }
        
    }

    useEffect(() => {
        async function fetchData () {
            const res = await axios.get(url);
            console.log(res);
        }

        fetchData();
    },[])


    console.log(index);
    console.log(index1);

    

    
  return (
    <div className='relative'>
        <div>
            <BannerBackGround movieData={movieData[index]} />
            <div className=' min-[1440px]:block min-[1440px]:ml-[17px]  hidden'>
                <MovieSlider movieData1={movieData[index]} movieData2={movieData[index1]}/>
            </div>

        </div>

        <div className='min[1440px]:flex text-5xl mt-[-310px] ml-[980px] gap-3 absolute z-20 font-bold mx-auto hidden'>
            <button onClick={leftShiftHandler} className='cursor-pointer text-white hover:text-red-500'>
                <CiCircleChevLeft/>
            </button>
            <button onClick={rightShiftHandler} className='cursor-pointer text-white hover:text-red-500'>
                <CiCircleChevRight/>
            </button>
        </div>
        
    </div>
  )
}

export default Banner