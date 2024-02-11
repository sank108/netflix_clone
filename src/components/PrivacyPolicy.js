import React, { useEffect } from 'react';
import PrivacyPolicyComponent from './PrivacyPolicyComponent';
import Footer from './Footer';

const PrivacyPolicy = () => {

    useEffect(() => {
      function goToTop() {
        window.scrollTo({top:0,left:0,behavior:"smooth"});
        }

        goToTop();
    },[])

    const questions = [
        {
            question:"1. What Personal Information About Users Does streamit Collect?",
            answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis nisl dignissim, placerat diam ac, egestas ante. Morbi varius quis orci feugiat hendrerit. Morbi ullamcorper consequat justo, in posuere nisi efficitur sed. Vestibulum semper dolor id arcu finibus volutpat. Integer condimentum ex tellus, ac finibus metus sodales in. Proin blandit congue ipsum ac dapibus. Integer blandit eros elit, vel luctus tellus finibus in. Aliquam non urna ut leo vestibulum mattis ac nec dolor. Nulla libero mauris, dapibus non aliquet viverra, elementum eget lorem"
        },

        {
            question:"2. Cookies and Web Beacons",
            answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis nisl dignissim, placerat diam ac, egestas ante. Morbi varius quis orci feugiat hendrerit. Morbi ullamcorper consequat justo, in posuere nisi efficitur sed." + 
            "Vestibulum semper dolor id arcu finibus volutpat. Integer condimentum ex tellus, ac finibus metus sodales in. Proin blandit congue ipsum ac dapibus. Integer blandit eros elit, vel luctus tellus finibus in. Aliquam non urna ut leo vestibulum mattis ac nec dolor. Nulla libero mauris, dapibus non aliquet viverra, elementum eget lorem"
        },

        {
            question:"3. Third Party Payment Gateway – Financial Information",
            answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis nisl dignissim, placerat diam ac, egestas ante. Morbi varius quis orci feugiat hendrerit. Morbi ullamcorper consequat justo, in posuere nisi efficitur sed. Vestibulum semper dolor id arcu finibus volutpat. Integer condimentum ex tellus, ac finibus metus sodales in. Proin blandit congue ipsum ac dapibus. Integer blandit eros elit, vel luctus tellus finibus in. Aliquam non urna ut leo vestibulum mattis ac nec dolor. Nulla libero mauris, dapibus non aliquet viverra, elementum eget lorem"
        },

        {
            question:"4. Disclosure Children’s Privacy",
            answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis nisl dignissim, placerat diam ac, egestas ante. Morbi varius quis orci feugiat hendrerit. Morbi ullamcorper consequat justo, in posuere nisi efficitur sed. Vestibulum semper dolor id arcu finibus volutpat. Integer condimentum ex tellus, ac finibus metus sodales in. Proin blandit congue ipsum ac dapibus. Integer blandit eros elit, vel luctus tellus finibus in. Aliquam non urna ut leo vestibulum mattis ac nec dolor. Nulla libero mauris, dapibus non aliquet viverra, elementum eget lorem"
        },

        {
            question:"5. Data transfer, storage & processing globally",
            answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis nisl dignissim, placerat diam ac, egestas ante. Morbi varius quis orci feugiat hendrerit. Morbi ullamcorper consequat justo, in posuere nisi efficitur sed. Vestibulum semper dolor id arcu finibus volutpat. Integer condimentum ex tellus, ac finibus metus sodales in. Proin blandit congue ipsum ac dapibus. Integer blandit eros elit, vel luctus tellus finibus in. Aliquam non urna ut leo vestibulum mattis ac nec dolor. Nulla libero mauris, dapibus non aliquet viverra, elementum eget lorem"
        }
    ]
  return (
    <div className='h-auto'>
        <div className='bg-black  relative'>
            <p className='text-white text-5xl font-bold mt-[130px] w-full mx-auto text-center absolute'>Privacy Policy</p>
            <img src='https://isquad.tv/wp-content/uploads/2018/08/Netflix-Background.jpg' className='w-[100%] h-[300px] object-cover mb-[100px]' />
        </div>

        <div className='w-[1320px] max-[768px]:w-[1000px] mx-auto'>
            {
                questions.map((question) => (
                    <PrivacyPolicyComponent key={question.question} question={question} />
                ))
            }
        </div>

        <Footer/>
    </div>
  )
}

export default PrivacyPolicy