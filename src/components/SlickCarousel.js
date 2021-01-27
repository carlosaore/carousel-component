import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

import React, { Component } from "react";
import Slider from "react-slick";

const CenteredDiv = styled.div`
    font-family : sans-serif;
    padding-top : 20px;
`
const Img = styled.img`
    margin-left : auto;
    margin-right : auto;
`

const P = styled.p`
    width : 80%;
    margin-left : auto;
    margin-right : auto;
`

export default class SlickCarousel extends Component {
    render() {
        const settings = {
                dots: true,
                focusOnSelect: true,
                lazyLoad: true,
                className: "center",
                centerMode: true,
                infinite: true,
                centerPadding: "100px", //controls how much of the next and prev slides are visible
                slidesToShow: 1,
                speed: 500
        };
        return (
          <div>
            <h2>Center Mode</h2>
            <Slider {...settings}>
                <CenteredDiv>
                    <Img src="https://via.placeholder.com/150" alt=""/>
                    <P>Bacon ipsum dolor amet short loin short ribs strip steak, bresaola turducken shankle chuck andouille picanha pork loin kevin. Meatball ground round beef ribs drumstick. Swine short loin beef ribs, bacon biltong burgdoggen</P>
                </CenteredDiv>
                <CenteredDiv>
                    <Img src="https://via.placeholder.com/500x150" alt=""/>
                    <P>Bacon ipsum dolor amet short loin short ribs strip steak, bresaola turducken shankle chuck andouille picanha pork loin kevin. Meatball ground round beef ribs drumstick. Swine short loin beef ribs, bacon biltong burgdoggen</P>
                </CenteredDiv>
                <CenteredDiv>
                    <Img src="https://via.placeholder.com/150" alt=""/>
                    <P>Bacon ipsum dolor amet short loin short ribs strip steak, bresaola turducken shankle chuck andouille picanha pork loin kevin. Meatball ground round beef ribs drumstick. Swine short loin beef ribs, bacon biltong burgdoggen</P>
                </CenteredDiv>
                <CenteredDiv>
                    <Img src="https://via.placeholder.com/150" alt=""/>
                    <P>Bacon ipsum dolor amet short loin short ribs strip steak, bresaola turducken shankle chuck andouille picanha pork loin kevin. Meatball ground round beef ribs drumstick. Swine short loin beef ribs, bacon biltong burgdoggen</P>
                </CenteredDiv>
                <CenteredDiv>
                    <Img src="https://via.placeholder.com/150" alt=""/>
                    <P>Bacon ipsum dolor amet short loin short ribs strip steak, bresaola turducken shankle chuck andouille picanha pork loin kevin. Meatball ground round beef ribs drumstick. Swine short loin beef ribs, bacon biltong burgdoggen</P>
                </CenteredDiv>
                <CenteredDiv>
                    <Img src="https://via.placeholder.com/150" alt=""/>
                    <P>Bacon ipsum dolor amet short loin short ribs strip steak, bresaola turducken shankle chuck andouille picanha pork loin kevin. Meatball ground round beef ribs drumstick. Swine short loin beef ribs, bacon biltong burgdoggen</P>
                </CenteredDiv>
                <CenteredDiv>
                    <Img src="https://via.placeholder.com/150" alt=""/>
                    <P>Bacon ipsum dolor amet short loin short ribs strip steak, bresaola turducken shankle chuck andouille picanha pork loin kevin. Meatball ground round beef ribs drumstick. Swine short loin beef ribs, bacon biltong burgdoggen</P>
                </CenteredDiv>
            </Slider>
          </div>
        );
      }
    }