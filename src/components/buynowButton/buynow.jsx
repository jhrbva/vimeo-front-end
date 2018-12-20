import React, { Component } from 'react';
import './buynow.css';
import play from '../../images/play-icon.svg';

class Buynow extends Component {
    render() {
        return(
            <div className="buynowbtn-wrapper">
                <button className="buynowButton">
                <img className="buttonIcon" src={play} />
                 Buy Now</button>
            </div>
        );
    }
}

export default Buynow;