import { createContext, useEffect, useReducer } from "react";
import { selectedProjectReducer, initialState } from "../Reducers/selectedProjectReducer";

export const SelectedProjectContext = createContext()

export const SelectedProjectProvider = ({ children }) => {
    const [stateSelectedProject, dispatchSelectedProject] = useReducer(selectedProjectReducer, initialState)
    console.log('selectedcontext state:', stateSelectedProject)

    return (
        <SelectedProjectContext.Provider value={{ stateSelectedProject, dispatchSelectedProject }}>
            {children}
        </SelectedProjectContext.Provider>
    )
}