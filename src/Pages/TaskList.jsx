import React from 'react'
import { useState, useEffect, useContext } from "react";
import { TaskContext } from "../Context/TaskContext";
import { useDeleteTask } from '../Hooks/deleteTask';
import { useGetTasks } from '../Hooks/getTasks';
import { SelectedProjectContext } from '../Context/SelectedProjectContext';
import { SelectedTaskContext } from '../Context/SelectedTaskContext';
import { useParams } from "react-router-dom"
import { ProjectContext } from "../Context/ProjectContext"
import { useGetSelectedProject } from '../Hooks/getSelectedProject';

function TaskList() {
    const { stateTask, dispatchTask } = useContext(TaskContext)
    const { getSelectedProject } = useGetSelectedProject()
    const { deleteTask, error } = useDeleteTask()
    const { getTasks } = useGetTasks()
    const { state, dispatch } = useContext(ProjectContext)
    const { stateSelectedProject, dispatchSelectedProject } = useContext(SelectedProjectContext)
    const { stateSelectedTask, dispatchSelectedTask } = useContext(SelectedTaskContext)
    const { id } = useParams()

    useEffect(() => {
        dispatchSelectedTask({
            type: "RESET_SELECTED_TASK",
        })

        if (window.location.pathname.includes("prev")) {
            // TODO: Add condition to see if selected project exixts if not get latest project id
            getTasks(stateSelectedProject.selected.id)
            return
        }
        getSelectedProject(id)
        getTasks(id)


    }, [])
    console.log(stateSelectedProject)
    const handleSelected = (id, title) => {
        dispatchSelectedTask({
            type: "SELECTED_TASK",
            payload: {
                id: id,
                title: title
            }
        })
    }
    const handleDelete = (id) => {
        console.log(id)
        deleteTask(id)
    }
    return (
        <div className="">


            <ul>
                {
                    stateTask.task.map(task => {
                        return <div onClick={() => handleSelected(task.id, task.title)} className="list-container" >
                            <li key={task.id} className=""> {task.title}</li>
                            <button onClick={() => handleDelete(task.id)}>Delete </button>
                            <p> {task.time}</p></div>
                    })
                }
            </ul>
        </div>
    )
}

export default TaskList