import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/Theme";

import ParticlesBg from "particles-bg";

export const Home = () => {
  const theme = useContext(ThemeContext);
  return (
    <React.Fragment>
      <Container theme={theme}>
        <Title>
          <MainTitle color={{ main: theme.main, text: theme.text_main }}>
            <span>Hi I'm </span>
            <span>Phansa</span>
          </MainTitle>
          <SubTitle color={theme.text_sub}>
            <span>Frontend </span>
            <span>Developer</span>
          </SubTitle>
        </Title>
      </Container>
      <ParticlesBg color={theme.main} num="40" type="cobweb" bg={true} />
    </React.Fragment>
  );
};

const Container = styled.div`
  height: 100vh;
  max-width: 100vw;
  font-family: "Spartan", sans-serif;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 20px 40px;
  background-color: rgba(255, 255, 255, 0.1);
`;

const MainTitle = styled.div`
  span {
    font-weight: 500;

    @media screen and (max-width: 30em) {
      font-size: 2rem;
    }
    @media screen and (min-width: 30em) {
      font-size: 2.5rem;
    }
    @media screen and (min-width: 48em) {
      font-size: 3rem;
    }
    @media screen and (min-width: 64em) {
      font-size: 3.5rem;
    }
  }
  span:nth-child(1) {
    color: ${(props) => props.color.text};
  }
  span:nth-child(2) {
    color: ${(props) => props.color.main};
  }
`;

const SubTitle = styled.div`
  span {
    font-weight: 300;
    color: ${(props) => props.color};

    @media screen and (max-width: 30em) {
      font-size: 1rem;
    }
    @media screen and (min-width: 30em) {
      font-size: 1.2rem;
    }
    @media screen and (min-width: 48em) {
      font-size: 1.4rem;
    }
    @media screen and (min-width: 64em) {
      font-size: 1.55rem;
    }
  }
`;
