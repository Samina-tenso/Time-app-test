import axios from "axios"
import { useContext, useState } from "react"
import { SelectedProjectContext } from "../Context/SelectedProjectContext";

export const useGetSelectedProject = () => {
    const { stateSelectedProject, dispatchSelectedProject } = useContext(SelectedProjectContext)

    async function getSelectedProject(id) {
        console.log(id)
        try {
            let response = await axios.get(`http://localhost:3000/projects?id_like=${id}`)

            if (response.status == 200) {
                console.log(response.data)
                dispatchSelectedProject({
                    type: "SELECTED_PROJECT", payload: response.data
                })
            }
        } catch (error) {
            console.log(error.message)
        }
    }
    return { getSelectedProject }
}

