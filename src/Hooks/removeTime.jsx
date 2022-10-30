import React from 'react'
import { TaskContext } from "../Context/TaskContext"
import { useContext, useState } from "react"
import axios from "axios"

export const useRemoveTime = () => {
    const { stateTask, dispatchTask } = useContext(TaskContext)
    async function removeTime(id) {
        try {
            const response = await axios.patch(`http://localhost:3000/tasks/${id}`, {
                time: ''
            })
            console.log("removed")
            dispatchTask({
                type: "REMOVE_TIME",
                payload: {
                    id: response.data.id,
                    title: response.data.title,
                    projectId: response.data.projectId,
                    projectTitle: response.data.projectTitle,
                    time: ''

                }
            })
            console.log(response.data)
            return
        } catch (error) {
            console.log(error.message)
        }
    }
    return { removeTime }
}

