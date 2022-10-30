import React from 'react'
import { TaskContext } from "../Context/TaskContext"
import { useContext, useState } from "react"
import axios from "axios"

export const useAddTime = () => {
    const [error, setError] = useState(null)
    const { stateTask, dispatchTask } = useContext(TaskContext)

    // post med dispatch
    async function addTime(count, selectedId) {
        setError(null)
        try {
            const response = await axios.patch(`http://localhost:3000/tasks/${selectedId}`, {
                time: count
            })
            dispatchTask({
                type: "ADD_TIME",
                payload: {
                    id: response.data.id,
                    title: response.data.title,
                    projectId: response.data.projectId,
                    projectTitle: response.data.projectTitle,
                    time: response.data.time,
                }
            })

            return
        } catch (error) {
            console.log(error.message)
        }
    }
    return { addTime, error }
}

