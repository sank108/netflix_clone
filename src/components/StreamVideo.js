import React, { useState , useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ReactPlayer from 'react-player/lazy';
import imdb from '../assets/imdb.jpg';
import { FaTags } from "react-icons/fa";
import axios from 'axios';
import RelatedMovies from './RelatedMovies';
import Footer from './Footer';


const API_KEY = "77b820c2f4a5f9c3469b40a9e771de82";
const StreamVideo = (props) => {
    const location = useLocation();
    console.log(props);
    console.log(location);
    const data = location.state?.movieData;

    const [desc,setDesc] = useState(true);
    const [reviews,setReview] = useState([]);

    function descHandler() {
      setDesc(true);
    }

    useEffect(() => {
      async function getRelatedMovie(){
        let res = await axios.get(`https://api.themoviedb.org/3/movie/${data?.movieId}/similar?api_key=${API_KEY}&language=en-US&page=1`)
     
        setReview(res.data.results);
      }
      getRelatedMovie();
    },[])

    reviews.splice(5);

  return (
    <div className='text-white bg-[#000]'>
      <div className=' min-[768px]:w-[1100px]'>
        <ReactPlayer controls playing url={`https://www.youtube.com/watch?v=${data?.movieVideokey}`} width='100%' height="700px"
        />

      </div>
        

        <div>
          <div className='mt-3 ml-[130px] max-[768px]:ml-8 flex items-center gap-6'>
            <p className='text-4xl font-[Roboto]'>{data?.name}</p>
            <div className='flex gap-3'>
              <img src={imdb} height={40} width={40} className='ml-[-12px]'/>
            <p className='text-[16px] font-semibold'>{data?.imdb}</p>
              
            </div>
            
            
          </div>
        </div>

        <div className='ml-[130px] max-[768px]:ml-8 flex gap-4 text-[20px] text-[#ffffff] font-bold mt-6 items-center'>
          <p>{data.Timing}</p>
          <span className="text-[#6C757D] text-3xl -mt-1">•</span>
          <p>{data.releaseDate}</p>
          <span className="text-[#6C757D] text-3xl -mt-1">•</span>
          <p>1.4K views</p>
          

        </div>

        <div className='flex max-[768px]:ml-8 gap-5 mt-6 ml-[130px]'>
          <div className='flex items-center'>
            <span className='text-[#E50914] text-[20px]'><FaTags/></span>
            <p className='text-[#E50914] text-[18px]'>TAGS:</p>
          </div>

          
            <p  className='text-lg text-[#D1D0cf]'>{data.genres.Action}, </p>

            <p className='text-lg text-[#D1D0cf]'>{data.genres.Adventure}, </p>
          
            <p className='text-lg text-[#D1D0cf]'>{data.genres.Fantasy}</p>
          

        </div>

        <div className='mt-20 mx-auto h-14 w-[1080px] bg-gradient-to-r from-[#14141400] via-[#141314] to-[#14141400] flex items-center justify-center gap-9'>
          <div className={`${desc ? "border-t-[#E50914] text-red-700 border-t-4" : ""} border-t-4 border-transparent h-full flex w-[100px] justify-center cursor-pointer 
          transition-all duration-500`}
          onClick={descHandler}>
            <p className='mt-3  font-bold hover:text-red-700'>Description</p>
          </div>
        </div>

        <div className='ml-[150px] max-[768px]:ml-8 w-[1250px] mt-12 max-[768px]:w-[1000px] max-[768px]:text-lg'> 
          <p className='text-[#D1D0CF]'>{data.Overview}</p>
        </div>


        <div className='ml-[150px] mt-[40px] mb-32  max-[768px]:ml-8'>
          <div><p className='text-[25px] text-[#FFFFFF] font-semibold mb-6'>Related Movies</p></div>

          <div className='flex gap-8 max-[768px]:gap-x-4 max-[768px]:w-[1040px]'>
            {
              reviews.map((review) => (
                <RelatedMovies key={review.id} review={review}/>
              ))
            }
          </div>
        </div>
        
        <Footer/>
        
    </div>
  )
}

export default StreamVideo