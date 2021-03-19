import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import TourData from '../../FakeData/Data.json'
import TourOption from '../TourOption/TourOption';
import './Home.css'
const Home = (props) => {
    // const TourContext = createContext()
    const { tours, setTours } = props
    useEffect(() => {
        setTours(TourData)
        console.log(tours)
    }, [])

    return (
        <div className="row main">

            {
                tours.map(tour => <TourOption tour={tour}></TourOption>)
            }
        </div>
    );
};

export default Home;