import { Canvas } from "../Canvas/canvas"
import { useState } from "react"
import { Dragable, DragableProps } from "../Dragable/dragable"

export const ProjectEditor = () => {
    const [components, setComponents] = useState<DragableProps[]>([])

    const addComponent = () => {
        setComponents(components.concat(
            {startPosition: {x: 0, y:0}}
        ))
        console.log(components)
    }

    return (
        <>
            <button onClick={addComponent}>Add component</button>
            <Canvas renderedComponents={components}/>
        </>
    )
}