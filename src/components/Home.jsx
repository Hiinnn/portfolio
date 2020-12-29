import React from "react";
import Logo from "./Logo";
import styled from "styled-components";
import useScroll from "../hooks/useScroll";

export default function Home() {
  const scrollPosition = useScroll();

  return (
    <Container top={scrollPosition}>
      <Logo />
      <div style={{ color: "#9DA2AB", fontWeight: 700, fontSize: "1.7em" }}>
        I'm Frontend Developer
      </div>
    </Container>
  );
}

const Container = styled.div`
  max-width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.bg};
  /* transform: ${(props) =>
    props.top > window.innerHeight
      ? `translateX(${window.innerWidth}px)`
      : 0}; */
`;
