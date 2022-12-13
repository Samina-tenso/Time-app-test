import React, { useRef, useEffect, useContext, useState } from 'react'
import { PlayIcon } from '@heroicons/react/24/outline'
import { StopIcon } from '@heroicons/react/24/outline'
import { BookmarkIcon } from '@heroicons/react/24/outline'
import { SelectedTaskContext } from '../../Context/SelectedTaskContext';
import { useAddTime } from '../../Hooks/addTime';
import { TimerContext } from '../../Context/TimerContext';

export function Timer() {
    const { stateSelectedTask } = useContext(SelectedTaskContext)
    const { stateTimer, initialState, dispatchTimer } = useContext(TimerContext)
    const [time, setTime] = useState({
        seconds: 0,
        minutes: 0,
        hours: 0,
    })
    const timerRef = useRef(0)
    const { addTime } = useAddTime()

    useEffect(() => {
        if (!stateTimer.isRunning) {
            return
        }
        timerRef.current = setInterval(() => dispatchTimer({
            type: 'TICK',
        }), 1000)

        return () => {
            clearInterval(timerRef.current)
            timerRef.current = 0
        }
    }, [stateTimer.isRunning, stateSelectedTask])

    const handleSave = async (e, seconds, minutes, hours) => {
        e.preventDefault()
        time.seconds = seconds
        time.minutes = minutes
        time.hours = hours
        setTime({ ...time })
        console.log(time)

        try {
            if (stateSelectedTask.selectedTask.id) {
                let selectedId = stateSelectedTask.selectedTask.id
                await addTime(time, selectedId)
            }
            dispatchTimer({
                type: 'RESET_TIME',

            })
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <>
            <div className="m-4 text-2xl">Timer</div>
            {stateSelectedTask.selectedTask.title ?
                (
                    <div className="space-y-4" >
                        {<h1 className="text-2xl">{stateTimer.hours}:{stateTimer.minutes}:{stateTimer.seconds}</h1>}
                        <h2 className="text-xl">Project: {stateSelectedTask.selectedTask ? (stateSelectedTask.selectedTask.projectTitle) : null}</h2>
                        <h2 className="text-xl font-bold">Task: {stateSelectedTask.selectedTask ? (stateSelectedTask.selectedTask.title) : null}</h2>
                        <button className=" rounded-full p-1 hover:bg-slate-600 active:bg-slate-900" onClick={(e) => handleSave(e, stateTimer.seconds, stateTimer.minutes, stateTimer.hours)}> <BookmarkIcon className="w-8 m-2"></BookmarkIcon></button>
                        <button className=" rounded-full p-1 hover:bg-slate-600 active:bg-slate-900" onClick={() => dispatchTimer({ type: 'START' })}> <PlayIcon className="w-8 m-2 "></PlayIcon></button>
                        <button className=" rounded-full p-1 hover:bg-slate-600 active:bg-slate-900" onClick={() => dispatchTimer({ type: 'STOP' })}> <StopIcon className="w-8 m-2"></StopIcon></button>
                    </div>)

                : (<h1>Choose Task</h1>)
            }
        </>
    )
}