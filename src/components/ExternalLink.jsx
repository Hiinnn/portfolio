import React, { useContext } from "react";
import styled from "styled-components";
import { Linkedin, Facebook, Github } from "@styled-icons/bootstrap";
import { Email } from "@styled-icons/entypo";
import { ThemeContext } from "../context/Theme";

export const ExternalLink = () => {
  const theme = useContext(ThemeContext);
  return (
    <Container id="external-link" theme={theme}>
      {/* <a href="">
        <Email size="30" color={theme.main} />
      </a> */}
      <a href="https://github.com/hinphansa" target="_blank" rel="noreferrer">
        <Github size="30" color={theme.main} />
      </a>
      <a
        href="https://www.facebook.com/gurock.hin/"
        target="_blank"
        rel="noreferrer"
      >
        <Facebook size="30" color={theme.main} />
      </a>
      <a
        href="https://linkedin.com/in/phansa-boonthaweekhunsawat"
        target="_blank"
        rel="noreferrer"
      >
        <Linkedin size="30" color={theme.main} />
      </a>
    </Container>
  );
};

const Container = styled.div`
  top: 0px;
  right: 0px;
  position: fixed;
  border-radius: 0px 0px 0px 5px;

  gap: 10px;
  z-index: 10;
  display: flex;
  padding: 10px;

  @media screen and (max-width: 30em) {
    background-color: ${(props) => props.theme.bg_nav};
  }
  @media screen and (min-width: 30em) {
    background-color: ${(props) => props.theme.bg_nav};
  }
  @media screen and (min-width: 48em) {
  }
  @media screen and (min-width: 64em) {
    background-color: transparent;
  }
`;
