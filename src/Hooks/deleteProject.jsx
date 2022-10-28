
import { ProjectContext } from "../Context/ProjectContext"
import { useContext, useState } from "react"
import axios, { AxiosError } from "axios"

export const useDeleteProject = () => {
    const [error, setError] = useState(null)
    const { state, dispatch } = useContext(ProjectContext)
    const [removed, setRemoved] = useState(false)

    async function deleteProject(id) {
        console.log(id)
        setError(null)
        try {
            const res = await axios.delete(`http://localhost:3000/projects/${id}`)
            console.log(res)

            try {
                const restask = await axios.delete(`http://localhost:3000/tasks?projectId=${id}`)
                console.log(restask)
                return
            } catch (error) {
                console.log(error.message)
            }
        } catch (error) {

            console.log(error.message)
        }

    }


    return { deleteProject, error }
}

 // if (response.status === 200) {
        //     console.log(response.data)
        //
        // }