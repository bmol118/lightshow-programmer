import { MouseInputEvent } from "electron";
import React, { MouseEventHandler, useCallback } from "react"
import { useEffect, useState } from "react"
import "./style.css"


export interface DragableProps {
    startPosition?: {
        x: number,
        y: number,
    },
    mousePosition?: {
        x: number,
        y: number,
    },
    isLocked?: boolean
}



// Based on a stack overflow answer by Jared Forsyth - https://stackoverflow.com/questions/20926551/recommended-way-of-making-react-component-div-draggable
// Updated to a functional react component by me.
const Dragable = (props: DragableProps) => {
    
    // todo: find a way to add an offset to the position so we can drag from different parts of the component
    const [position, setPosition] = useState(props.startPosition)
    const [isDragging, setIsDragging] = useState(false)
    const [isLocked, setIsLocked] = useState(props.isLocked ?? false) // Once the layout is set, we should "Lock" the component to its current location, once this is set we can do other operations on the component.

    const toggleDragging = (e: React.MouseEvent<Element, MouseEvent>) => {
        console.log(e)
        setIsDragging(!isDragging)
    }

    useEffect(() => {
        if(isDragging){
            setPosition(props.mousePosition)
        }
    }, [props.mousePosition])

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