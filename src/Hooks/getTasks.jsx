import axios from "axios"
import { TaskContext } from "../Context/TaskContext"
import { useContext, useState } from "react"
import { SelectedProjectContext } from "../Context/SelectedProjectContext"

export const useGetTasks = () => {
    const { stateTask, dispatchTask } = useContext(TaskContext)
    async function getTasks(selectedId) {
        console.log(selectedId)

        try {
            let response = await axios.get(`http://localhost:3000/tasks?projectId_like=${selectedId}`)
            if (response.status == 200) {
                dispatchTask({
                    type: "FETCH_TASKS", payload: response.data
                })
                return
            }
        } catch (error) {
            console.log(error.message)
        }
    }
    return { getTasks }
}

