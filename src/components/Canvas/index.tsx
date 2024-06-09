import React from "react"
import { useState, useCallback, useEffect } from "react"
import { Dragable } from "../Dragable"


// This will be the container class that you can move around your LightStrips in. 
const Canvas = () => {
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0})

    const handleWindowMouseMove = useCallback((event: MouseEvent) => {
        setMousePosition({
            x: event.clientX,
            y: event.clientY,
            });
    }, [])

    useEffect(() => {
        window.addEventListener('mousemove', handleWindowMouseMove);

        // Runs when the component unmounts to prevent memory leaks from a hanging event listener.
        return () => {
            window.removeEventListener(
              'mousemove',
              handleWindowMouseMove,
            );
        };

    }, [])



    return (<>
    
        <Dragable startPosition={{x: 2 , y: 4}} mousePosition={{x: mousePosition.x, y: mousePosition.y}}></Dragable>
        <Dragable startPosition={{x: 300 , y: 50}} mousePosition={{x: mousePosition.x, y: mousePosition.y}}></Dragable>

    </>)
}

export { Canvas }
