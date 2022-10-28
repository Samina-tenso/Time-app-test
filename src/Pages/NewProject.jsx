import { Form } from "react-router-dom"
import { useAddProject } from "../Hooks/addProject"
import React from "react"
import { useState } from "react"

function NewProject() {
    const { addProject, error } = useAddProject()
    const [title, setTitle] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        await addProject(title)
    }
    const handleChange = (e) => {
        e.preventDefault()
        setTitle(e.target.value)
    }
    return (
        <Form className="form">
            <h2>Name your new project</h2>
            <input type="text" placeholder="project name" value={title} onChange={(e) => handleChange(e)} required />
            <button type="submit" onClick={handleSubmit}>Add Project</button>
        </Form>
    )
}
export default NewProject