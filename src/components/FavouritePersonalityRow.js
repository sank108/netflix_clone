import axios from 'axios';
import React, { useEffect, useState } from 'react'
import PersonCard from './PersonCard';
import { CiCircleChevLeft , CiCircleChevRight } from "react-icons/ci";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FavouritePersonalityRow = () => {

    const [people,setPeople] = useState([]);
    const [scroll , setScroll] = useState(0);

    useEffect(() => {
        async function getData(){
            try{
                let data = await axios.get('https://api.themoviedb.org/3/person/popular?api_key=77b820c2f4a5f9c3469b40a9e771de82&language=en-US&page=1');
                console.log(data.data.results);
                setPeople(data.data.results);
            }catch(error){
                console.log(error);
            }
            
        }
        getData();
    },[]);

    console.log(people);

    const peoples = people.filter(p => p.name !== "Karthik Yogi");
    console.log(peoples);

    let box = document.querySelector(".container7");

    function leftShiftHandler() {
        let width = 120;
        box.scrollLeft = box.scrollLeft - 120;
        setScroll(box.scrollLeft);

    }

    function rightShiftHandler() {
        let width = 120;
        box.scrollLeft = box.scrollLeft + 120;
        setScroll(box.scrollLeft);
    }

    


  return (
    <div className='flex items-center'>
        {
            scroll > 0 && 
            <button onClick={leftShiftHandler} className='cursor-pointer text-3xl absolute text-white hover:text-red-500 ml-[70px]
            z-20 mb-10 md:ml-[60px]'>
                <CiCircleChevLeft/>
            </button>
        }
        <div className='flex max-w-[1300px] max-[768px]:min-w-[900px]  ml-[100px] mt-6 overflow-y-hidden overflow-x-scroll container7 scroll-smooth relative
        max-[768px]:gap-x-[50px]'>
            
            {
                peoples.map((people) => (
                    <PersonCard people={people} key={people.id}/>
                ))
            }
        </div>
        
            
        {scroll < 960 && 
        <button onClick={rightShiftHandler} className='cursor-pointer md:ml-[10px] mb-10 text-3xl text-white hover:text-red-500'>
            <CiCircleChevRight/>
        </button>
        }
        
    </div>
    
  )
}

export default FavouritePersonalityRow