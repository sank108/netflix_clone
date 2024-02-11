import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation,Link } from 'react-router-dom';
import Footer from './Footer';
import GenreMovies from './GenreMovies';


const API_KEY = "77b820c2f4a5f9c3469b40a9e771de82";
const AllMovies = () => {

    const [movies,setMovies] = useState([]);

    const location = useLocation();
    console.log(location);
    const data = location.state.type;
    console.log(data);

    let url = "";

    if(data === "Top Trending"){
        url=`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
    }

    if(data === "Recommended"){
        url=`https://api.themoviedb.org/3/movie/572802/similar?api_key=${API_KEY}&language=en-US&page=1`;
    }

    if(data === "Popular"){
        url=`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    }

    useEffect(() => {
        async function getData(){
            console.log(url);
            let res = await axios.get(url);
            setMovies(res.data.results);
        }

        function goToTop() {
        window.scrollTo({top:0,left:0,behavior:"smooth"});
        }

        goToTop();

        getData();
    },[url])
  return (
    <div className='bg-black h-auto relative'>
        <p className='text-white text-5xl font-bold mt-[130px] w-full mx-auto text-center absolute'>{data}</p>
        <img src='https://isquad.tv/wp-content/uploads/2018/08/Netflix-Background.jpg' className='w-[100%] h-[300px] object-cover' />

        

        <div className="grid grid-cols-6 max-[768px]:grid-cols-3 max-[768px]:gap-x-5 mx-auto gap-10 max-w-[1350px] mt-[100px]
        max-[768px]:pl-10">
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

export default AllMovies