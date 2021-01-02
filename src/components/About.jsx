import React, { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/Theme";
// import { Tween } from "react-gsap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const About = () => {
  const theme = useContext(ThemeContext);
  const aboutRef = useRef(null);

  if (typeof window !== `undefined`) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.core.globals("ScrollTrigger", ScrollTrigger);
  }

  useEffect(() => {
    gsap.from(aboutRef.current, {
      scrollTrigger: aboutRef.current,
      opacity: 0.2,
      ease: "none.inOut",
      y: 200,
      duration: 1,
    });
  }, []);

  return (
    <Container theme={theme} id="about" ref={aboutRef}>
      <Header theme={theme}>
        <h1>ABOUT&nbsp;</h1>
        <h1>ME.</h1>
      </Header>
      <Article>
        <p>
          Welcome to my Portfolio.
          <br />
          <br />
          My name is Phansa Boonthaweekhunsawat, currently a Computer
          Engineering student at King Mongkut's Institute of Technology
          Ladkrabang.
          <br />
          <br />
          I’ve been coding since 2018, starting with C, Java, and Python
          respectively. After that, I interested in web application development
          and started learning front end with React, HTML, and CSS. I've spent
          my free time practicing and gaining proficiency in web development to
          better myself as a developer and problem solver. I like to learn from
          doing some projects because I think the best learning is practical
          rather than theoretical.
          <br />
          <br />
          I am always experimenting, always learning, and never bored.
          <br />
          <br />
        </p>
        <Skill>
          <h2>Skill</h2>
          <b>Frontend</b>
          <div>HTML, CSS, JavaScript, ReactJS</div>
          <b>Backend</b>
          <div>Go, NodeJS, Express</div>
          <b>Others</b>
          <div>C, Java, Python</div>
        </Skill>
      </Article>
    </Container>
  );
};

const Container = styled.section`
  min-height: 100vh;
  padding-top: 40px;

  color: white;
  font-family: "Spartan", sans-serif;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Header = styled.header`
  display: flex;

  h1:nth-child(1) {
    color: white;
  }
  h1:nth-child(2) {
    color: ${(props) => props.theme.main};
  }
`;

const Article = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 1rem;
  line-height: 2rem;
  font-family: inherit;

  @media screen and (max-width: 30em) {
    width: calc(100% - 100px);
  }
  @media screen and (min-width: 30em) {
    width: calc(100% - 140px);
  }
  @media screen and (min-width: 48em) {
    width: 50%;
    max-width: 600px;
  }
`;

const Skill = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    margin: 0;
    align-self: center;
  }
`;
