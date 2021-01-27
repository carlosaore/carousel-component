import styled from "styled-components";
import Slider from 'react-styled-carousel';

const responsive = [
    { breakPoint: 1280, cardsToShow: 4 }, // this will be applied if screen size is greater than 1280px. cardsToShow will become 4.
    { breakPoint: 760, cardsToShow: 2 },
    { breakPoint: 0, cardsToShow: 1 },
  ];

const Div = styled.div`
    display : flex;
    flex-direction : column;
    width: 150px
`

const Carousel = () => (
  <Slider responsive={responsive} showArrows={true} infinite={false} autoSlide={false} margin="100px">
    <Div>
        <img src="https://via.placeholder.com/150" alt=""/>
        <img src="https://via.placeholder.com/150" alt=""/>
    </Div>
    <img src="https://via.placeholder.com/250" alt=""/>
    <img src="https://via.placeholder.com/150" alt=""/>
    <img src="https://via.placeholder.com/150" alt=""/>
    <img src="https://via.placeholder.com/150" alt=""/>
    <img src="https://via.placeholder.com/150" alt=""/>
    <img src="https://via.placeholder.com/150" alt=""/>
  </Slider>
);

export default Carousel;