import React, { Component } from "react"
import { useState, useCallback, useEffect } from "react"
import { Dragable, DragableProps } from "../Dragable/dragable"

interface CanvasProps {
    renderedComponents?: DragableProps[]
}


// This will be the container class that you can move around your LightStrips in. 
const Canvas = (props: CanvasProps) => {
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0})
    // useCallback ensures that the same "handleWindowMouseMove" is referenced when both adding, and removing the event listener.
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
        {
            props.renderedComponents.map(c => {
                console.log("state did change")
                return (<Dragable startPosition={c.startPosition} mousePosition={mousePosition} />)
            })
        }
    </>)
}

export { Canvas }
