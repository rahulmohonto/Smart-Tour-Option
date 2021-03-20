import React, { useEffect, useState } from 'react';
// import { useContext } from 'react';
// import { TourContext } from '../TourOption/TourOption';
import TourData from '../../FakeData/Data.json'
import './DestinationSelection.css';
import { useParams } from 'react-router';
import { useHistory } from "react-router";
import ShowTicket from '../ShowTicket/ShowTicket';


const DestinationSelection = () => {

    const { fullname } = useParams();
    const [optionDetail, setOptionDetail] = useState([])
    const [componentshow, setComponentShow] = useState(false)

    useEffect(() => {
        setOptionDetail(TourData)
        console.log(optionDetail)

    }, [optionDetail])

    // const [ticket1, ticket2, ticket3] = optionDetail
    const history = useHistory();
    console.log(history)
    // console.log(optionDetail)

    const [ticket] = optionDetail
    console.log(ticket)

    const handlePlaceSearch = () => {


        optionDetail.find(element => {
            return element.fullname === fullname && setComponentShow(true)


        })


    }



    return (
        <div className="form-map-holder">
            <div >
                <div>
                    {/* <h3>{ticket1}</h3>
                    <h3>{ticket2}</h3>
                    <h3>{ticket3}</h3> */}
                </div>

                <h2 className="text-center"> Travelers select your destination To Go By </h2>
                <h3 className="text-center">{fullname}</h3>

                <div className="text-center">
                    <input type="text" className="place" name="search" required placeholder="start" /><br />

                    <input type="text" className="place" name="search" placeholder="End" required /><br />
                    <button onClick={() => handlePlaceSearch()} className="btn btn-primary text-center mt-3">Search</button>
                    {componentshow && <ShowTicket></ShowTicket>
                    }
                </div>
            </div>

        </div>
    );
};

export default DestinationSelection;
