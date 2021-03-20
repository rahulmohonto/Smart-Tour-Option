import React from 'react';
import ticketImage from '../../images/ticket_image.jpg';
import './ShowTicket.css'

const ShowTicket = () => {

    return (
        <div className="text-center">
            <h3>Dear Travelers this kind Of Ticket is Now Available</h3>
            <div className="ticket-holder">
                <div className="text-center bg-info rounded">
                    <span className="d-flex">
                        <img className="ticket-image" src={ticketImage} alt=""></img><h3 className="ticket ml-3">Ticket Price : $ 68.80 </h3>
                    </span>
                </div>
                <div className="text-center bg-success rounded">
                    <span className="d-flex">
                        <img className="ticket-image" src={ticketImage} alt=""></img><h3 className="ticket ml-3">Ticket Price : $ 78.80 </h3>
                    </span>
                </div>
                <div className="text-center bg-primary rounded">
                    <span className="d-flex">
                        <img className="ticket-image" src={ticketImage} alt=""></img><h3 className="ticket ml-3">Ticket Price : $ 48.80</h3>
                    </span>
                </div>
            </div>
        </div >
    );
};

export default ShowTicket;