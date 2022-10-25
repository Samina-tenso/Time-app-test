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

    const { addTime } = useAddTime()
    useEffect(() => {
        console.log("rerendered")
        if (!stateTimer.isRunning) {
            return
        }
        console.log(stateTimer.time)
        timerRef.current = setInterval(() => dispatchTimer({ type: 'TICK' }), 1000)
        return () => {
            clearInterval(timerRef.current)
            timerRef.current = 0

        }

    }, [stateTimer.isRunning])





    const handleSave = async (e) => {
        let count = stateTimer.time
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
        dispatchTimer({
            type: 'RESET_TIME'
        })
    }

    return (
        <>
            {stateSelectedTask.selectedTask.title ?
                (
                    <div className='bg-slate-900'>
                        <h1>{stateTimer.time}</h1>
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