import React, { useState } from 'react'
import { Projects } from '../Projects'
import { AllTasks } from '../AllTasks'

export function Toggle() {
    const [isOpen, setIsOpen] = useState(true)
    const [selected, setSelected] = useState("projects")

    const handleToggleProject = () => {
        setSelected("projects")
        setIsOpen(true)
    }
    const handleToggleTasks = () => {
        setSelected("tasks")
        setIsOpen(false)
    }
    return (
        <div >
            <div className="m-6">
                <button onClick={handleToggleProject} name="projects" data-testid="toggle-projects" className={`p-4 ${selected == "projects" ? "bg-slate-600" : "bg-slate-900"}`}> Projects</button>
                <button onClick={handleToggleTasks} name="tasks" data-testid="toggle-tasks" className={`p-4 ${selected == "tasks" ? "bg-slate-600" : "bg-slate-900"}`}> All tasks</button>
            </div>
            {isOpen ? (<Projects />) : (<AllTasks />)}
        </div >
    )
}
