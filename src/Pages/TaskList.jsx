import React from 'react'
import { useState, useEffect, useContext } from "react";
import { TaskContext } from "../Context/TaskContext";
import { useDeleteTask } from '../Hooks/deleteTask';
import { useGetTasks } from '../Hooks/getTasks';
import { SelectedTaskContext } from '../Context/SelectedTaskContext';
import { ProjectContext } from "../Context/ProjectContext"
import { TimerContext } from '../Context/TimerContext';
import { useRemoveTime } from '../Hooks/removeTime';

function TaskList() {
    const { stateTask, dispatchTask } = useContext(TaskContext)
    const { deleteTask } = useDeleteTask()
    const { removeTime } = useRemoveTime()
    const { getTasks } = useGetTasks()
    const { stateTimer, dispatchTimer } = useContext(TimerContext)
    const { stateSelectedTask, dispatchSelectedTask } = useContext(SelectedTaskContext)
    useEffect(() => {

    }, [])
    const handleSelected = (id, title, projectTitle) => {
        dispatchSelectedTask({
            type: "SELECTED_TASK",
            payload: {
                id: id,
                title: title,
                projectTitle: projectTitle,
            }
        })
        dispatchTimer({
            type: 'RESET_TIME'
        })
    }
    const handleDelete = (id) => {
        console.log(id)
        deleteTask(id)
        if (id == stateSelectedTask.selectedTask.id) {
            dispatchSelectedTask({
                type: 'RESET_SELECTED_TASK'
            })
        }
    }
    const handleRemoveTime = async (id) => {
        console.log(id)
        await removeTime(id)
    }

    return (
        <div className="">
            <ul>
                {
                    stateTask.task.map(task => {
                        return <div className="list-container" >
                            <span onClick={() => handleSelected(task.id, task.title, task.projectTitle)} >
                                <li key={task.id} className=""> {task.title}  {task.time}{task.projectTitle}</li>
                            </span>
                            <button onClick={() => handleRemoveTime(task.id)}>Remove Time </button>
                            <button onClick={() => handleDelete(task.id)}>Delete </button>


                        </div>

                    })
                }
            </ul>
        </div>
    )
}

export default TaskList