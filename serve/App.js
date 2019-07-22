import React from 'react';

import Tesco_Lotus_logo from './Tesco_Lotus_logo.png';

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <ul id="nav">
                    <li><a href="#">Play</a></li>
                    <li><a href="https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1592384488&redirect_uri=http://localhost:3000/&state=12345abcde&scope=openid%20profile&nonce=09876xyz">Log in</a></li>
                    <li><a href="#">Reward</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            
                
                <div class = "header">

                    <img src={Tesco_Lotus_logo} alt="lotus logo" />
                    <Navbar />
                    <h1></h1>
                
                
            </div>

        
        );

    }
}





export default App;
