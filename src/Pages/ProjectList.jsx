import React from "react";
import { useEffect, useContext } from "react";
import { ProjectContext } from "../Context/ProjectContext";
import { useDeleteProject } from "../Hooks/deleteProject";
import { TrashIcon } from '@heroicons/react/24/outline'

export default function ProjectList() {
    const { state, dispatch } = useContext(ProjectContext)
    const { deleteProject } = useDeleteProject()

    const handleDelete = (id) => {
        console.log(id)
        deleteProject(id)
    }
    return (
        <div className=" bg-slate-800 pb-20" >
            < ul >
                {
                    state.projects.map(project => {
                        return <div className=" flex p-6 justify-around space-between w-screen bg-slate-900">

                            <li key={project.id} className="flex-1 text-xl"> {project.title}</li>
                            <button onClick={() => handleDelete(project.id)} className="flex-1 rounded-full p-3 hover:bg-slate-600 active:text-slate-900"> <TrashIcon className="inline w-6" /></button></div>
                    })
                }
            </ul >
        </div >
    )
}


