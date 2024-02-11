import React,{useEffect, useState, useRef} from 'react'
import GenreCard from './GenreCard';
import { CiCircleChevLeft,CiCircleChevRight } from 'react-icons/ci';

const Genre = () => {

    const [scroll , setScroll] = useState(0);
    const boxRef = useRef(null);
    const genreData = [
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

    

    
    let width = 220;
    
    
    

    const leftShiftHandler = () => {
        const box = boxRef.current;
        if (box) {
            box.scrollLeft -= width;
            setScroll(box.scrollLeft);
            console.log(box.scrollLeft);
        }
    };

    const rightShiftHandler = () => {
        const box = boxRef.current;
        if (box) {
            box.scrollLeft += width;
            setScroll(box.scrollLeft);
            console.log(box.scrollLeft);
        }
    };
  return (
    <div className='flex'>

        {
            scroll > 0 && 
            <button onClick={leftShiftHandler} className='mt-[95px]
            cursor-pointer text-3xl absolute text-white hover:text-red-500 ml-[60px]
            z-20 mb-10'>
                <CiCircleChevLeft/>
            </button>
        }

        <div ref={boxRef} className='genre_container flex max-w-[1300px] md:min-w-[900px] ml-[100px] mt-6 overflow-x-auto  scroll-smooth'>
        {
            genreData.map((genre) => (
                <GenreCard genre={genre} key={genre.name}/>
            ))
        }
        </div>

        {
        scroll < 1260 && 
        <button onClick={rightShiftHandler} className='cursor-pointer mb-10 text-3xl md:ml-[10px] text-white hover:text-red-500'>
            <CiCircleChevRight/>
        </button>
        }

    </div>
    
  )
}

export default Genre