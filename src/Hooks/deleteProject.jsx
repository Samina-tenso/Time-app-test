
import { ProjectContext } from "../Context/ProjectContext"
import { useContext, useState } from "react"
import axios, { AxiosError } from "axios"

export const useDeleteProject = () => {

    const { state, dispatch } = useContext(ProjectContext)

    async function deleteProject(id) {
        console.log(id)
        try {
            const res = await axios.delete(`http://localhost:3000/projects/${id}`)
            console.log(res)
            if (res.status == 200) {

                console.log(res.data)
                dispatch({
                    type: "DELETED_PROJECT",
                    payload: {
                        id: id,
                    }
                })

                return true
            } else {
                console.log(error.message)
            }
        } catch (error) {
            console.log(error.message)
        }
    }
    return { deleteProject }
}