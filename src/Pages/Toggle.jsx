import React, { useState } from 'react'
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
        <div className="text-slate-50 text-xl ">
            <div className='p-4'>
                <button onClick={handleToggle} className={`p-4 ${selected == "projects" ? "bg-slate-600" : "bg-slate-900"}`}> Projects</button>

                <button onClick={handleBoggle} className={` p-4 ${selected == "tasks" ? "bg-slate-600" : "bg-slate-900"}`}> All tasks</button>
            </div>
            {isOpen ? (<Projects />) : (<AllTasks />)}

        </div >
    )
}

export default Toggle