import React, { useRef, useState, useEffect, useContext } from 'react'
import { PlayIcon } from '@heroicons/react/24/outline'
import { StopIcon } from '@heroicons/react/24/outline'
import { BookmarkIcon } from '@heroicons/react/24/outline'
import { SelectedTaskContext } from '../Context/SelectedTaskContext';
import { useAddTime } from '../Hooks/addTime';
import { TimerContext } from '../Context/TimerContext';

function Timer() {
    const { stateSelectedTask, dispatchSelectedTask } = useContext(SelectedTaskContext)
    const { stateTimer, dispatchTimer } = useContext(TimerContext)
    const timerRef = useRef(0)
    const [count, setCount] = useState(0)
    const { addTime } = useAddTime()
    useEffect(() => {
        console.log("rerendered")
        if (!stateTimer.timer.isRunning) {
            return
        }
        timerRef.current = setInterval(() => setCount(time => time + 1), 1000)
        return () => {
            clearInterval(timerRef.current)
            timerRef.current = 0
        }

    }, [stateTimer.timer.time])





    const handleSave = async (e) => {
        e.preventDefault()
        try {
            if (stateSelectedTask.selectedTask.uuid) {
                let selectedId = stateSelectedTask.selectedTask.uuid
                console.log(count)
                await addTime(count, selectedId)
            }

        } catch (error) {
            console.log(error.message)
        }

    }

    return (
        <>
            {stateSelectedTask.selectedTask ?
                (
                    <div className='bg-slate-900'>
                        <h1>{stateTimer.timer.time}</h1>
                        <h2>task:{stateSelectedTask.selectedTask ? (stateSelectedTask.selectedTask.title) : null}</h2>
                        <button onClick={handleSave}> <BookmarkIcon className="w-4"></BookmarkIcon></button>
                        <button onClick={() => dispatchTimer({ type: 'START' })}> <PlayIcon className="w-4"></PlayIcon></button>
                        <button onClick={() => dispatchTimer({ type: 'STOP' })}> <StopIcon className="w-4"></StopIcon></button>

                    </div>)

                : (<h1>Choose Task</h1>)
            }
        </>
    )
}

export default Timer