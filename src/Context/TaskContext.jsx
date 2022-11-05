import { useEffect } from "react";
import { createContext, useReducer } from "react";
import { taskReducer, initialState } from "../Reducers/taskReducer";
import axios from "axios";

export const TaskContext = createContext()

export const TaskProvider = ({ children }) => {
    const [stateTask, dispatchTask] = useReducer(taskReducer, initialState)
    console.log('taskcontext state:', stateTask)

    return (
        <TaskContext.Provider value={{ stateTask, dispatchTask }}>
            {children}
        </TaskContext.Provider>
    )
}
