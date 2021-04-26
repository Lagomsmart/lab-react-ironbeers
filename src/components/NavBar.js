import React from 'react';
import { Link } from 'react-router-dom'


function NavBar(props) {
    return (
        <div className="navbar">
            <Link to="/"><h3>Home</h3></Link>
        </div>
    );
}

export default NavBar;