import styled from "styled-components";
import Woman from "../assest/woman.png";
import AnimatedShape from "./AnimatedShape";

const Container = styled.div`
  height: calc(100vh - 50px);
  padding: 20px;
  @media only screen and (max-width: 1064px) {
    height: auto;
    min-height: calc(100vh - 50px);
  }
  @media only screen and (max-width: 520px) {
    height: calc(100vh - 50px);
  }
`;
const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1300px;
  height: 100%;
  display: flex;

  @media only screen and (max-width: 520px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media only screen and (max-width: 1064px) {
    width: 80%;
    height: 100%;
  }

  @media only screen and (max-width: 520px){
    width: 100%;
    height: 100%;
    gap: 50px;
  }
`;
const Title = styled.h1`
  width: 60%;
  font-weight: 400;
  font-size: 60px;
  line-height: 1;

  @media only screen and (max-width: 1064px) {
    width: 80%;
  }

  @media only screen and (max-width: 520px){
    width: 100%;
    font-size: 50px;
  }
`;
const Desc = styled.p`
  width: 60%;

  @media only screen and (max-width: 1064px) {
    width: 80%;
  }

  @media only screen and (max-width: 520px){
    width: 100%;
  }
`;
const Info = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 1064px) {
    width: 80%;
  }

  @media only screen and (max-width: 520px){
    width: 100%;
    flex-direction: column;
    gap: 30px;
  }
`;
const Button = styled.button`
  cursor: pointer;
  padding: 15px;
  border-radius: 10px;
  font-weight: 400;
  letter-spacing: 1px;
  border: none;
  outline: none;
  background-color: darkblue;
  color: white;
`;
const Contact = styled.div`
  display: flex;
  gap: 4px;
  flex-direction: column;
`;
const Phone = styled.span`
  color: #f0667d;
  font-weight: bold;
`;
const ContactText = styled.span`
  color: gray;
`;
const Right = styled.div`
  width: 40%;

  @media only screen and (max-width: 520px){
    display: none;
  }
`;
const Image = styled.img`
  width: 100%;
`;

export default function Intro() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Title>Adventures in creative age</Title>
          <Desc>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
            similique maxime hic doloremque dolores ullam consequuntur, libero
            quod iste voluptates accusamus architecto odio expedita assumenda
            deleniti porro illo cupiditate nobis.
          </Desc>
          <Info>
            <Button>START A PROJECT</Button>
            <Contact>
              <Phone>Call Us (012) 345 - 6789</Phone>
              <ContactText>For any question or concern</ContactText>
            </Contact>
          </Info>
        </Left>
        <Right>
          <Image src={Woman} />
        </Right>
        <AnimatedShape />
      </Wrapper>
    </Container>
  );
}
