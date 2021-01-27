import BrainReactCarousel from "./components/BrainReactCarousel";
import Carousel from "./components/Carousel"; 
import PureCarousel from "./components/PureCarousel";
import ResponsiveCarousel from "./components/ResponsiveCarousel";
import SlickCarousel from "./components/SlickCarousel";
import styled from "styled-components";

const Div = styled.div`
  max-width : 700px
`


function App() {
  return (
    <div>
      <p>Some text</p>
      <Div>
        <SlickCarousel />
      </Div>
      <SlickCarousel />
    </div>
  );
}

export default App;
