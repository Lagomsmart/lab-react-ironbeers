import React from 'react';
import { Link } from 'react-router-dom'

function Home(props) {
    return (
        <div>
            <div>
                <img src="./assets/beers.png" />
                <Link to="/allbeers"><h1>All Beers</h1></Link>
                <p>Lorem ipwhatever word and stuff mer ord for dom som inte fostar</p>
            </div>
            <div>
                <img src="./assets/random-beer.png" />
                <Link to="/randombeer"><h1>Random Beer</h1></Link>
                <p>Lorem ipwhatever word and stuff mer ord for dom som inte fostar</p>
            </div>
            <div>
                <img src="./assets/new-beer.png" />
                <Link to="/newbeer"><h1>New Beer</h1></Link>
                <p>Lorem ipwhatever word and stuff mer ord for dom som inte fostar</p>
            </div>
        </div>
    );
}

export default Home;