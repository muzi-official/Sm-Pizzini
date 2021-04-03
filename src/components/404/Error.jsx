import React from 'react'
import Header from '../header/Header'
import Navbar from '../navbar/Navbar'
import error from '../../images/404.svg';
import './Error.css'
import { Link } from 'react-router-dom'

function Error() {
    return (
        <div>
            <Header />
            <Navbar />
            <div className="error__page">
                <img src={error} className="error__img" alt="Error"/>
                <h2 className="error__msg">
                    This page doesn't exist
                </h2>
                <Link className="home__link" to="/"> ➡ Back To Home</Link>
            </div>
        </div>
    )
}

export default Error;
