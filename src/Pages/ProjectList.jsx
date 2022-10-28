import React from "react";
import { useEffect, useContext } from "react";
import { ProjectContext } from "../Context/ProjectContext";
import { SelectedProjectContext } from "../Context/SelectedProjectContext";
import { useDeleteProject } from "../Hooks/deleteProject";
import { Link } from "react-router-dom";
import { useGetProjects } from "../Hooks/getProjects";
import { TrashIcon } from '@heroicons/react/24/outline'
import { SelectedTaskContext } from '../Context/SelectedTaskContext';



export default function ProjectList() {
    const { state, dispatch } = useContext(ProjectContext)
    const { deleteProject, error } = useDeleteProject()
    const { stateSelected, dispatchSelected } = useContext(SelectedProjectContext)
    const { stateSelectedTask, initialState, dispatchSelectedTask } = useContext(SelectedTaskContext)
    const { getProjects } = useGetProjects()
    // const [selectedId, setSelectedId ] = useState()

    useEffect(() => {

        console.log(initialState)
        console.log(stateSelected)
        console.log(state)
        console.log("newn")

    }, [state])

    const handleSelected = (id, title) => {
        try {
            console.log(id)
            dispatchSelected({
                type: "SELECTED_PROJECT",
                payload: {
                    projectId: id,
                    projectTitle: title
                }
            })
            console.log(stateSelected)
        } catch (error) {
            console.log(error.message)
        }
    }

    const handleDelete = (id) => {
        console.log(id)
        deleteProject(id)
    }

    console.log(state.projects)
    return (
        <div className="container" >

            < ul >
                {
                    state.projects.map(project => {
                        return <div className="list-container">

                            <Link to={`${project.id}`} className=" ">
                                <li key={project.id} className="  "> {project.title}</li></Link>
                            <button onClick={() => handleDelete(project.id)} className=" "> <TrashIcon className="trash-icon" /></button></div>
                    })
                }
            </ul >
        </div >
    )
}


