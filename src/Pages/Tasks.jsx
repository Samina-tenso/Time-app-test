import React from 'react'
import { SelectedProjectContext } from '../Context/SelectedProjectContext'
import { useContext } from 'react'
import NewTask from './NewTask'
import TaskList from './TaskList'
import { useEffect } from 'react'
import Timer from './Timer'






function Tasks() {



    return (
        <div className=' text-slate-50 '>
            <div>Tasks</div>
            <h1> Project: </h1>

            <Timer />
            <NewTask />
            <TaskList />
        </div>
    )
}

export default Tasks