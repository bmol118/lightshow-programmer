import { MouseInputEvent } from "electron";
import React, { MouseEventHandler, useCallback } from "react"
import { useEffect, useState } from "react"
import "./style.css"

// Based on a stack overflow answer by Jared Forsyth - https://stackoverflow.com/questions/20926551/recommended-way-of-making-react-component-div-draggable
// Updated to a functional react component by me.
const Dragable = () => {
    const [position, setPosition] = useState({x: 0, y: 0})
    const [localPosition, setLocalPosition] = useState({x: 0, y: 0});
    const [isDragging, setIsDragging] = useState(false)
    const [rel, setRel] = useState(null) // Position relative to the cursor

    const toggleDragging = (event: any) => {
        
        setIsDragging(!isDragging)

        if(isDragging){
            console.log("Now Dragging!")
            window.addEventListener('mousemove', handleWindowMouseMove)
        }
        else {
            console.log("No longer dragging")
            window.removeEventListener(
                'mousemove',
                handleWindowMouseMove,
              );
        }
    }

    const handleWindowMouseMove = useCallback((event: MouseEvent) => {
        console.log("Handle Mouse move was called")
        setPosition({
            x: event.clientX,
            y: event.clientY,
            });
      }, [])


    // useEffect(() => {
    //     window.addEventListener('mousemove', handleWindowMouseMove);

    //     // Runs when the component unmounts to prevent memory leaks from a hanging event listener.
    //     return () => {
    //         window.removeEventListener(
    //           'mousemove',
    //           handleWindowMouseMove,
    //         );
    //     };

    // }, [])

    return (
    <div className="unselectable"
        style={
            {
                "left": position.x + "px" ,
                "top":  position.y + "px",
                "position": "absolute"
            }
        }
        onClick={toggleDragging}
    >
        ({position.x}, {position.y})
    </div>
    )
}

export { Dragable }