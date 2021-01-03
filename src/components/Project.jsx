import React, { useContext, useRef } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/Theme";
import { useModal, Modal } from "react-morphing-modal";
import "react-morphing-modal/dist/ReactMorphingModal.css";

export default function Project(props) {
  const theme = useContext(ThemeContext);
  const triggerRef = useRef(null);
  const { modalProps, open } = useModal();
  const handleTrigger = () => open(triggerRef);
  const handleLink = () => window.open(props.project.url);

  return (
    <Container>
      <ProjectPreview theme={theme}>
        <img
          className="cover-img"
          src={props.project.img}
          alt={`${props.project.name}-cover`}
        />
        <div className="project-name">{props.project.name}</div>
        <div className="project-overlay">
          <Bt
            theme={theme}
            id="learn-more"
            ref={triggerRef}
            onClick={handleTrigger}
          >
            Learn More
          </Bt>
        </div>
      </ProjectPreview>
      <Modal {...modalProps}>
        <ProjectFull theme={theme}>
          <h1>{props.project.name}</h1>
          <div className="description">
            <p>
              {props.project.description}
              <br />
              <br />
              {props.project.tech}
            </p>
            <Bt theme={theme} onClick={handleLink}>
              Visit Site
            </Bt>
          </div>
          <img
            className="project-image"
            alt={`${props.project.name}-full`}
            src={props.project.img}
          />
        </ProjectFull>
      </Modal>
    </Container>
  );
}

const Container = styled.article`
  height: 275px;
  min-width: 250px;

  flex: 1;
  display: flex;
  flex-direction: column;

  position: relative;
  .RMM__close-button {
    width: 36px;
    height: 36px;
  }

  .RMM__body {
    background-color: #e8e8e8;
  }
`;

const ProjectPreview = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: ${(props) => props.theme.sub};

  gap: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  .cover-img {
    width: 90%;
    height: 75%;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.25);
  }

  .project-name {
    font-weight: 600;
    font-size: 1.2rem;
    color: ${(props) => props.theme.bg_body};
  }

  .project-overlay {
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;

    opacity: 0;
    z-index: 2;

    cursor: pointer;
    overflow: hidden;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(37, 37, 37, 0.55);
    transition: opacity 0.475s cubic-bezier(1, 0, 0, 1);

    :hover {
      opacity: 1;
    }
  }
`;

const ProjectFull = styled.div`
  width: 100%;
  min-height: 100%;

  color: ${(props) => props.theme.bg_nav};
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    font-weight: 700;
  }

  .description {
    max-width: 80%;
    position: relative;

    p {
      font-size: 1.2rem;
    }

    button {
      color: ${(props) => props.theme.bg_nav};
      :hover {
        color: ${(props) => props.theme.bg_nav};
        border: 2px solid ${(props) => props.theme.main};
        background-color: ${(props) => props.theme.main};
      }
    }
  }

  .project-image {
    width: calc(80% - 48px);
    padding: 24px;
    margin-top: 20px;
    object-fit: cover;

    border-radius: 8px;
    background-color: white;
  }

  padding-bottom: 150px;
`;

const Bt = styled.button`
  color: white;
  font-size: 1rem;
  font-weight: 600;
  font-family: inherit;

  outline: none;
  padding: 12px;
  cursor: pointer;
  border-radius: 3px;

  transition: ease 0.55s;
  background-color: transparent;
  border: 2px solid ${(props) => props.theme.main};

  :hover {
    border: 2px solid white;
    background-color: white;
    color: ${(props) => props.theme.bg_body};
  }
`;
