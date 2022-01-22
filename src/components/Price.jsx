import styled from "styled-components";
import PriceCard from "./PriceCard";

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
  justify-content: space-around;
  @media only screen and (max-width: 520px) {
    flex-direction: column;
  }
`;

export default function Price() {
  return (
    <Container>
      <Wrapper>
        <PriceCard price="10" type="Basic" />
        <PriceCard price="20" type="Premium" />
        <PriceCard price="30" type="Advanced" />
      </Wrapper>
    </Container>
  );
}
