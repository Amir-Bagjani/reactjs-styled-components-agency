import styled from "styled-components";
import Search from "../assest/search.png";
const Container = styled.div`
  width: 140px;
  padding: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
  -webkit-box-shadow: 0 0px 17px -11px rgba(0, 0, 0, 0.58);
  box-shadow: 0 0px 17px -11px rgba(0, 0, 0, 0.58);
  gap: 10px;
  @media only screen and (max-width: 520px){
    width: 110px;
  }
`;
const Image = styled.img`
  width: 20px;
`;
const Text = styled.span`
  font-weight: 300;
  text-align: center;
`;
export default function MiniCard() {
  return (
    <Container>
      <Image src={Search} />
      <Text>Lorem ipsum dolor sit amet consectetur.</Text>
    </Container>
  );
}
