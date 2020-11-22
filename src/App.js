import React, { useEffect } from 'react';
import useScroll from './hooks/useScroll';
import ProjectCard from './components/FlipCard';
import LogoAnimation from './components/LogoAnimation';

export default function App() {
  const scrollPosition = useScroll()

  console.log(scrollPosition)

  return (
    <>
      <LogoAnimation top={scrollPosition} />
      <div style={{ width: '100%', height: 1920, background: 'wheat' }}>
        <ProjectCard />
      </div>
    </>
  )
}