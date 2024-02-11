import React, { useEffect } from 'react'
import Footer from './Footer'

const AboutUs = () => {

  useEffect(() => {
      function goToTop() {
        window.scrollTo({top:0,left:0,behavior:"smooth"});
        }

        goToTop();
  },[])

  const developers = [
    {
      image:"https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2020/12/team-1.png",
      job:"CEO",
      name:"Tonny Smith"
    },

    {
      image:"https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2020/12/team-2.png",
      job:"Designer",
      name:"Barry Tech"
    },

    {
      image:"https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2020/12/team-3.png",
      job:"Developer",
      name:"Kep John"
    },

    {
      image:"https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2020/12/team-4.png",
      job:"Designer",
      name:"Monty Rock"
    }
  ]

  return (
    <div>
        <div className='bg-black h-auto max-[768px]:w-[1100px] relative'>
        <p className='text-white text-5xl font-bold mt-[130px] w-full mx-auto text-center absolute'>About Us</p>
        <img src='https://isquad.tv/wp-content/uploads/2018/08/Netflix-Background.jpg' className='w-[100%] h-[300px] object-cover' />

        <div className='text-[#ffffff] text-center mt-[80px]'>
          <h1 className='text-[50px]'>Masterminds Team</h1>

          <p className='text-gray-400'>
            Your Streamit is build by one of the best and well experienced web developers and an <br/>
            awarded Envato Elite Author.
          </p>
        </div>

        <div className='grid grid-cols-4 max-[768px]:grid-cols-2 gap-10 ml-[170px] mt-10 mb-[100px] 
        max-[768px]:ml-[30px] max-[768px]:gap-x-1'>
          {
            developers.map((developer) => (
              <div>
                <div>
                  <img src={developer.image} className='max-[768px]:min-h-[650px]'/>
                </div>
                <div>
                  <p className='text-white font-bold max-[768px]:text-2xl'>{developer.job}</p>
                  <p className='text-white font-bold text-2xl max-[768px]:text-4xl'>{developer.name}</p>
                </div>
              </div>
            ))
          }
        </div>

        <div className='h-auto bg-[#111] pt-[100px] pb-[100px]'>
          <div className='flex max-[768px]:gap-x-[60px] ml-[100px] items-center max-[768px]:ml-[10px]'>
            <img src="https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2023/11/map.webp" className='h-[650px] w-[650px]
            max-[768px]:h-[400px] max-[768px]:w-[475px]' />

            <div className='text-white '>
              <p className='text-5xl'>Contact Us Here</p>

              <p className='text-gray-500 max-[768px]:w-[500px]'>Streamit is located in Los Angeles city and you can contact us at <span className='text-red-600'>info@medyapim.com</span> for any <br/> tech-related support and assistance. We love to hear from our Streamit users.</p>

              <div className='flex gap-[100px] ml-[100px] mt-5 max-[768px]:ml-[-10px] max-[768px]:gap-[40px]'>
                <div >
                  <p className='text-red-600 text-5xl font-bold mb-1 ml-[19px]'>4</p>
                  <p className='text-2xl'>Branch</p>
                </div>

                <div>
                  <p className='text-red-600 text-5xl mb-1 font-bold'>500+</p>
                  <p className='ml-[2px] text-2xl'>Employee</p>
                </div>

                <div>
                  <p className='text-red-600 mb-1 text-5xl font-bold'>1,000+</p>
                  <p className='ml-[40px] text-2xl'>Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='max-[768px]:mt-[-100px]'>
          <Footer/>
        </div>
    </div>
    </div>
  )
}

export default AboutUs