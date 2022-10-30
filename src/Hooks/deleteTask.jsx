import { TaskContext } from "../Context/TaskContext"
import { useContext, useState } from "react"
import axios from "axios"

export const useDeleteTask = () => {
    const [error, setError] = useState(null)
    const { stateTask, dispatchTask } = useContext(TaskContext)

    async function deleteTask(id) {
        console.log(id)
        setError(null)
        try {
            const response = await axios.delete(`http://localhost:3000/tasks/${id}`)
            if (response.status == 200) {
                dispatchTask({
                    type: "DELETE_TASK",
                    payload: {
                        id: id,
                    }
                })
                return true
            } else {
                console.log(error.message)
            }
        } catch (error) {
            console.log(error.message)
        }
    }
    return { deleteTask, error }
}

