import styled from "styled-components";

const Container = styled.div`
  height: 100px;
  padding: 20px;
  background-color: gray;
`;
const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1300px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default function Footer() {
  return (
    <Container>
      <Wrapper>2022  amirbagjani@gmail.com</Wrapper>
    </Container>
  );
}
