import React from 'react'
import { SelectedProjectContext } from '../Context/SelectedProjectContext'
import { useContext } from 'react'
import NewTask from './NewTask'
import TaskList from './TaskList'
import { useEffect } from 'react'
import Timer from './Timer'
import { useParams } from 'react-router-dom'
function Tasks() {
    const { stateSelectedProject, dispatchSelectedProject } = useContext(SelectedProjectContext)
    console.log(stateSelectedProject)
    const { id } = useParams("id")
    return (
        <div>
            <div>Tasks</div>
            {/* {stateSelectedProject.selected.map(project => {
                return <h1> Project:{project.title} </h1>
            })} */}

            <Timer />
            <NewTask />
            <TaskList />
        </div>
    )
}

export default Tasks