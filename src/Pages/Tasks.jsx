import { React } from 'react'
import { NewTask } from './Components/NewTask'
import { TaskList } from './Components/TaskList'
import { Timer } from './Components/Timer'

export function Tasks() {
    return (
        <div>
            <Timer />
            <NewTask />
            <TaskList />
        </div>
    )
}

