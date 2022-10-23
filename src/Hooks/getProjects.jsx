import axios from "axios"
import { ProjectContext } from "../Context/ProjectContext"
import { useContext, useState } from "react"

export const useGetProjects = () => {
    const { state, dispatch } = useContext(ProjectContext)
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
    return { getProjects }
}

