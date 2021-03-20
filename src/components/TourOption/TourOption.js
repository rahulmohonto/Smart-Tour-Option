import './TourOption.css';
import React from 'react';
import { Card } from 'react-bootstrap';
// import { UserContext } from '../../App';
import { useHistory } from 'react-router';
// export const TourContext = createContext()
const TourOption = (props) => {
    // const [tours, setTours] = useContext(UserContext);
    const { fullname, image } = props.tour;
    const history = useHistory();
    const handleOptionClick = (fullname) => {
        // history.push(`/destination`) &&
        history.push(`/destination/${fullname}`)

    }


    // const [tours, setTours] = useState([]);

    return (
        <div className="col-md-3 my-3 mx-1">
            <Card onClick={() => handleOptionClick(fullname)} className="card-holder" style={{ width: '18rem', height: '20rem', margin: '20px' }}>
                <Card.Img className="cardImage" variant="top" src={image} />
                <Card.Body>
                    <div className="text-center">


                        <Card.Text>

                        </Card.Text>
                        {/* <Link to></Link> */}

                        <div >
                            <Card.Title><h2>{fullname}</h2>
                            </Card.Title>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default TourOption;