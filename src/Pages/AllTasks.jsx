import React, { useContext, useEffect } from 'react'
import { useGetAllTasks } from '../Hooks/getAllTasks'
import { TaskContext } from "../Context/TaskContext";

export function AllTasks() {
    const { stateTask } = useContext(TaskContext)
    const { getAllTasks } = useGetAllTasks()
    useEffect(() => {
        console.log(stateTask)
        getAllTasks()
    }, [])
    console.log(stateTask)
    return (
        <div className='bg-slate-800 pb-20' >
            <ul className='flex mb-4'>
                <li className='flex-1'> <p>Name</p></li>
                <li className='flex-1'> <p> Project name</p></li>
                <li className='flex-1'> <p> Time</p></li>
            </ul>
            < ul >

                {stateTask ?
                    stateTask.task.map(task => {
                        return <div className='p-6 bg-slate-900' >
                            <li className='flex' key={task.id}   >
                                <h1 className='flex-1'>{task.title}</h1>
                                <h2 className='flex-1'>{task.projectTitle}</h2>
                                {task.time && (
                                    < span className='flex-1'><p>{task.time.hours}:{task.time.minutes}:{task.time.seconds}</p></span>
                                )
                                }

                            </li>
                        </div>
                    })
                    : null}
            </ul >
        </div >
    )
}
