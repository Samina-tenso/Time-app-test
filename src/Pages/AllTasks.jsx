import React, { useContext, useEffect } from 'react'
import { useGetAllTasks } from '../Hooks/getAllTasks'
import { TaskContext } from "../Context/TaskContext";
import '../Styles/allTasks.css'
function AllTasks() {
    const { stateTask, dispatchTask } = useContext(TaskContext)
    const { getAllTasks, error } = useGetAllTasks()
    useEffect(() => {
        getAllTasks()

    }, [])

    return (
        <div className="">

            <ul className="tag-container">
                <li> <p>Name</p></li>
                <li> <p> Project Name</p></li>
                <li> <p> Time</p></li>
            </ul>
            < ul className="" >


                {
                    stateTask.task.map(task => {
                        return <div className="" >
                            <li key={task.uuid} className="tasks-container"  >
                                <h1 className="">{task.title}</h1>
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