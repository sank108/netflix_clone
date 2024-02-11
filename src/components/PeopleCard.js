import React from 'react'

const PeopleCard = ({people}) => {
  return (
    <div>
        <div>
            <img src={`https://image.tmdb.org/t/p/original${people?.profile_path}` } className='max-h-[200px] max-w-[300px] aspect-square relative opacity-45
            max-[768px]:min-h-[220px]' />

            <div className='leading-5 absolute mt-[-50px] ml-[10px]'>
                <p className='text-white font-bold'>{people.name}</p>
                <p className='text-white'>{people.known_for_department}</p>
            </div>
        </div>
    </div>
  )
}

export default PeopleCard