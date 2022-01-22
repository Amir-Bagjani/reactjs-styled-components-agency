import styled from "styled-components";
import Wwlaptop from "../assest/wwlaptop.png";
import MiniCard from "./MiniCard";
import { useState } from "react";
import Play from "../assest/play.png";
import VideoApp from "../assest/video.mp4";

const Container = styled.div`
  height: 100vh;
  padding: 20px;
`;
const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1300px;
  height: 100%;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 520px) {
    flex-direction: column;
    justify-content: center;
  }
`;
const Left = styled.div`
  width: 50%;
  @media only screen and (max-width: 1000px) {
    width: 40%;
  }
  @media only screen and (max-width: 520px) {
    display: none;
  }
`;
const Image = styled.img`
  display: ${(props) => props.show && "none"};
  height: 110vh;
  @media only screen and (max-width: 1000px) {
    height: 90vh;
    margin-left: -50px;
  }
`;
const Video = styled.video`
  display: ${(props) => !props.show && "none"};
  margin-left: 50px;
  @media only screen and (max-width: 520px) {
    margin-left: 0;
    width: 100%;
  }
`;
const Right = styled.div`
  align-self: flex-start;
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 50px;
  gap: 30px;
  @media only screen and (max-width: 1200px) {
    gap: 10px;
    padding: 10px;
  }
  @media only screen and (max-width: 1000px) {
    width: 60%;
  }
  @media only screen and (max-width: 520px) {
    width: 100%;
    padding: 0;
  }
`;
const Title = styled.h1``;
const Desc = styled.p`
  font-size: 20px;
  color: #666;
  @media only screen and (max-width: 1000px) {
    font-size: 16px;
  }
  @media only screen and (max-width: 520px) {
    font-size: 20px;
  }
`;
const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 170px;
  border: none;
  cursor: pointer;
  padding: 15px 20px;
  border-radius: 15px;
  color: white;
  background-color: darkblue;
  letter-spacing: 1px;
  margin-top: 30px;
`;
const Icon = styled.img`
  width: 20px;
`;

const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const CloseVideo = styled.button`
  padding: 8px;
  border-radius: 8px;
  background: white;
  border: none;
  align-self: flex-end;
  margin-right: 10px;
`;

export default function Services() {
  const [show, setShow] = useState(false);
  const [smallScreen, setSmallScreen] = useState(window.innerWidth);
  window.addEventListener(`resize`, () => setSmallScreen(window.innerWidth));

  return (
    <Container>
      <Wrapper>
        {smallScreen <= 520 && show && (
          <Modal>
            <CloseVideo onClick={() => setShow(false)}>Close</CloseVideo>
            <Video controls autoPlay loop show={show} src={VideoApp} />
          </Modal>
        )}
        <Left>
          <Image show={show} src={Wwlaptop} />
          <Video controls autoPlay loop show={show} src={VideoApp} />
        </Left>
        <Right>
          <Title>Simple process to start</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            assumenda pariatur in eos minus nisi molestiae ab magni obcaecati,
            ratione delectus nulla, nemo earum autem fuga, neque tempore vitae
            repellendus.
          </Desc>
          <CardContainer>
            <MiniCard />
            <MiniCard />
            <MiniCard />
          </CardContainer>
          <Button onClick={() => setShow(true)}>
            <Icon src={Play} /> How it works
          </Button>
        </Right>
      </Wrapper>
    </Container>
  );
}
