import React, { useContext, useEffect } from 'react'
import { useGetAllTasks } from '../Hooks/getAllTasks'
import { TaskContext } from "../Context/TaskContext";
function AllTasks() {
    const { stateTask, dispatchTask } = useContext(TaskContext)
    const { getAllTasks, error } = useGetAllTasks()
    useEffect(() => {
        getAllTasks()

    }, [])
    return (
        <div className='space-y-10' >

            <ul className='flex  grid-cols-3 text-left text-2xl place-content-evenly '>
                <li> <p>Name</p></li>
                <li> <p> Project Name</p></li>
                <li> <p> Time</p></li>
            </ul>
            < ul >


                {
                    stateTask.task.map(task => {
                        return <div className="mb-4 p-4 hover:bg-slate-600" >
                            <li key={task.uuid} className=" grid grid-cols-3 ml-4 md:ml-32 flex text-left hover:bg-slate-600 inline-block text-lg text-slate-50 ">
                                <h1 className="text-2xl ">{task.title}</h1>
                                <h2 className="text-xl text-slate-300">{task.projectTitle}</h2>
                                <p className="text-xl">{task.time}</p>
                            </li>
                        </div>
                    })
                }
            </ul >
        </div >
    )
}

export default AllTasks