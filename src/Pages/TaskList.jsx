import React from 'react'
import { useState, useEffect, useContext } from "react";
import { TaskContext } from "../Context/TaskContext";
import { Link } from 'react-router-dom';
import { useDeleteTask } from '../Hooks/deleteTask';
import { useGetTasks } from '../Hooks/getTasks';
import { SelectedProjectContext } from '../Context/SelectedProjectContext';
import { SelectedTaskContext } from '../Context/SelectedTaskContext';
import { initialState } from '../Reducers/projectReducer';
import { useParams } from "react-router-dom"
import { useGetProjects } from '../Hooks/getProjects';
import { ProjectContext } from "../Context/ProjectContext"



function TaskList() {
    const { state, dispatch } = useContext(ProjectContext)
    const { stateTask, dispatchTask } = useContext(TaskContext)
    const { deleteTask, error } = useDeleteTask()
    const { getTasks } = useGetTasks()
    const { stateSelected, dispatchSelected } = useContext(SelectedProjectContext)
    const { stateSelectedTask, dispatchSelectedTask } = useContext(SelectedTaskContext)
    const { id } = useParams()

    useEffect(() => {

        console.log("rendered")

        dispatchSelectedTask({
            type: "RESET_SELECTED_TASK",
        })
        getTasks(id)




    }, [id])
    console.log(stateTask)

    const handleSelected = (id, title) => {
        dispatchSelectedTask({
            type: "SELECTED_TASK",
            payload: {
                uuid: id,
                title: title
            }
        })

    }

    const handleDelete = (id) => {
        console.log(id)
        deleteTask(id)
    }
    return (
        <div className='text-slate-50 '>
            {/* {project[0].title} */}

            <ul>
                {
                    stateTask.task.map(task => {

                        return <><div onClick={() => handleSelected(task.uuid, task.title)} className="flex text-blue-500 block bg-blue-200 border-black border-2 hover:text-blue-800" >
                            <li key={task.uuid} className="inline-block flex-wrap"> {task.title}</li>
                            <button onClick={() => handleDelete(task.uuid)}>Delete </button>
                            <p> {task.time}</p></div>

                        </>
                    })
                }
            </ul>
        </div>
    )
}

export default TaskList