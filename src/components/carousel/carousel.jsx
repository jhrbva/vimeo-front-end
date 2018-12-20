import React, { Component } from 'react';
import './carousel.css';
import Buynow from '../buynowButton/buynow';
import Trailler from '../traillerButton/trailler';

//slider images
import boy from '../../images/boy.jpg';
import nichtspassiert from '../../images/nichtspassiert.jpg';
import viceversa from '../../images/viceversa.jpeg';
import fourthphase from '../../images/fourthphase.jpeg';
import fullmoon from '../../images/fullmoon.jpeg';

const poster = [boy, nichtspassiert, viceversa, fourthphase, fullmoon ];
const title = [
    "Hunt for the Wilderpeople",
    "Nichts Passiert / A Decent Man",
    "Vice Versa",
    "The Fourth Phase",
    "Full Moon"
];
const text = [
    "Raised on hip-hop and foster care, defiant city kid Ricky gets a fresh start in the New Zealand countryside.",
    "A Swiss family takes a sky vacation and runs into trouble when the father, the titular decent man, finds himself ina  series of moral quandaries",
    "Come along with the Good Company crew as they travel throughout the US, Japan, BC and Quebec to showcase skiing in the best way possible.",
    "From the creators of The Art of FLIGHT, Red Bull Media House presents The Fourth Phase, a snowboarding epic starring iconic athlete Travis Rice.",
    "Be inspired by women who push boundaries.  FULL MOON showcases the legends, current icons and future prodigies of this ever-evolving lifestyle sport."
];
const filters = ['56, 89, 125, 0.9','71, 105, 127, 0.9','61, 59, 42, 0.9','80, 94, 112, 0.9','97, 98, 101, 0.9'];

class Carousel extends React.Component {
	constructor (props) {
		super(props);
		
		this.state = {
			currentImageIndex: 0
		};
		
		this.nextSlide = this.nextSlide.bind(this);
		this.previousSlide = this.previousSlide.bind(this);
	}
	
	previousSlide () {
		const lastIndex = poster.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === 0;
		const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
		
		this.setState({
			currentImageIndex: index
		});
	}
	
	nextSlide () {
		const lastIndex = poster.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === lastIndex;
		const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

		this.setState({
			currentImageIndex: index
		});
	}
	
	render () {
		return (
			<div className="carousel">
				<Arrow direction="left" clickFunction={ this.previousSlide } glyph=" " />
				<ImageSlide image={ poster[this.state.currentImageIndex] } title={ title[this.state.currentImageIndex] } text={ text[this.state.currentImageIndex] } filter={ filters[this.state.currentImageIndex] }/>
                <Arrow direction="right" clickFunction={ this.nextSlide } glyph=" " />
			</div>
		);
	}
}

const Arrow = ({ direction, clickFunction, glyph }) => (
	<div 
		className={ `slide-arrow ${direction}` } 
		onClick={ clickFunction }>
		{ glyph } 
	</div>
);

const ImageSlide = ({ image, title, text, filter }) => {
	const bgImage = {
        backgroundImage: `url(${image})`, // for the poster image
        boxShadow: `0 -650px 60px -600px inset rgba(${filter})`
    };
    const filterStyle = {
        backgroundColor: `rgba(${filter})`, //for the background image and filter
        filter: `blur(8px)`
    };
	
	return (
        <div>
            <div className="image-slide" style={bgImage}></div>
            <div className="filter" style={filterStyle}></div>
                    
            <div className="sliderContent">
                <div className="sliderText">
                    <h2>{title}</h2>
                    <p>{text}</p>
                    <div className="carouselbtn-wrapper">
                        <Buynow />
                        <Trailler />
                    </div>
                </div>
                <div className="poster" style={bgImage} ></div>
            </div>

        </div>
	);
}
  export default Carousel;