import UnitCard from '@/Components/UnitCard';
import React, { useEffect, useState } from 'react';

const page = () => {
    const [units, setUnits] = useState([]);

    useEffect(() => {
        fetch('/units.json') // Assuming units.json is in the public folder
            .then(res => res.json())
            .then(data => setUnits(data))
            .catch(error => console.error('Error fetching units:', error));
    }, []);

    return (
        <div className='flex flex-wrap justify-start'>
            <UnitCard></UnitCard>
            <UnitCard></UnitCard>
            <UnitCard></UnitCard>
            <UnitCard></UnitCard>
            <UnitCard></UnitCard>
            <UnitCard></UnitCard>
            <UnitCard></UnitCard>
            <UnitCard></UnitCard>
        </div>
    );
};

export default page;
