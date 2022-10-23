
import { ProjectContext } from "../Context/ProjectContext"
import { useContext, useState } from "react"
import axios from "axios"

export const useDeleteProject = () => {
    const [error, setError] = useState(null)
    const { state, dispatch } = useContext(ProjectContext)
    // post med dispatch

    async function deleteProject(id) {
        console.log(id)
        setError(null)
        try {
            const response = await axios.delete(`http://localhost:3000/projects/${id}`)

            console.log(response.data)
            dispatch({
                type: "DELETED_PROJECT",
                payload: {
                    uuid: response.data.uuid,

                }


            })
            console.log(response.data.uuid)
            return
        } catch (error) {
            console.log(error.message)
        }

    }
    return { deleteProject, error }
}

