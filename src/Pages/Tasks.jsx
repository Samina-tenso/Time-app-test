import React from 'react'
import NewTask from './NewTask'
import TaskList from './TaskList'
import Timer from './Timer'
function Tasks() {
    return (
        <div>
            <div>Tasks</div>
            <Timer />
            <NewTask />
            <TaskList />
        </div>
    )
}

export default Tasks