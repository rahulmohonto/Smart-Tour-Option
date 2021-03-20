import React, { useEffect, useState } from 'react';
import TourData from '../../FakeData/Data.json'
import TourOption from '../TourOption/TourOption';
import './Home.css'
const Home = () => {
    // console.log(props)
    const [tours, setTours] = useState([])
    // const { tours, setTours } = props
    useEffect(() => {
        setTours(TourData)
        console.log(tours)
    }, [])

    return (
        <div className="row main">

            {
                tours.map(tour => <TourOption key={tours.fullname} tour={tour}></TourOption>)
            }
        </div>
    );
};

export default Home;