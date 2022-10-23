import { createContext, useReducer } from "react";
import { projectReducer, initialState } from "../Reducers/projectReducer";

export const ProjectContext = createContext()

export const ProjectProvider = ({ children }) => {
    const [state, dispatch] = useReducer(projectReducer, initialState)
    console.log('projectcontext state:', state)
    return (
        <ProjectContext.Provider value={{ state, dispatch }}>
            {children}
        </ProjectContext.Provider>
    )
}
