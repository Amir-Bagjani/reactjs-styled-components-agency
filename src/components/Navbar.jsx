import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.nav`
  height: 50px;
  padding: 0 1.5rem;
`;
const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1300px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  @media only screen and (max-width: 1064px) {
    width: 75%;
  }
  @media only screen and (max-width: 520px){
    width: 50%;
  }
`;
const Logo = styled.h1`
  font-size: 1.8rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: underline crimson;
`;
const Menu = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  @media only screen and (max-width: 790px){
    display: none;
  }
`;
const MenuItem = styled(Link)`
  font-size: 1.2rem;
  color: gray;
`;
const Button = styled.button`
color: white;
border: 2px solid white;
background-color: crimson;
border-radius: 10px;
cursor: pointer;
padding: 10px 15px;
font-weight: bold;
letter-spacing: .5px;
`;

export default function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>Agency</Logo>
          <Menu>
            <li>
              <MenuItem to="/">Home</MenuItem>
            </li>
            <li>
              <MenuItem to="/">Features</MenuItem>
            </li>
            <li>
              <MenuItem to="/">Service</MenuItem>
            </li>
            <li>
              <MenuItem to="/">Pricing</MenuItem>
            </li>
            <li>
              <MenuItem to="/">Contact</MenuItem>
            </li>
          </Menu>
        </Left>
        <Button>JOIN TODAY</Button>
      </Wrapper>
    </Container>
  );
}
