import React, { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/Theme";

import gsap from "gsap/gsap-core";
import ParticlesBg from "particles-bg";

export const Home = () => {
  const theme = useContext(ThemeContext);
  const titleRef = useRef(null);
  useEffect(() => {
    gsap.from(titleRef.current, {
      opacity: 0.2,
      ease: "none.inOut",
      y: 50,
      duration: 1,
    });
  }, []);
  return (
    <Container theme={theme} id="home">
      <Title ref={titleRef}>
        <MainTitle color={{ main: theme.main, text: theme.text_main }}>
          <h1>Hi I'm&nbsp;</h1>
          <h1>Phansa</h1>
        </MainTitle>
        <SubTitle color={theme.text_sub}>
          <span>Frontend </span>
          <span>Developer</span>
        </SubTitle>
      </Title>
      <ParticlesBg color={theme.main} num="50" type="cobweb" bg={true} />
    </Container>
  );
};

const Container = styled.section`
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

  background-color: rgba(255, 255, 255, 0.1);

  @media screen and (max-width: 30em) {
    padding: 10px 20px;
  }
  @media screen and (min-width: 30em) {
    padding: 20px 40px;
  }
`;

const MainTitle = styled.div`
  display: flex;
  h1:nth-child(1) {
    color: ${(props) => props.color.text};
  }
  h1:nth-child(2) {
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
