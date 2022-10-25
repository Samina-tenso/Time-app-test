import React from 'react'
import useGetAllTasks from '../Hooks/getAllTasks'
import { TaskContext } from "../Context/TaskContext";
function AllTasks() {
    const { stateTask, dispatchTask } = useContext(TaskContext)
    const { getAllTasks, error } = useGetAllTasks()
    useEffect(() => {
        getAllTasks()

    }, [])
    return (
        <div  >

            < ul >
                {
                    stateTask.task.map(task => {
                        return <div className="  grid grid-cols-2   p-8   text-slate-50 bg-slate-800 border-black  hover:bg-slate-600  active:bg-slate-900" >
                            <li key={task.uuid} className="inline-block text-lg text-slate-50 ">
                                <p>{task.title}</p>
                                <p>{task.projectTitle}</p>
                                <p>{task.time}</p>
                            </li>
                        </div>
                    })
                }
            </ul >
        </div >
    )
}

export default AllTasks