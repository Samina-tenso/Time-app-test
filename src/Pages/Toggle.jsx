import React, { useState } from 'react'
import '../Styles/toggle.css'
import Projects from './Projects'
import AllTasks from './AllTasks'
function Toggle() {
    const [isOpen, setIsOpen] = useState(true)
    const [selected, setSelected] = useState("projects")

    const handleToggle = () => {
        setSelected("projects")
        setIsOpen(true)
    }
    const handleBoggle = () => {
        setSelected("tasks")
        setIsOpen(false)
    }
    return (
        <div >
            <div className="toggle-container ">
                <button onClick={handleToggle} className="toggle-button"> Projects</button>
                <button onClick={handleBoggle} className="toggle-button"> All tasks</button>
            </div>
            {isOpen ? (<Projects />) : (<AllTasks />)}
        </div >
    )
}

export default Toggle