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
    const { stateSelectedProject, dispatchSelectedProject } = useContext(SelectedProjectContext)
    const { stateSelectedTask, initialState, dispatchSelectedTask } = useContext(SelectedTaskContext)
    const { getProjects } = useGetProjects()
    // const [selectedId, setSelectedId ] = useState()



    const handleSelected = (id, title) => {
        try {
            console.log(id)
            dispatchSelectedProject({
                type: "SELECTED_PROJECT",
                payload: [{
                    id: id,
                    title: title
                }]
            })
        } catch (error) {
            console.log(error.message)
        }
    }
    const handleDelete = (id) => {
        console.log(id)
        deleteProject(id)
    }
    return (
        <div className="container" >
            < ul >
                {
                    state.projects.map(project => {
                        return <div className="list-container">
                            <Link to={`${project.id}`} onClick={() => handleSelected(project.id, project.title)} className=" ">
                                <li key={project.id} className="  "> {project.title}</li></Link>
                            <button onClick={() => handleDelete(project.id)} className=" "> <TrashIcon className="trash-icon" /></button></div>
                    })
                }
            </ul >
        </div >
    )
}


