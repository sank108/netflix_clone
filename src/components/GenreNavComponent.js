import React from 'react'
import GenreNavCard from './GenreNavCard'
import Footer from './Footer'

const GenreNavComponent = () => {


    const movieGenreData = [
        {
            image:"https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2023/10/action.webp",
            name:"Action",
            id:28
        },
        {
            image:"https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2023/10/adventure.webp",
            name:"Adventure",
            id:12
        },
        {
            image:"https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2023/10/animation.webp",
            name:"Animation",
            id:16
        },
        {
            image:"https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2023/10/Crime.webp",
            name:"Crime",
            id:80
        },
        {
            image:"https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2023/10/r-03-big.webp",
            name:"Drama",
            id:18
        },
        {
            image:"https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2023/10/horror.webp",
            name:"Horror",
            id:27
        },
        {
            image:"https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2023/10/mystery.webp",
            name:"Mystery",
            id:9648
        },
        {
            image:"https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2023/10/romance.webp",
            name:"Romance",
            id:10749
        },
        {
            image:"https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2023/10/top-04-big.webp",
            name:"Sci-Fi",
            id:878
        },
        {
            image:"https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2023/10/red.webp",
            name:"Thriller",
            id:53
        },
    ]

    const tvGenreData = [
        {
            image : "https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2023/10/Banner-22.webp",
            "id": 12,
            "name": "Action & Adventure"
        },
        {
            image : "https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2023/10/r-05-big.webp",
            "id": 16,
            "name": "Animation"
        },
        
        {
            image : "https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2023/10/main.webp",
            "id": 80,
            "name": "Crime"
        },
        
        {
            image : "https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2023/10/Banner-1.webp",
            "id": 9648,
            "name": "Mystery"
        },
       
        
        
    ]



  return (
    <div className='min-[1440px]:w-screen bg-black'>

        <div className='ml-[100px] mt-[100px] mb-[100px] max-[768px]:ml-[20px]'>
            <p className="text-2xl font-bold text-white mb-5 ">Movie Genres</p>
            <div className='grid grid-cols-4 max-[768px]:grid-cols-3'>
            {
                movieGenreData.map((movie) => (
                    <GenreNavCard key={movie.id} movie={movie} />
                ))
            }
            </div>
        </div>

        <div className='ml-[100px] mt-[100px] mb-[100px] max-[768px]:ml-[20px]'>
            <p className="text-2xl font-bold text-white mb-5">TV Genres</p>
            <div className='grid grid-cols-4  max-[768px]:grid-cols-3'>
            {
                tvGenreData.map((movie) => (
                    <GenreNavCard key={movie.id} movie={movie} isTvGenre/>
                ))
            }
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default GenreNavComponent