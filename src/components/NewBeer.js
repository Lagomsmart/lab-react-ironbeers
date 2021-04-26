import axios from 'axios';
import React, { useState } from 'react';
import NavBar from './NavBar'

function NewBeer(props) {

    const [beername, setBeername] = useState("")
    const [beertagline, setBeertagline] = useState("")
    const [beerdescription, setBeerdescription] = useState("")
    const [beerfirst_brewed, setBeerfirst_brewed] = useState("")
    const [beerbrewers_tips, setBeerbrewers_tips] = useState("")
    const [beerattenuation_level, setBeerattenuation_level] = useState(0)
    const [beercontributed_by, setBeercontributed_by] = useState("")


    let newBeer = {
        name: beername,
        tagline: beertagline,
        description: beerdescription,
        first_brewed: beerfirst_brewed,
        brewers_tips: beerbrewers_tips,
        attenuation_level: beerattenuation_level,
        contributed_by: beercontributed_by
    }

    const submitAndPost = (e) => {
        e.preventDefault()
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
            .then(response => console.log(response))
    }

    return (
        <div>
            <NavBar />
            <div className="container-newbeer">
                <form onSubmit={submitAndPost}>
                    <label>Name
                    <input type="text" name="name" onChange={event => setBeername(event.target.value)}></input></label>

                    <label>Tagline
                    <input type="text" name="tagline" onChange={event => setBeertagline(event.target.value)}></input></label>

                    <label>Description
                    <input type="text" name="description" onChange={event => setBeerdescription(event.target.value)}></input></label>

                    <label>First Brewed
                    <input type="text" name="firstbrewed" onChange={event => setBeerfirst_brewed(event.target.value)}></input></label>

                    <label>Brewers Tips
                    <input type="text" name="brewerstips" onChange={event => setBeerbrewers_tips(event.target.value)}></input></label>

                    <label>Attenuaition Level
                    <input type="number" name="attlevel" onChange={event => setBeerattenuation_level(event.target.value)}></input></label>

                    <label>Contributed By
                    <input type="text" name="contributedby" onChange={event => setBeercontributed_by(event.target.value)}></input></label>

                    <input type="submit" value="ADD NEW" className="submit-addnew" />
                </form>
            </div>
        </div >
    );
}


export default NewBeer;