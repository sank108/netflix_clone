import React from 'react'

const PersonCard = ({people}) => {
  return (
    <div className='flex-col justify-around max-w-[100px] mr-5'>
        <div className='mr-5'>
            {
                people?.name.includes("Jennifer Inch") ? (
                    <img src= "https://th.bing.com/th/id/OIP.jOjuvKDNLEnC9tVNs2OntQHaLH?w=117&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt='hello' className=' max-w-[100px] max-h-[100px] aspect-square rounded-md' />
                ) : 
                (
                    <img src= {`https://image.tmdb.org/t/p/original${people?.profile_path}` } alt='hello' className=' max-w-[100px] max-h-[100px]
                    max-[768px]:min-h-[150px] max-[768px]:min-w-[150px]  aspect-square rounded-md' />
                )
            }
        </div>

        <div className='max-[768px]:w-[150px]'>
            <p className='text-white text-center leading-none font-semibold'>{people?.name}</p>

        <p className=' text-center text-[#D1D0CF]'>{people?.known_for_department}</p>
        </div>

        


         
    </div>
  )
}

export default PersonCard