import React, { useContext, useEffect, useRef } from "react";
import Project from "./Project";
import styled from "styled-components";
import { Container, Header } from "./styled";
import { ThemeContext } from "../context/Theme";
import { projects } from "../mockup/project.jsx";
import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/all";

export const Projects = () => {
  const theme = useContext(ThemeContext);

  const fadeRef = useRef(null);
  if (typeof window !== `undefined`) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.core.globals("ScrollTrigger", ScrollTrigger);
  }

  useEffect(() => {
    gsap.from(fadeRef.current, {
      scrollTrigger: fadeRef.current,
      opacity: 0,
      duration: 1.5,
    });
  }, []);

  return (
    <Container id="projects" style={{ marginBottom: 40 }}>
      <Header theme={theme} ref={fadeRef}>
        <h1>Some&nbsp;</h1>
        <h1>Projects.</h1>
      </Header>
      <ProjectGroup id="project-group">
        {projects.map((project, index) => {
          return <Project key={`project-preview-${index}`} project={project} />;
        })}
      </ProjectGroup>
    </Container>
  );
};

const ProjectGroup = styled.div`
  margin: 1rem 0;
  gap: 25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (max-width: 30em) {
    max-width: 70%;
  }
  @media screen and (min-width: 30em) {
    max-width: 80%;
  }
  @media screen and (min-width: 48em) {
    max-width: 85%;
  }
  @media screen and (min-width: 64em) {
    width: 75%;
    max-width: 1200px;
  }
`;
