import React from "react";
import styled from "styled-components";

export const Footer = () => {
  return (
    <Container id="footer">
      <div>©2021 Phansa Boonthaweekhunsawat</div>
    </Container>
  );
};

const Container = styled.footer`
  width: 100%;
  height: 120px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #e8e8e8;

  div {
    opacity: 0.5;
    font-size: 1rem;
    color: #252525;
    text-align: center;
    font-family: "Spartan", sans-serif;
  }
`;
