import React from 'react'
import { Form, useParams } from 'react-router-dom'
import { useState, useContext } from 'react'
import { SelectedProjectContext } from '../Context/SelectedProjectContext'
import { useAddTask } from '../Hooks/addTask'

function NewTask() {
    const { stateSelected, dispatchSelected } = useContext(SelectedProjectContext)
    const { id } = useParams()
    const { addTask, error } = useAddTask()
    const [task, setTask] = useState({
        title: '',
        uuid: '',
        projectId: id,
        projectTitle: stateSelected.selected.projectTitle,
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
    return (
        <Form className="form">
            <input type='text' placeholder='task name' value={task.title} onChange={(e) => handleChange(e)} required />
            <button type="submit" onClick={handleSubmit}>Add Task</button>
        </Form>
    )
}

export default NewTask