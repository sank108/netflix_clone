import React, { useState,useEffect } from 'react'
import QuesAndAns from './QuesAndAns';
import Footer from './Footer';

const FAQ = () => {


    useEffect(() => {
      function goToTop() {
        window.scrollTo({top:0,left:0,behavior:"smooth"});
        }

        goToTop();
    },[])
    const [clicked,setClicked] = useState(false);

    function clickHandler() {
        setClicked(!clicked);
    }

    const QandA = [
        {
            question: "What is streamit?",
            answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English."
        },

        {
            question: "Will my account work outside my country?",
            answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English."
        },

        {
            question: "I am facing video playback issues. What do I do?",
            answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English."
        },

        {
            question: "How can I manage notifications?",
            answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English."
        },

        {
            question: "What benefits do I get with the packs?",
            answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English."
        },


    ]
  return (
    <div>
        <div className='h-auto'>
            <div className='bg-black  relative'>
            <p className='text-white text-5xl font-bold mt-[130px] w-full mx-auto text-center absolute'>FAQ</p>
            <img src='https://isquad.tv/wp-content/uploads/2018/08/Netflix-Background.jpg' className='w-[100%] h-[300px] object-cover mb-[100px]' />
            </div>

            <div>
                <div >
                    {
                        QandA.map((que) => (
                            <QuesAndAns key={que.question} que={que}/>
                        ))
                    }
                    
                </div>

                
            </div>
        </div>

       <div className='mt-[80px]'>
        <Footer/>
       </div>
    </div>
  )
}

export default FAQ