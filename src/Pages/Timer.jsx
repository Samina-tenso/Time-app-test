import React, { useRef, useState, useEffect, useContext } from 'react'
import { PlayIcon } from '@heroicons/react/24/outline'
import { StopIcon } from '@heroicons/react/24/outline'
import { BookmarkIcon } from '@heroicons/react/24/outline'
import { SelectedTaskContext } from '../Context/SelectedTaskContext';


function Timer() {
    const { stateSelectedTask, dispatchSelectedTask } = useContext(SelectedTaskContext)
    const timerRef = useRef(0)
    const [count, setCount] = useState(0)

    const handleStart = () => {
        if (timerRef.current) { }
        timerRef.current = setInterval(() => setCount(time => time + 1), 1000)

    }

    const handleStop = () => {
        clearInterval(timerRef.current)
        timerRef.current = 0
    }


    useEffect(() => {
        return () => clearInterval(timerRef.current)

    }, [])



    return (
        <div className='bg-slate-900'>
            <h1>{count}</h1>
            <h2>{stateSelectedTask.selectedTask ? (stateSelectedTask.selectedTask.title) : null}</h2>
            <button> <BookmarkIcon className="w-4"></BookmarkIcon></button>
            <button onClick={handleStart}> <PlayIcon className="w-4"></PlayIcon></button>
            <button onClick={handleStop}> <StopIcon className="w-4"></StopIcon></button>

        </div>

    )
}

export default Timer