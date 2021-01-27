import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class ResponsiveCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="https://via.placeholder.com/150" />
                </div>
                <div>
                    <img src="https://via.placeholder.com/150" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://via.placeholder.com/150" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};

export default ResponsiveCarousel;
