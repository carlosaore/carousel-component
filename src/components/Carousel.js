import styled from "styled-components";
import Slider from 'react-styled-carousel';

const responsive = [
    { breakPoint: 1280, cardsToShow: 3 },
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
        <p>1: This would be text that goes with the images</p>
    </Div>
    <Div>
        <img src="https://via.placeholder.com/150" alt=""/>
        <img src="https://via.placeholder.com/150" alt=""/>
        <p>2: This would be text that goes with the images</p>
    </Div>
    <Div>
        <img src="https://via.placeholder.com/150" alt=""/>
        <img src="https://via.placeholder.com/150" alt=""/>
        <p>3: This would be text that goes with the images</p>
    </Div>
    <Div>
        <img src="https://via.placeholder.com/150" alt=""/>
        <img src="https://via.placeholder.com/150" alt=""/>
        <p>4: This would be text that goes with the images</p>
    </Div>
    <Div>
        <img src="https://via.placeholder.com/150" alt=""/>
        <img src="https://via.placeholder.com/150" alt=""/>
        <p>5: This would be text that goes with the images</p>
    </Div>
  </Slider>
);

export default Carousel;