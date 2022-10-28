import React, { useContext, useEffect } from 'react'
import { useGetAllTasks } from '../Hooks/getAllTasks'
import { TaskContext } from "../Context/TaskContext";
import '../Styles/allTasks.css'
function AllTasks() {
    const { stateTask, dispatchTask } = useContext(TaskContext)
    const { getAllTasks } = useGetAllTasks()
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
            < ul >
                {
                    stateTask.task.map(task => {
                        return <div  >
                            <li key={task.uuid} className="tasks-container"  >
                                <h1 className="">{task.title}</h1>
                                <h2 >{task.projectTitle}</h2>
                                <p >{task.time}</p>
                            </li>
                        </div>
                    })
                }
            </ul >
        </div >
    )
}

export default AllTasks