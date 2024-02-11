import React,{useState} from 'react';
import { FaMinusSquare,FaPlusSquare } from "react-icons/fa";

const QuesAndAns = ({que}) => {

    const [clicked,setClicked] = useState(false);

    function clickHandler() {
        setClicked(!clicked);
    }

  return (
    <div className={`${clicked ? "h-[180px] max-[768px]:h-[260px]" : "h-[90px]"} max-w-[1320px] 
                ml-[100px] px-10 bg-[#111] pt-6 transition-all duration-500 mb-6
                max-[768px]:ml-[20px] max-[768px]:mr-[20px] max-[768px]:h-[120px]`} onClick={clickHandler}>
        <div className='flex justify-between cursor-pointer'>
            <p className='text-white text-3xl max-[768px]:mt-[20px] max-[768px]:text-4xl'>{que.question}</p>
                            <div className='max-[768px]:mt-[20px]'>
                            {
                                clicked ? <FaMinusSquare className='text-red-600 text-4xl'/> : <FaPlusSquare className='text-red-600 text-4xl'/>
                            }
                            </div>
        </div>
                    
                        <div className={`${clicked ? "opacity-100" : "opacity-0"} transition-opacity duration-300 mt-[30px]`}>
                            <div className='h-[1px] bg-gradient-to-r from-[#111] via-white to-[#111]'></div>
                            <p className='text-white font-medium mt-5 max-[768px]:text-xl'>
                            {que.answer}
                            </p>
                        </div>
    </div>
  )
}

export default QuesAndAns