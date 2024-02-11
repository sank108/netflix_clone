import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PeopleCard from './PeopleCard';
import Footer from './Footer';

const People = () => {

    const [people,setPeople] = useState([]);

    useEffect(() => {
        async function getData(){
            try{
                let data = await axios.get('https://api.themoviedb.org/3/person/popular?api_key=77b820c2f4a5f9c3469b40a9e771de82&language=en-US&page=1');
                
                setPeople(data.data.results);
            }catch(error){
                console.log(error);
            }
            
        }
        getData();
    },[]);

    console.log(people);

    const peoples = people.filter(p => p.profile_path !== null);
    




  return (
    <div className='bg-black h-auto relative '>
        <p className='text-white text-5xl font-bold mt-[130px] w-full mx-auto text-center absolute'>Persons</p>
        <img src='https://isquad.tv/wp-content/uploads/2018/08/Netflix-Background.jpg' className='w-[100%] h-[300px] object-cover
        ' />

        <div className='grid grid-cols-6 gap-5 mb-[100px] mx-auto max-w-[1320px] mt-[100px] max-[768px]:grid-cols-4 max-[768px]:ml-[30px]'>
            {
                peoples.map((people) => (
                    <PeopleCard people={people} key={people.id}/>
                ))
            }
        </div>

        <Footer/>
    </div>
  )
}

export default People