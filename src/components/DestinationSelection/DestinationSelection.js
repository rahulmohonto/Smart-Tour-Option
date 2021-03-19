import React, { useEffect, useState } from 'react';
// import { useContext } from 'react';
// import { TourContext } from '../TourOption/TourOption';
import OptionDetail from '../../FakeData/Data.json'
import './DestinationSelection.css';
import { useParams } from 'react-router';

const DestinationSelection = (props) => {
    // const [tours] = useContext(TourContext);
    console.log(props)
    const { fullname } = useParams();
    // const { id, image } = props.tours
    const [optionDetail, setOptionDetail] = useState([])
    useEffect(() => {
        setOptionDetail(`OptionDetail/${fullname}`)
    }, [])
    return (


        <form className="form destination-form">
            <h2>this is for user to select destination. </h2>
            <h3>{fullname}</h3>

            <input type="text" name="search" required placeholder="start" /><br />

            <input type="text" name="search" placeholder="End" required /><br />
            <button className="btn btn-primary text-center ">Search</button>

        </form>
    );
};

export default DestinationSelection;