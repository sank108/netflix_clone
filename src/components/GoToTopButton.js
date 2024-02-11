import React, { useEffect, useState } from 'react'
import { IoIosArrowUp } from "react-icons/io";

const GoToTopButton = () => {

    const [visible,setVisible] = useState(false);

    function goToTop() {
        window.scrollTo({top:0,left:0,behavior:"smooth"});
    }

    const listenToScroll = () => {
        let highScroll = 300;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

        if(highScroll <  winScroll){
            setVisible(true);
        }else{
            setVisible(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll",listenToScroll);

        return () => window.removeEventListener("scroll",listenToScroll);
    },[]);

  return (
    <div className='fixed z-50'>
        { visible && (
        <div onClick={goToTop} className='h-[50px] w-[50px] mt-[600px] bg-red-700 rounded-full flex items-center justify-center ml-[1440px] fixed cursor-pointer'>
        <IoIosArrowUp className='text-white font-bold transition-all duration-700'/>
        </div>
        )}
    </div>
    
  )
}

export default GoToTopButton