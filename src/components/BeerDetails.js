import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NavBar from './NavBar'


function BeerDetails(props) {

    const [beer, setBeer] = useState([])

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${props.match.params.beerId}`)
            .then((response) => setBeer(response.data))
    }, [])



    return (
        <div>
            <NavBar />
            <div className="container-details">
                <div className="container-details-img">
                    <img src={beer.image_url} />
                </div>

                <div className="container-details-lower">
                    <div className="container-details-name">
                        <h3>{beer.name}</h3>
                        <h4>{beer.tagline}</h4>

                    </div>
                    <div className="container-details-year">
                        <h4>{beer.attenuation_level}</h4>
                        <h5>{beer.first_brewed}</h5>
                    </div>
                </div>

                <div className="container-details-description">
                    <p>{beer.description}</p>
                    <h6>{beer.contributed_by}</h6>
                </div>
            </div>
        </div>
    );
}

export default BeerDetails;