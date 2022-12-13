import { ProjectContext } from "../Context/ProjectContext"
import { useContext, useState } from "react"
import axios from "axios"
import { v4 as uuidv4 } from 'uuid'


export const useAddProject = () => {
    const { state, dispatch } = useContext(ProjectContext)
    // post med dispatch
    async function addProject(title) {
        try {
            const response = await axios.post("http://localhost:3000/projects", {
                id: uuidv4(),
                title: title
            })
            dispatch({
                type: "ADD_PROJECT",
                payload: {
                    id: response.data.id,
                    title: response.data.title
                }
            })
            return
        } catch (error) {
            console.log(error.message)
        }
    }
    return { addProject }
}

