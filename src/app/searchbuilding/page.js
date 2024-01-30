import UnitCard from '@/Components/UnitCard';
import React from 'react';

const units = [
    {
      "id": 1,
      "image": "https://i.ibb.co/wwngLJ8/97f1be77985589da455a0b85eb15281d.jpg",
      "special_deal": "10% off for the first month!",
      "favorite_icon": "heart_filled",
      "location": "123 Main Street, Cityville, USA",
      "building_name": "City Towers",
      "rent_per_month": 1500,
      "bed": 2,
      "bath": 2,
      "size": "1200 sqft"
    },
    {
      "id": 2,
      "image": "https://i.ibb.co/wwngLJ8/97f1be77985589da455a0b85eb15281d.jpg",
      "special_deal": "",
      "favorite_icon": "heart_empty",
      "location": "456 Elm Street, Townsville, USA",
      "building_name": "Elm Gardens",
      "rent_per_month": 1200,
      "bed": 1,
      "bath": 1,
      "size": "800 sqft"
    },
    {
      "id": 3,
      "image": "https://i.ibb.co/wwngLJ8/97f1be77985589da455a0b85eb15281d.jpg",
      "special_deal": "Move-in ready!",
      "favorite_icon": "heart_filled",
      "location": "789 Oak Avenue, Villageton, USA",
      "building_name": "Oakview Apartments",
      "rent_per_month": 1800,
      "bed": 3,
      "bath": 2,
      "size": "1500 sqft"
    },
    {
      "id": 4,
      "image": "https://i.ibb.co/wwngLJ8/97f1be77985589da455a0b85eb15281d.jpg",
      "special_deal": "",
      "favorite_icon": "heart_empty",
      "location": "321 Pine Street, Hamletville, USA",
      "building_name": "Pinecrest Place",
      "rent_per_month": 1350,
      "bed": 2,
      "bath": 1,
      "size": "1000 sqft"
    },
    {
      "id": 5,
      "image": "https://i.ibb.co/wwngLJ8/97f1be77985589da455a0b85eb15281d.jpg",
      "special_deal": "Utilities included!",
      "favorite_icon": "heart_filled",
      "location": "987 Maple Lane, Suburbia, USA",
      "building_name": "Maplewood Apartments",
      "rent_per_month": 1600,
      "bed": 2,
      "bath": 2,
      "size": "1100 sqft"
    }
  ]


const page = () => {

    const loadMore =()=>{
        console.log("loading")
    }


    return (
        <div className='flex flex-col justify-center max-w-[1382px]'>
            <div className='flex flex-wrap justify-start gap-[33px] '>
                {units?.map(eachUnit => (
                    <UnitCard key={eachUnit.id} unit={eachUnit} />
                ))}
            </div>  
            <button className='my-[60px] h-[53px] w-[150px] border border-[#E4E4E4] rounded-[7px] m-auto' onClick={loadMore()}>
                Load More   
            </button>
        </div>
    );
};

export default page;


