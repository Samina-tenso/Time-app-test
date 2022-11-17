import React from 'react'
import { useEffect, useContext } from 'react';
import { TaskContext } from '../../Context/TaskContext';
import { useDeleteTask } from '../../Hooks/deleteTask';
import { useGetTasks } from '../../Hooks/getTasks';
import { SelectedTaskContext } from '../../Context/SelectedTaskContext';
import { TimerContext } from '../../Context/TimerContext';
import { useRemoveTime } from '../../Hooks/removeTime';
import { TrashIcon } from '@heroicons/react/24/outline'
import { MinusCircleIcon } from '@heroicons/react/24/solid'
import { ClockIcon } from '@heroicons/react/24/outline'


export function TaskList() {
    const { stateTask } = useContext(TaskContext)
    const { deleteTask } = useDeleteTask()
    const { removeTime } = useRemoveTime()
    const { getTasks } = useGetTasks()
    const { dispatchTimer } = useContext(TimerContext)
    const { stateSelectedTask, dispatchSelectedTask } = useContext(SelectedTaskContext)
    useEffect(() => {
        getTasks()
    }, [])
    const handleSelected = (id, title, projectTitle, projectId) => {
        dispatchSelectedTask({
            type: 'SELECTED_TASK',
            payload: {
                id: id,
                title: title,
                projectTitle: projectTitle,
                projectId: projectId
            }
        })
        // dispatchTimer({
        //     type: 'RESET_TIME'
        // })
    }
    const handleDelete = (id) => {
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
        <div className="bg-slate-800 pb-20">
            <ul>
                {
                    stateTask.task.map(task => {
                        return <div className="flex py-6 align-center bg-slate-900" >
                            <span className=" basis-3/5" onClick={() => handleSelected(task.id, task.title, task.projectTitle, task.projectId)} >
                                <li key={task.id} className="text-xl pt-3"> <span className="px-2">{task.projectTitle}</span><span className="px-2 font-bold"> {task.title} </span> <span className="px-2">{task.time}</span></li>
                            </span>
                            <button className="basis-1/5 rounded-full pt-3 hover:bg-slate-600 active:text-slate-900" onClick={() => handleRemoveTime(task.id)}><ClockIcon className="absolute  inline w-6 " /><MinusCircleIcon className=" relative m-3 inline w-4" /></button>
                            <button className="basis-1/5 rounded-full pt-3 hover:bg-slate-600 active:text-slate-900 mr-6" onClick={() => handleDelete(task.id)}><TrashIcon className="inline w-6 mb-3 " /></button>
                        </div>
                    })
                }
            </ul >
        </div >
    )
}