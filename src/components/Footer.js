import React from 'react'
import netflix from '../assets/netflixnewlogo.png'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='max-[768px]:mt-[100px] min-[1440px]:w-screen min-[1440px]:pb-[40px] max-[768px]:pb-[40px] min-[1440px]:pl-[130px] md:w-[1100px] md:pl-[100px] h-auto bg-[#141314]'>
        <div>
            <div className=' min-[1440px]:w-[1390px]  mx-auto pt-[80px] md:flex gap-x-[70px] items-start'>
            <div className='min-[1440px]:flex min-[1440px]:gap-x-[70px] min-[1440px]:mr-[0px] md:mr-[150px]'>
                <div>
                    <img src={netflix} alt='logo' className='h-[70px] w-[100px] ml-[-20px] mb-9'/>
                    <p className='text-[14px] text-[#FFFFFF]'><span className='text-[14px] text-[#D1D0CF]'>Email us</span>:customer@netflix.com</p>
                    <p className='text-[14px] text-[#D1D0CF] mt-7 font-semibold'>CUSTOMER SERVICES</p>
                    <p className='text-[20px] md:min-w-[150px] md:text-lg font-bold text-[#FFFFFF] mt-3'>+ (480) 555-0103</p>
                </div>

                <div className='min-[1440px]:mt-[-10px]'>
                    <h2 className='text-[20px] text-[#FFFFFF] mt-4 md:mt-6 mb-14 font-semibold'>Quick Links</h2>
                    <Link to='/aboutus'>
                        <p className='text-[14px] md:mt-[-40px] text-[#D1D0CF] mb-4 font-bold hover:text-red-700 transition-all duration-200 cursor-pointer'>About us</p>
                    </Link>
                    
                    <Link to='/faq'>
                        <p className='text-[14px] text-[#D1D0CF] font-bold hover:text-red-700 transition-all duration-200 cursor-pointer'>FAQ</p>
                    </Link>
                </div>

                <div className='md:mt-8 min-[1440px]:mt-[0px]'>
                    <h2 className='text-[20px] text-[#FFFFFF]  mt-4  mb-14 font-semibold'>Movies to Watch</h2>
                    <Link to="/allmovies" state={{type:"Top Trending"}}>
                        <p className='text-[14px] text-[#D1D0CF] md:mt-[-45px] mb-4 font-bold hover:text-red-700 transition-all duration-200 cursor-pointer'>Top Trending</p>
                    </Link>
                    
                    <Link to="/allmovies" state={{type:"Recommended"}}>
                        <p className='text-[14px] text-[#D1D0CF] mb-4 font-bold hover:text-red-700 transition-all duration-200 cursor-pointer'>Recommended</p>
                    </Link>
                    <Link to="/allmovies" state={{type:"Popular"}}>
                        <p className='text-[14px] text-[#D1D0CF] mb-4 font-bold hover:text-red-700 transition-all duration-200 cursor-pointer'>Popular</p>
                    </Link>
                </div>
            </div>

                <div className='md:flex-row min-[1440px]:flex min-[1440px]:gap-x-[70px]'>
                <div>
                <h2 className='text-[20px] text-[#FFFFFF] mt-4 mb-2 font-semibold'>About Company</h2>
                
                <Link to='/privacypolicy'>
                    <p className='text-[14px] text-[#D1D0CF] mb-4 font-bold hover:text-red-700 transition-all duration-200 cursor-pointer'>Privacy Policy</p>
                </Link>
                
                <Link to='/termsofuse'>
                    <p className='text-[14px] text-[#D1D0CF] mb-4 font-bold hover:text-red-700 transition-all duration-200 cursor-pointer'>Terms of Use</p>
                </Link>
                </div>

            <div>
                <h2 className='text-[20px] text-[#FFFFFF] mt-4 mb-8 font-semibold'>Subscribe Newsletter</h2>

                <div className='flex items-center'>
                    <input type='email' placeholder='Email' className='bg-[#191919] h-[40px] w-[300px] pl-4 rounded-sm'></input>
                    <div className='h-[42px] w-[100px] flex items-center justify-center text-[14px] font-semibold bg-[#BF000A]
                    rounded-sm'>SUBSCRIBE</div>
                </div>

                <div className='flex items-center gap-[15px] mt-[60px] ml-2'>
                    <p className='font-bold text-white'>Follow Us:</p>
                    <div className='h-[35px] w-[35px] text-white rounded-full flex items-center justify-center bg-[#252525]'>
                        <FaFacebook className='text-sm'/>
                    </div>
                    <div className='h-[35px] w-[35px] text-white rounded-full flex items-center justify-center bg-[#252525]'>
                        <FaInstagram className='text-sm'/>
                    </div>
                    <div className='h-[35px] w-[35px] text-white rounded-full flex items-center justify-center bg-[#252525]'>
                        <FaTwitter className='text-sm'/>
                    </div>
                </div>
            </div>
            </div>

            

        </div>

        <div className='md:ml-[-100px] md:mt-[-50px] min-[1440px]:ml-[10px]'>
            <div className='w-screen min-[1440px]:w-[1300px] min-[1440px]:ml-[-20px] mx-auto mt-[100px] h-[1px] bg-gray-800'></div>

        <div className='md:flex md:items-center md:ml-[60px] md:mx-auto md:w-[1000px]'>
            <div className='ml-[106px] max-[768px]:flex-col min-[1440px]:gap-x-[350px] min-[1440px]:flex min-[1440px]:ml-[-300px]  mx-auto items-center flex md:w-[500px] mt-[50px] justify-between w-[1300px]'>
            <div>
                <div className='flex gap-[25px] md:w-[500px] md:ml-[400px] min-[1440px]:ml-[224px] text-[14px] text-[#D1D0CF] font-semibold'>
                <p>Terms of Use</p>
                <p>Privacy Policy</p>
                <p>Blog</p>
                <p>FAQ</p>
                <p>Watch List</p>
                </div>
                
                <div className='md:max-w-[500px] md:ml-[200px]'>
                    <p className='max-w-[900px] md:min-w-[800px] min-[1440px]:ml-[25px] text-[14px] text-[#D1D0CF] mt-4'>
                        © 2024 <span className='text-red-700'>STREAMIT</span>. All Rights Reserved. All videos and shows on this platform are trademarks of, and all related images and content are the property of, Streamit Inc. Duplication and copy of this is strictly prohibited.
                    </p>
                </div>

            </div>
            

            <div className='md:ml-[300px] min-[1440px]:ml-[240px] '>
                <div className='text-[14px] text-[#D1D0CF] min-[1440px]:w-[200px] min-[1440px]:ml-[0px] font-semibold mb-4'>
                    Download Netflix App
                </div>

                <div className='flex gap-6'>
                    <img src='https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2023/02/google-play.png'
                    className='h-[40px] w-[100px]'/>
                    <img src='https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2023/02/apple.png' 
                    className='h-[40px] w-[100px]'/>
                </div>
                
            </div>
        </div>
        </div>
        </div>
        
        </div>
    </div>
  )
}

export default Footer