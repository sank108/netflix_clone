import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import GenreMovies from './GenreMovies';
import Footer from './Footer';

const GenreStream = () => {
    const location = useLocation();
    const data = location?.state.genre;
    console.log(data);

    const [movies,setMovies] = useState([]);

    useEffect(() => {
        try {
            async function getData(){
            let res = await axios.get(`https://api.themoviedb.org/3/genre/${data.id}/movies?api_key=77b820c2f4a5f9c3469b40a9e771de82`);
            setMovies(res.data.results);
        }
            getData();   
        } catch (error) {
            console.log(error);
        }

        function goToTop() {
        window.scrollTo({top:0,left:0,behavior:"smooth"});
        }

      goToTop();
        
    },[]);

    console.log(movies);




  return (
    <div className='bg-black h-auto min-[1440px]:w-screen relative'>
        <p className='text-white text-5xl font-bold mt-[130px] w-full mx-auto text-center absolute'>{data.name}</p>
        <img src='https://isquad.tv/wp-content/uploads/2018/08/Netflix-Background.jpg' className='w-[100%] h-[300px] object-cover' />

        

        <div className="min-[1440px]:w-screen grid grid-cols-6 max-[768px]:grid-cols-3 mx-auto gap-10 max-w-[1350px] max-[768px]:w-[1000px] mt-[100px]">
            {
            movies.map((movie) => (
                <Link to="/streamrowvideo" state={{movie:movie}}>
                    <GenreMovies movie={movie} key={movie.id}/>
                </Link>
            ))

            }
        </div>
        <div className='mt-[100px]'>
            <Footer/>
        </div>
    </div>
  )
}

export default GenreStream