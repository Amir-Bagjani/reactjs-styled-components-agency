import styled from "styled-components";
import Mockup from "../assest/mockup.png";
import AnimatedShape from "./AnimatedShape";

const Container = styled.div`
  height: 100vh;
  padding: 20px;
  @media only screen and (max-width: 1064px) {
    height: auto;
    min-height: 100vh;
  }
  @media only screen and (max-width: 520px) {
    height: 100vh;
  }
`;
const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1300px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 520px) {
    flex-direction: column;
    justify-content: center;
  }
`;
const Left = styled.div`
  width: 50%;
  @media only screen and (max-width: 940px) {
    width: 40%;
  }
  @media only screen and (max-width: 520px) {
    display: none;
  }
`;
const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media only screen and (max-width: 940px) {
    gap: 15px;
    width: 60%;
  }
  @media only screen and (max-width: 520px) {
    width: 100%;
    gap: 40px;
  }
`;
const Image = styled.img`
  width: 90%;
  height: 100%;
  object-fit: contain;
`;
const Title = styled.span`
  font-size: 70px;
  @media only screen and (max-width: 940px) {
    font-size: 60px;
  }
  @media only screen and (max-width: 520px) {
    font-size: 50px;
  }
`;
const SubTitle = styled.span`
  font-size: 20px;
  color: #777;
  font-weight: 300;
  font-style: italic;
`;
const Desc = styled.p`
  font-size: 20px;
  color: #777;
  @media only screen and (max-width: 940px) {
    font-size: 18px;
    line-height: 1;
  }
`;
const Button = styled.button`
  width: 150px;
  padding: 15px 20px;
  color: white;
  font-weight: 400;
  background-color: darkblue;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 18px;
  letter-spacing: 1px;
`;

export default function Feature() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Image src={Mockup} />
        </Left>
        <Right>
          <Title>
            <strong>good</strong> design <br />
            <strong>good</strong> business
          </Title>
          <SubTitle>we know that good design means good business.</SubTitle>
          <Desc>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum eius
            provident itaque nostrum, repudiandae quam exercitationem rem veniam
            est voluptatum soluta eligendi quas reprehenderit distinctio.
            Officiis itaque eum odio dolorem?
          </Desc>
          <Button>Learn More</Button>
        </Right>
        <AnimatedShape />
      </Wrapper>
    </Container>
  );
}
