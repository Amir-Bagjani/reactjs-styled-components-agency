import { useState } from "react";
import styled, { css } from "styled-components";
import Contact from "./components/Contact";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Price from "./components/Price";
import Services from "./components/Services";

const Container = styled.div`
  overflow: hidden;
  position: relative;
`;
const Polygan = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
const IntroPolygan = styled.div`
  ${Polygan}
  clip-path: polygon(67% 0, 100% 0%, 100% 100%, 55% 100%);
  background-color: crimson;
  z-index: -1;
`;
const FeaturePolygan = styled.div`
  ${Polygan}
  clip-path: polygon(0 0, 55% 0%, 33% 100%, 0% 100%);
  background-color: pink;
  z-index: -1;
`;
const ServicesPolygan = styled.div`
  ${Polygan}
  clip-path: polygon(0 0, 33% 0%, 33% 100%, 0% 100%);
  background-color: #f88497;
  z-index: -1;
`;
const PricePolygan = styled.div`
  ${Polygan}
  clip-path: polygon(33% 0, 100% 0%, 100% 100%, 67% 100%);
  background-color: crimson;
  z-index: -1;
`;

function App() {
  const [smallScreen,setSmallScreen] = useState(window.innerWidth)
  window.addEventListener(`resize`, ()=>setSmallScreen(window.innerWidth))
 
  return (
    <>
      <Container>
        <Navbar />
        <Intro />
        <IntroPolygan />
      </Container>
      <Container>
        <Feature />
        <FeaturePolygan />
      </Container>
      <Container>
        <Services />
        {smallScreen >520 && <ServicesPolygan />}
      </Container>
      <Container>
        <Price />
        <PricePolygan />
      </Container>
      <Container>
        <Contact />
      </Container>
      <Footer />
    </>
  );
}

export default App;
