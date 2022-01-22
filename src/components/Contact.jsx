import styled from "styled-components";
import BackgroundImage from "../assest/background.png";
import Map from "../assest/map.png";
import Phone from "../assest/phone.png";
import Send from "../assest/send.png";

const Container = styled.div`
  height: 100vh;
  background: url(${BackgroundImage});
`;
const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 32.5rem) {
    flex-direction: column;
  }
`;
const FormContainer = styled.div`
  width: 50%;
  @media only screen and (max-width: 32.5rem) {
    width: 100%;
  }
`;
const Title = styled.h1`
  margin: 50px;
  margin-top: 0;
  @media only screen and (max-width: 32.5rem) {
    margin: 20px;
  }
`;
const Form = styled.form`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 32.5rem) {
    flex-direction: column;
  }
`;
const LeftForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
  @media only screen and (max-width: 32.5rem) {
    height: 50%;
    margin-right: 0;
  }
`;
const RightForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (max-width: 32.5rem) {
    height: 50%;
  }
`;
const Input = styled.input`
  width: 200px;
  padding: 20px;
  @media only screen and (max-width: 32.5rem) {
    padding: 5px;
  }
`;
const TextArea = styled.textarea`
  width: 200px;
  height: 60%;
  padding: 20px;
  @media only screen and (max-width: 32.5rem) {
    padding: 5px;
    margin-top: 20px;
  }
`;
const Button = styled.button`
  border: none;
  padding: 15px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  border-radius: 10px;
  margin-top: 20px;
  cursor: pointer;
  @media only screen and (max-width: 32.5rem) {
    padding: 5px;
    font-size: 14px;
  }
`;
const AddressContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 32.5rem) {
    width: 100%;
    margin-top: 20px;
  }
`;
const AddressItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  @media only screen and (max-width: 32.5rem) {
    margin-bottom: 20px;
  }
`;
const Icon = styled.img`
  width: 20px;
  margin-right: 20px;
  @media only screen and (max-width: 32.5rem) {
    width: 15px;
  }
`;
const Text = styled.span`
  font-size: 20px;
  margin-right: 15px;
  @media only screen and (max-width: 32.5rem) {
    font-size: 14px;
  }
`;

export default function Contact() {
  return (
    <Container>
      <Wrapper>
        <FormContainer>
          <Title>
            Questions? <br /> Let's Get In Touch
          </Title>
          <Form>
            <LeftForm>
              <Input placeholder="Your Name" />
              <Input placeholder="Your Email" />
              <Input placeholder="Subject" />
            </LeftForm>
            <RightForm>
              <TextArea placeholder="Your Message" />
              <Button>Send</Button>
            </RightForm>
          </Form>
        </FormContainer>
        <AddressContainer>
          <AddressItem>
            <Icon src={Map} />
            <Text>123 Park Avenue St., New York, USA</Text>
          </AddressItem>
          <AddressItem>
            <Icon src={Phone} />
            <Text>+1 631 1234 5678</Text>
            <Text>+1 326 1234 5678</Text>
          </AddressItem>
          <AddressItem>
            <Icon src={Send} />
            <Text>shop@gmail.com</Text>
            <Text>sales@shop.dev</Text>
          </AddressItem>
        </AddressContainer>
      </Wrapper>
    </Container>
  );
}
