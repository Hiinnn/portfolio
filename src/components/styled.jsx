import styled from "styled-components";

export const Container = styled.section`
  padding-top: 40px;

  color: white;
  font-family: "Spartan", sans-serif;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Header = styled.header`
  display: flex;

  h1:nth-child(1) {
    color: white;
  }
  h1:nth-child(2) {
    color: ${(props) => props.theme.main};
  }
`;
