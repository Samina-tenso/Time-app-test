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
    const { deleteProject } = useDeleteProject()

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

                            <li key={project.id} className="  "> {project.title}</li>
                            <button onClick={() => handleDelete(project.id)} className=" "> <TrashIcon className="trash-icon" /></button></div>
                    })
                }
            </ul >
        </div >
    )
}


