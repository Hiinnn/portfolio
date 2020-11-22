import React from 'react'
import styled, { keyframes } from 'styled-components'


export default function LogoAnimation(props) {
    const timeOffeset = 0.5
    return (
        <Container top={props.top}>
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 190.67 63.92" style={{ width: '30em', maxWidth: '40%' }}>
                <Path id="P" transform="translate(3, -95.57)"
                    d="M27.14,113.85S23.3,149,20.06,151.38,9.14,149.2,6.49,137.59s2.43-34.54,20.65-37.83,20.57,5.74,20.57,10.17-.52,12.56-9.39,16.46-16.52,3.28-19.83,1.28" />
                <Path id="h" transform="translate(-3.34 -90.57)" style={{ animationDelay: `${timeOffeset}s` }}
                    d="M58.84,125.12s9.39-3.94,14.6-17,1.3-13.89-2-15c-6.34-1.82-12.6,20.61-12.6,20.61s-6,34.08-1.83,31.31,8.71-18.55,16.43-21.88-5.92,19,1,21.88c5,1.76,11.87-7.44,11.18-6.36" />
                <Path id="a" transform="translate(-3.34 -90.57)" style={{ animationDelay: `${timeOffeset * 2}s` }}
                    d="M85.72,137.65s-1.28-4,3.32-9.93,9.78-6.45,9.78-6.45c1.86-.19,1.65.37,1.71.83-1.6,2.46-5.17,2.4-7.68,3.32,0,0-2.26,1.42-4.36,6s-1.56,2.4-1.8,5.28a12.86,12.86,0,0,0,.88,6.26c.64,1.72.78,2.11,1.71,2.74s2,1,4.36.64,7.25-7.78,8.6-11.69a41.57,41.57,0,0,0,2.21-8.76c-.07-.74.44-2.25-.25-2.69s-1.37-.08-2,.93-.61,6.06-.63,6.8a40.45,40.45,0,0,0,.16,7.64,18.87,18.87,0,0,0,1.8,6,3.53,3.53,0,0,0,3.22,1.17c1.32-.09,3.87-2.39,3.87-2.39l4.79-4.94" />
                <Path id="n" transform="translate(-3.34 -90.57)" style={{ animationDelay: `${timeOffeset * 3}s` }}
                    d="M119.87,121.8a38.1,38.1,0,0,0-3.72,13.31c-.72,7.76-.52,10.56,1.3,10.56s1.44-6.52,5.35-14,9.07-9.85,11.35-8-.06,4.3-.91,7.17-.63,1.9-1.25,6.76c-.23,6.44-.53,6.49,1.58,7.75,2.44,1.46,7.23-1.84,10-4.53,3.08-3,6.89-9.63,6.89-9.63" />
                <Path id="s" transform="translate(-3.34 -90.57)" style={{ animationDelay: `${timeOffeset * 4}s` }}
                    d="M150.72,130.66c2.25-4.36,6.31-6.56,7.48-8.86s-4.13-.62-5.11,2,.79,6.8,2,8,4.5,4.8,5,6.07,1.47,3.08.83,4.74-2.22,4.58-4.3,5.38-4.16.88-5.68-.93-.53-2.75.44-3.76,4.7.24,6.21.75,3.28,1.94,5.29,1.64c1-.14,3.77-2.1,4.47-2.65a35.51,35.51,0,0,0,3.12-2.65" />
                <Path id="a-2" data-name="a" transform="translate(-3.34 -90.57)" style={{ animationDelay: `${timeOffeset * 5}s` }}
                    d="M170.89,137.77s-1.29-4,3.31-9.93,9.79-6.46,9.79-6.46c1.85-.19,1.64.37,1.71.83-1.61,2.46-5.18,2.41-7.68,3.33,0,0-2.27,1.42-4.36,6s-1.56,2.39-1.81,5.28a12.85,12.85,0,0,0,.89,6.26c.63,1.71.78,2.1,1.71,2.74s2,1,4.35.64,7.26-7.78,8.61-11.69a41.59,41.59,0,0,0,2.2-8.76c-.07-.74.44-2.25-.24-2.69s-1.37-.09-2,.93-.62,6.06-.64,6.8a40.45,40.45,0,0,0,.16,7.64,18.87,18.87,0,0,0,1.8,6,3.57,3.57,0,0,0,3.23,1.17" />
            </svg>
            <div style={{ color: "white", fontWeight: 700, fontSize: "2em" }}>
                I want to be Web Developer
            </div>
        </Container >
    )
}

const Container = styled.div`
    max-width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #2D2D2A;
    transform: ${props => props.top > window.innerHeight ? `translateX(${window.innerWidth}px)` : 0};
`

const dash = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`
const Path = styled.path`
    width: 10px;
    height: 10px;

    fill: none;
    stroke: white;
    stroke-width: 5px;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: ${dash} 3s  forwards;
`
