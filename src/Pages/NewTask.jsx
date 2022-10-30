import React from 'react'
import { Form, useParams } from 'react-router-dom'
import { useState, useContext } from 'react'
import { ProjectContext } from '../Context/ProjectContext'
import { useAddTask } from '../Hooks/addTask'
import { Dropdown } from 'flowbite-react'
import { DropdownItem } from 'flowbite-react/lib/esm/components/Dropdown/DropdownItem'

function NewTask() {
    const { state, dispatch } = useContext(ProjectContext)

    const { addTask, error } = useAddTask()
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
    }
    const chooseProject = (id, title) => {
        task.projectId = id
        task.projectTitle = title
        setTask({ ...task })
    }
    return (
        <Form className="form">
            <input type='text' placeholder='task name' value={task.title} onChange={(e) => handleChange(e)} required />
            <h2> Choose project </h2>
            <Dropdown lable="Dropdown">
                {
                    state.projects.map(project => {
                        return <DropdownItem onClick={() => chooseProject(project.id, project.title)}>
                            {project.title}
                        </DropdownItem>
                    })
                }
            </Dropdown>
            <button type="submit" onClick={handleSubmit}>Add Task</button>
        </Form>
    )
}

export default NewTask