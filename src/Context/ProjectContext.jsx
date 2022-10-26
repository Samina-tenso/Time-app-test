
import { createContext, useEffect, useReducer } from "react";
import { projectReducer, initialState } from "../Reducers/projectReducer";
import axios from "axios";
export const ProjectContext = createContext()

export const ProjectProvider = ({ children }) => {
    const [state, dispatch] = useReducer(projectReducer, initialState)
    console.log('projectcontext state:', state)
    useEffect(() => {
        async function getProjects() {
            try {
                let response = await axios.get("http://localhost:3000/projects")
                if (response.status == 200) {
                    dispatch({
                        type: "FETCH_PROJECTS", payload: response.data
                    })
                    return
                }
            } catch (error) {
                console.log(error.message)
            }
        }
        getProjects()

    }, [])

    return (
        <ProjectContext.Provider value={{ state, dispatch }}>
            {children}
        </ProjectContext.Provider>
    )
}
