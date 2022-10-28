import React from 'react'
import { TaskContext } from "../Context/TaskContext"
import { useContext, useState } from "react"
import axios from "axios"
import { v4 as uuidv4 } from 'uuid'
import { formatISO } from 'date-fns'


export const useAddTask = () => {
    const [error, setError] = useState(null)
    const { stateTask, dispatchTask } = useContext(TaskContext)
    // post med dispatch
    async function addTask({ title, projectId, projectTitle }) {
        console.log(projectId, title)
        setError(null)
        try {
            const response = await axios.post("http://localhost:3000/tasks", {
                id: uuidv4(),
                title: title,
                projectId: projectId,
                projectTitle: projectTitle,
                day: formatISO(new Date(), { representation: 'date' })

            })
            dispatchTask({
                type: "ADD_TASK",
                payload: {
                    id: response.data.uuid,
                    title: response.data.title,
                    projectId: response.data.projectId,
                    projectTitle: response.data.projectTitle,
                    day: response.data.day

                }
            })
            console.log(response.data.title)
            return
        } catch (error) {
            console.log(error)
        }

    }
    return { addTask, error }
}

