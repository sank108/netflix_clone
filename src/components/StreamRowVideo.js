import React, { useState , useEffect } from 'react'
import { useLocation} from 'react-router-dom'
import ReactPlayer from 'react-player/lazy';
import imdb from '../assets/imdb.jpg';
import { FaTags } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import axios from 'axios';
import RelatedMovies from './RelatedMovies';
import Footer from './Footer';

const StreamRowVideo = (props) => {

    const API_KEY = "77b820c2f4a5f9c3469b40a9e771de82";
    
    
    
    const location = useLocation();
    console.log(props);
    console.log(location);
    const data = location.state?.movie;
    console.log(data);
    

    
    const [similarMovies,setSimilarMovies] = useState([]);
    const [videoKey,setVideoKey] = useState("");
    const [selectedMovie, setSelectedMovie] = useState(null);

    let genres = data?.genre_ids;
    console.log(videoKey);

    

    useEffect(() => {
      async function getRelatedMovie(){
        let res = await axios.get(`https://api.themoviedb.org/3/movie/${data?.id}/videos?api_key=${API_KEY}&language=en-US`);
        let similar = await axios.get(`https://api.themoviedb.org/3/movie/${data?.id}/similar?api_key=${API_KEY}&language=en-US&page=1`)
        console.log(res);
        setSimilarMovies(similar.data.results);
     
      setVideoKey(res?.data?.results[0]?.key);
      }
      getRelatedMovie();

      function goToTop() {
        window.scrollTo({top:0,left:0,behavior:"smooth"});
      }

      goToTop();
    },[data])

    let genre = [
    {
        id: 28,
        name: "Action",
    },
    {
        id: 12,
        name: "Adventure"
    },
    {
        id: 16,
        name: "Animation"
    },
    {
        id: 35,
        name: "Comedy"
    },
    {
        id: 80,
        name: "Crime"
    },
    {
        id: 99,
        name: "Documentary"
    },
    {
        id: 18,
        name: "Drama"
    },
    {
        id: 10751,
        name: "Family"
    },
    {
        id: 14,
        name: "Fantasy"
    },
    {
        id: 36,
        name: "History"
    },
    {
        id: 27,
        name: "Horror"
    },
    {
        id: 10402,
        name: "Music"
    },
    {
        id: 9648,
        name: "Mystery"
    },
    {
        id: 10749,
        name: "Romance"
    },
    {
        id: 878,
        name: "Science Fiction"
    },
    {
        id: 10770,
        name: "TV Movie"
    },
    {
        id: 53,
        name: "Thriller"
    },
    {
        id: 10752,
        name: "War"
    },
    {
        id: 37,
        name: "Western",
    }
];

  function getNameById(id) {
    for (let i = 0; i < genre.length; i++) {
        if (genre[i].id === id) {
            return genre[i].name;
        }
    }
    return "Genre not found"; // Handle the case where id doesn't match any genre
}

function handleRelatedMovieClick(movie) {
    setSelectedMovie(movie);
  }

  const smovie = similarMovies.filter(similarMovie => similarMovie.poster_path !== null);
  

  smovie.splice(5);
  
  return (
    <div className='bg-black h-[2000px]'>
        <ReactPlayer controls playing url={`https://www.youtube.com/watch?v=${videoKey}`} width="100%" height="700px"/>

        <div>
          <div className='mt-3 ml-[130px] flex items-center gap-6  max-[768px]:ml-8'>
            <p className='text-4xl font-[Roboto] text-white'>{data?.title}</p>
            <div className='flex gap-3'>
              <img src={imdb} height={40} width={40} className='ml-[-12px]'/>
            <p className='text-[16px] font-semibold text-white'>5.0</p>
              
            </div>

            
            
            
          </div>

          <div className='flex gap-4 ml-[130px] mt-4  max-[768px]:ml-8'>
            <div className='flex items-center'>
              <span className='text-[#E50914] text-[20px]'><FaTags/></span>
              <p className='text-[#E50914] text-[18px]'>TAGS:</p>
            </div>

          <div className='flex'>
              {
                genres?.map((genre)=> (
                  
                  <div className='text-lg text-[#D1D0cf] mr-2'>{getNameById(genre)}</div>
                ))
              }
            </div>
          </div>

          <div className='ml-[130px] flex gap-4 text-[20px] text-[#ffffff] font-bold mt-4 items-center  max-[768px]:ml-8'>

            <p>1hr : 54mins</p>
            <span className="text-[#6C757D] text-3xl -mt-1">•</span>
            <p>{data?.release_date}</p>
            <span className="text-[#6C757D] text-3xl -mt-1">•</span>

            <div className='flex items-center gap-2'>
              <span><FaEye/></span>
              <p>1.4K views</p>
            </div>
            
          </div>

          <div className='mt-20 mx-auto h-14 w-[1080px] bg-gradient-to-r from-[#14141400] via-[#141314] to-[#14141400] flex items-center justify-center gap-9'>
            <div className={`border-t-[#E50914] text-red-700 border-t-4 border-transparent h-full flex w-[100px] justify-center cursor-pointer 
            transition-all duration-500`}>
              <p className='mt-3  font-bold hover:text-red-700'>Description</p>
            </div>
          </div>

          <div className='ml-[150px] w-[1250px] mt-12  max-[768px]:ml-8 max-[768px]:w-[1040px] max-[768px]:text-lg '> 
            <p className='text-[#D1D0CF]'>{data?.overview}</p>
          </div>

          <div className='ml-[150px] mt-[40px] mb-32 max-[768px]:w-[1040px] max-[768px]:ml-8'>
            <div><p className='text-[25px] text-[#FFFFFF] font-semibold mb-6'>Related Movies</p></div>

            <div className='flex gap-8'>
            {
              smovie.map((similarMovie) => (
                <RelatedMovies key={similarMovie.id} review={similarMovie} onClick={() => handleRelatedMovieClick(similarMovie)}/>
              ))
            }
            </div>
          </div>


          <Footer/>



        </div>

    </div>
  )
}

export default StreamRowVideo