import React from 'react';
import { Form } from 'react-router-dom';
import { useState, useContext } from 'react';
import { ProjectContext } from '../../Context/ProjectContext';
import { useAddTask } from '../../Hooks/addTask';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

export function NewTask() {
    const { state } = useContext(ProjectContext)
    const [isOpen, setIsOpen] = useState(false)
    const { addTask } = useAddTask()
    const [task, setTask] = useState({
        title: '',
        id: '',
        projectId: '',
        projectTitle: '',
        day: '',
        time: '',
    })
    const handleChange = (e) => {
        e.preventDefault()
        task.title = e.target.value
        setTask({ ...task })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        await addTask(task)
        task.title = ('')
        task.projectTitle = ('')
    }
    const chooseProject = (id, title) => {
        task.projectId = id
        task.projectTitle = title
        setTask({ ...task })
    }
    const handleDropDown = () => {
        console.log(isOpen)
        if (!isOpen) {
            setIsOpen(true)
            return
        }
        if (isOpen) {
            setIsOpen(false)
            return
        }
    }

    return (
        <Form className="form form flex flex-col m-10 space-y-4">
            <h2> Name your new task </h2>
            <input type="text" placeholder='task name' className="rounded-full text-slate-900 p-2" value={task.title} onChange={(e) => handleChange(e)} required />
            <div className="flex justify-around ">
                {
                    task.projectId ? task.projectTitle : <label >Choose project </label>
                }
                <button className=" w-10   h-8 bg-slate-900 hover:bg-slate-600" onClick={handleDropDown} > <ChevronDownIcon className=" inline w-4" /> </button>
            </div>
            {
                isOpen ? (
                    <div className=" bg-slate-50 inline hover:m-0 place-items-center text-slate-900">
                        {
                            state.projects.map(project => {
                                return <div className=" block p-1 border-none hover:bg-slate-600 hover:text-slate-50" value={project.title} onClick={(e) => { chooseProject(project.id, project.title); handleDropDown(e) }}>
                                    {project.title}
                                </div>
                            })
                        }
                    </div>
                ) : null
            }
            <button type="submit" className="bg-slate-900 p-6  hover:bg-slate-600 active:text-slate-900" onClick={handleSubmit}>Add Task</button>
        </Form >
    )
}