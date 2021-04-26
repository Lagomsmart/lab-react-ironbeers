import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import NavBar from './NavBar'

function AllBeers(props) {

    const [beer, setBeer] = useState([])

    useEffect(() => {
        axios.get(' https://ih-beers-api2.herokuapp.com/beers')
            .then((res) => setBeer(res.data))
    }, [])


    const displayBeers = () => {
        return beer.map((beer, i) => {
            return (
                <div className="container-allBeers">
                    <div className="container-allBeers-img">
                        <Link to={`/beer/${beer._id}`}><img src={beer.image_url} /></Link>
                    </div>
                    <div className="container-allBeers-info">
                        <Link to={`/beer/${beer._id}`}>
                            <h3>{beer.name}</h3>
                        </Link>
                        <h4>{beer.tagline}</h4>
                        <h6>Created by: {beer.contributed_by}</h6>
                    </div>

                </div>
            )
        })
    }

    return (
        <div>
            <NavBar />
            {displayBeers()}

        </div>
    );
}

export default AllBeers;