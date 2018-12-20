import React, { Component } from 'react';
import './bodyContent.css';
import beams from '../../images/beams.jpg';
import move2 from '../../images/move2.jpg';

class BodyContent extends Component {
    render() {
        return(
            <div className="bodycontent-wrapper">

                <div className= "content image-right">
                    <div className="content-text">
                        <h2>BEAMS</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                    <img src={beams} />
                </div>

                <div className= "content image-left">
                   <div className="content-text">
                        <h2>Move 2</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                    <img src={move2} />
                </div>
                
            </div>
        );
    }
}

export default BodyContent;