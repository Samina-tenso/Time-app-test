import React from 'react'
import { SelectedProjectContext } from '../Context/SelectedProjectContext'
import { useContext } from 'react'
import NewTask from './NewTask'
import TaskList from './TaskList'
import { useEffect } from 'react'
import Timer from './Timer'






function Tasks() {

    const { stateSelected, dispatchSelected } = useContext(SelectedProjectContext)


    console.log(stateSelected.selected.projectTitle)

    return (
        <div className='text-slate-50'>
            <div>Tasks</div>
            <h1> Project: {stateSelected.selected.projectTitle}</h1>

            <Timer />
            <NewTask />
            <TaskList />
        </div>
    )
}

export default Tasks