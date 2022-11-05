

import axios from "axios"
import { TaskContext } from "../Context/TaskContext"
import { useContext, useState } from "react"

export const useGetByDate = () => {
    const { stateTask, dispatchTask } = useContext(TaskContext)

    async function getByDate(currentDate) {
        //console.log(currentDate)
        try {
            let response = await axios.get(`http://localhost:3000/tasks?day_like=${currentDate}`)
            console.log(response)
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
    return { getByDate }
}


