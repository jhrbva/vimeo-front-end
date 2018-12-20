import React, { Component } from 'react';
import './monsoon.css';
import monsoon from '../../images/monsoon.jpg';

class Monsoon extends Component {
    render() {
        return(
            <div className="monsoon-wrapper">
                <div className="monsoon-content">
                    <div className="monsoon-text">
                        <h2>MONSOON III</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                    <img src={monsoon}/>
                </div>
            </div>
        );
    }
}

export default Monsoon;