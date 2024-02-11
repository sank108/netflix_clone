import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import Row from './Row'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Banner2 from './Banner2';
import FavouritePersonalityRow from './FavouritePersonalityRow';
import Genre from './Genre';
import TopTenRow from './TopTenRow'
import Footer from './Footer';

const API_KEY = "77b820c2f4a5f9c3469b40a9e771de82";
const Home = () => {
  
  return (
    <div className='bg-black w-full md:w-screen'>
        
        <Banner/>

        <h2 className='mt-[100px] text-[#FFFFFF] ml-[100px] text-[21px] font-semibold'>Top 10 Movies to Watch</h2>
        <TopTenRow url={`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`} isTopTen/>

        <h2 className='mt-[40px] text-[#FFFFFF] ml-[100px] text-[21px] font-semibold'>Upcoming Movies</h2>
        <Row url={`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`}/>

        <Banner2 />

        <h2 className='mt-[80px] text-[#FFFFFF] ml-[100px] text-[21px] font-semibold'>Your Favorite Personality</h2>
        <FavouritePersonalityRow/>

        <h2 className='mt-[40px] text-[#FFFFFF] ml-[100px] text-[21px] font-semibold'>Popular Movies</h2>
        <Row url={`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`} isPopularMovies/>

        <h2 className='mt-[40px] text-[#FFFFFF] ml-[100px] text-[21px] font-semibold'>Movie Genres</h2>
        <Genre url={`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`}/>

        <h2 className='mt-[40px] text-[#FFFFFF] ml-[100px] text-[21px] font-semibold'>Trending Movies</h2>
        <Row url={`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&language=en-US`} isTrendingMovies/>

        <Footer/>

    </div>
  )
}

export default Home