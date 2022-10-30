import React, { useRef, useEffect, useContext } from 'react'
import { PlayIcon } from '@heroicons/react/24/outline'
import { StopIcon } from '@heroicons/react/24/outline'
import { BookmarkIcon } from '@heroicons/react/24/outline'
import { SelectedTaskContext } from '../Context/SelectedTaskContext';
import { useAddTime } from '../Hooks/addTime';
import { TimerContext } from '../Context/TimerContext';
import '../Styles/timer.css'
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
            if (stateSelectedTask.selectedTask.id) {
                let selectedId = stateSelectedTask.selectedTask.id
                console.log(count)
                await addTime(count, selectedId)
            }
            dispatchTimer({
                type: 'RESET_TIME'
            })
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <>
            {stateSelectedTask.selectedTask.title ?
                (
                    <div >

                        <h1>{stateTimer.time}</h1>
                        <h2>Project:{stateSelectedTask.selectedTask ? (stateSelectedTask.selectedTask.projectTitle) : null}</h2>
                        <h2>task:{stateSelectedTask.selectedTask ? (stateSelectedTask.selectedTask.title) : null}</h2>
                        <button onClick={handleSave}> <BookmarkIcon className="save"></BookmarkIcon></button>
                        <button onClick={() => dispatchTimer({ type: 'START' })}> <PlayIcon className="play"></PlayIcon></button>
                        <button onClick={() => dispatchTimer({ type: 'STOP' })}> <StopIcon className="stop"></StopIcon></button>
                    </div>)

                : (<h1>Choose Task</h1>)
            }
        </>
    )
}

export default Timer