import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                <img src="https://react-projects-15-cocktails.netlify.app/static/media/logo.9a3d2645.svg" alt=""/>
            </Link>
            
            <ul className="navbar__links">
                <li className="navbar__link">
                    <Link to="/">Home</Link>
                </li>
                <li className="navbar__link">
                    <Link to="about">About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
