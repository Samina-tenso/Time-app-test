import axios from "axios"
import { TaskContext } from "../Context/TaskContext"
import { useContext, useState } from "react"

export const useGetTasks = () => {
    const { stateTask, dispatchTask } = useContext(TaskContext)
    async function getTasks() {

        try {
            let response = await axios.get("http://localhost:3001/tasks")
            if (response.status == 200) {
                dispatchTask({
                    type: "FETCH_TASKS", payload: response.data
                })
            }
        } catch (error) {
            console.log(error.message)
        }
    }
    return { getTasks }
}

