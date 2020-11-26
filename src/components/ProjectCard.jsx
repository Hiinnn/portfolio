import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

export default function ProjectCard(props) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  return (
    <div style={{ width: 100, height: 100 }}>
      <ReactCardFlip
        isFlipped={isFlipped}
        flipDirection="horizontal"
      ></ReactCardFlip>
    </div>
  );
}
