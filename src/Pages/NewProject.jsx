import { Form } from "react-router-dom"
import { useAddProject } from "../Hooks/addProject"
import React from "react"
import { useState } from "react"

//add projects to database
//remove projects from database 
//create a context for the project
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

        <Form className="justify-center  space-y-4 m-10 flex flex-col flex-wrap">
            <h2 className="text-sm text-slate-50">Name your new project</h2>
            <input className=" border p-3 pl-6 rounded-full" type="text" placeholder="project name" value={title} onChange={(e) => handleChange(e)} required />
            <button className=" p-6 hover:bg-slate-600 text-slate-50" type="submit" onClick={handleSubmit}>Add Project</button>

        </Form>
    )
}
export default NewProject