import { createContext, useReducer } from "react";
import { selectedTaskReducer, initialState } from "../Reducers/selectedTaskReducer";

export const SelectedTaskContext = createContext()

export const SelectedTaskProvider = ({ children }) => {
    const [stateSelectedTask, dispatchSelectedTask] = useReducer(selectedTaskReducer, initialState)
    console.log('selectedTaskcontext state:', stateSelectedTask)
    return (
        <SelectedTaskContext.Provider value={{ stateSelectedTask, dispatchSelectedTask }}>
            {children}
        </SelectedTaskContext.Provider>
    )
}