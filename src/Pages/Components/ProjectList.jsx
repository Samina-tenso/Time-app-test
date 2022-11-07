import React from "react";
import { useContext } from "react";
import { ProjectContext } from '../../Context/ProjectContext';
import { useDeleteProject } from '../../Hooks/deleteProject';
import { TrashIcon } from '@heroicons/react/24/outline'

export function ProjectList() {
    const { state } = useContext(ProjectContext)
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
                        return <div className=" flex p-6 align-center  w-screen bg-slate-900">
                            <li key={project.id} className="flex-1 self-center text-xl"> {project.title}</li>
                            <button onClick={() => handleDelete(project.id)} className="flex-1 rounded-full p-3 hover:bg-slate-600 active:text-slate-900"> <TrashIcon className="inline w-6" /></button></div>
                    })
                }
            </ul >
        </div >
    )
}