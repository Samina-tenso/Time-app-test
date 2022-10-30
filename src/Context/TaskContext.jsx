import { useEffect } from "react";
import { createContext, useReducer } from "react";
import { taskReducer, initialState } from "../Reducers/taskReducer";
import axios from "axios";

export const TaskContext = createContext()

export const TaskProvider = ({ children }) => {
    const [stateTask, dispatchTask] = useReducer(taskReducer, initialState)
    console.log('taskcontext state:', stateTask)
    useEffect(() => {
        async function getAllTasks() {
            try {
                let response = await axios.get("http://localhost:3000/tasks")
                if (response.status == 200) {
                    console.log(response.data)
                    dispatchTask({
                        type: "FETCH_TASKS", payload: response.data
                    })
                    return
                }
            } catch (error) {
                console.log(error.message)
            }
        }
        getAllTasks()

    }, [])
    return (
        <TaskContext.Provider value={{ stateTask, dispatchTask }}>
            {children}
        </TaskContext.Provider>
    )
}
