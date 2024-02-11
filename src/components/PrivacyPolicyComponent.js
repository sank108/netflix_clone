import React from 'react'

const PrivacyPolicyComponent = ({question}) => {
  return (
    <div className='text-white'>
        <p className='text-3xl mb-5 max-[768px]:w-[1000px] font-bold max-[768px]:text-4xl'>{question.question}</p>
        <p className='text-[#D1D0CF] mb-14 max-[768px]:w-[1040px] max-[768px]:text-2xl'>{question.answer}</p>
    </div>
  )
}

export default PrivacyPolicyComponent