import React from 'react'
import { Form } from 'react-router-dom';
import { useAddProject } from '../../Hooks/addProject';
import { useState } from 'react'

export function NewProject() {
    const { addProject } = useAddProject()
    const [title, setTitle] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        await addProject(title)
        setTitle('')
    }
    const handleChange = (e) => {
        e.preventDefault()
        setTitle(e.target.value)
    }
    return (
        <Form className="form flex flex-col m-10 space-y-4 ">
            <h2>Name your new project</h2>
            <input type="text" placeholder="project name" className="rounded-full text-slate-900  p-2 " value={title} onChange={(e) => handleChange(e)} required />
            <button type="submit" className="bg-slate-900 p-6  hover:bg-slate-600 active:text-slate-900" onClick={handleSubmit}>Add Project</button>
        </Form>
    )
}