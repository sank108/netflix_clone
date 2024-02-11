import React, { useState } from 'react'
import logo from '../assets/netflixnewlogo.png';
import { IoReorderThreeOutline } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";
import page from '../assets/Screenshot (10).png'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [homeHover,setHomeHover] = useState(true);
    const [featureHover,setFeatureHover] = useState(false);
    const [pagesHover, setPagesHover] = useState(false);
    
    function clickHandlerhome() {
        setHomeHover(!homeHover);
        setFeatureHover(false);
        setPagesHover(false);
    }

    function clickHandlerfeature() {
        setFeatureHover(!featureHover);
        setHomeHover(false);
        setPagesHover(false);
    }

    function clickHandlerPages() {
        setPagesHover(!pagesHover);
        setHomeHover(false);
        setFeatureHover(false);
    }

    function cancelHandler() {
        setPagesHover(false);
        setHomeHover(false);
        setFeatureHover(false);
    }
  return (
    <div>
        <div className='flex min-[1440px]:w-[1528px] justify-around max-[768px]:w-[1100px] md:gap-[280px] gap-[100px] items-center bg-[#111] text-white h-20 relative'>
        <Link to='/'>
            <div className="cursor-pointer flex items-center">
                <IoReorderThreeOutline className='md:opacity-0'/>
                <img src={logo} alt='logo' height={50} width={80}></img>
            </div>
        </Link>
        <div className='flex gap-x-8 opacity-0 md:opacity-100'>
            <Link to='/'>
                <div>
                    <div className='flex items-center cursor-pointer gap-2' onClick={clickHandlerhome}>
                        <p className={`${homeHover ? 'text-red-600' : ''} font-bold`}>Home </p>
                    </div>
                </div>
            </Link>

            <div className='flex items-center cursor-pointer gap-2' onClick={clickHandlerfeature}>
                <p className={`${featureHover ? 'text-red-600' : ''} font-bold`}>Features </p>
                <span className={`${featureHover ? 'text-red-600' : ''}`}><FaCaretDown/></span>
            </div>
            <div className="flex items-center cursor-pointer gap-2" onClick={clickHandlerPages}>
                <p className={`${pagesHover ? 'text-red-600' : ''} font-bold`}>Pages </p>
                <span className={`${pagesHover ? 'text-red-600' : ''}`}><FaCaretDown/></span>
            </div>
        </div>

        <div className='flex items-center gap-6' >
            
            <img src='https://i.pinimg.com/736x/c3/53/7f/c3537f7ba5a6d09a4621a77046ca926d--soccer-quotes-lineman.jpg' alt='user' height={50} width={50} />
            
        </div>
        
    </div>

    <div>
                
    </div>

    <div className={`${featureHover ? 'opacity-100' : 'opacity-0'}  bg-[#111] h-[100px] pt-1 w-[250px] absolute ml-[705px]
                        transition-opacity duration-700 text-white z-30 hidden lg:block pl-4`} 
                   >

                    <div>
                        <Link to='/genrelist'>

                            <div className="h-[40px] w-[200px] cursor-pointer flex items-center hover:bg-gradient-to-r ml-[-4px] 
                            from-[#e20808] to-[#111] transition-bg-color ease-in-out border-l-2 border-transparent border-black
                            " onClick={cancelHandler}>
                                <p className="text-gray text-sm ml-2 ">Genres</p>
                            </div>
                        
                        </Link>

                        <Link to='/people'>
                            <div className='h-[40px] w-[200px] cursor-pointer flex items-center hover:bg-gradient-to-r ml-[-4px] from-[#e20808] to-[#111] transition ease-in-out duration-500'
                            onClick={cancelHandler}>
                              <p className="text-gray text-sm ml-2">Cast</p>
                            </div>
                        </Link>

                        
                        
                    </div>

    </div>

    <div className={`${pagesHover ? 'opacity-100' : 'opacity-0'}  bg-[#111] h-[160px] pt-4 w-[250px] absolute ml-[820px]
                        transition-opacity duration-700 lg:block hidden text-white pl-4 z-30`} 
                   >
                    <div>
                        <Link to="/aboutus">
                            <div className='h-[40px] w-[200px] cursor-pointer flex items-center  transition-all ease-in-out delay-700 hover:bg-gradient-to-r ml-[-4px] from-[#e20808] to-[#111]' onClick={cancelHandler}>
                                <p className="text-gray text-sm ml-2 ">About Us</p>
                            </div>
                        </Link>

                        

                        <Link to='/faq'>
                            <div className='h-[40px] w-[200px] cursor-pointer flex items-center transition-all ease-in-out delay-700 hover:bg-gradient-to-r ml-[-4px] from-[#e20808] to-[#111]' onClick={cancelHandler}>
                                <p className="text-gray text-sm ml-2">FAQ</p>
                            </div>
                        </Link>

                        <Link to="/privacypolicy">
                        <div className='h-[40px] w-[200px] cursor-pointer flex items-center transition-all ease-in-out delay-700 hover:bg-gradient-to-r ml-[-4px] from-[#e20808] to-[#111]' onClick={cancelHandler}>
                            <p className="text-gray text-sm ml-2">Privacy Policy</p>
                        </div>
                        </Link>
                        
                    </div>
                   </div>

    
    </div>
  )
}

export default Navbar