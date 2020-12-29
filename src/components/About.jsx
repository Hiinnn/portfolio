import React from "react";
import styled from "styled-components";

export const About = () => {
  return (
    <Container>
      <Header>ABOUT ME.</Header>
      <Paragraph>
        Hi, my name is Hin and I'm currently a student at King Mongkut's
        Institute of Technology Ladkrabang
      </Paragraph>
    </Container>
  );
};

const Container = styled.div`
  min-height: 500px;
  padding: 40px 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: bisque;

  @media (max-width: 960px) {
    background-color: pink;
  }
  @media (max-width: 720px) {
    background-color: blue;
  }
  @media (max-width: 540px) {
    background-color: red;
  }
`;

const Header = styled.div`
  display: flex;
  font-size: 3em;
`;

const Paragraph = styled.p`
  font-size: 16px;
  text-indent: 1.5em;
`;
