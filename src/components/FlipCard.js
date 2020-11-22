import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip'

export default function ProjectCard(props) {
    const [isFlipped, setIsFlipped] = useState(false)

    const handleFlip = (e) => {
        e.preventDefault();
        setIsFlipped(!isFlipped);
    }

    return (
        <div style={{ width: 100, height: 100 }}>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                <div style={{ width: 100, height: 100, backgroundColor: 'pink' }}>
                    <div>
                        eiei2
                </div>
                    <button onClick={handleFlip}>eiei2</button>
                </div>

                <div style={{ width: 100, height: 100, backgroundColor: 'red' }}>
                    eiei2
                <button onClick={handleFlip}>eiei2</button>
                </div>
            </ReactCardFlip>
        </div>
    )
}
