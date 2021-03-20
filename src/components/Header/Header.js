import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import header from '../../images/Bg.png';
import smartlogo from '../../images/smartlogo.png';
import { UserContext } from '../../App';

const Header = () => {
    const [loginInfo] = useContext(UserContext)
    console.log(loginInfo)
    return (
        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${header})` }} className="header">
            <div className="nav-container">
                <nav className="nav bg-dark">
                    <ul>
                        <li>
                            <img className="logo mt-3 rounded " src={smartlogo} alt="" />
                        </li>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link className="btn-book" to="/destination">Select Destination</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <span className="text-light ml-5">{loginInfo.name}</span>
                    </ul>
                </nav>
            </div>
            <div className="title-container">
                <h1>Want To Go For A Tour</h1>
                <h2>Select & Buy Ticket From Smart Tour </h2>
            </div>

        </div>
    );
};

export default Header;