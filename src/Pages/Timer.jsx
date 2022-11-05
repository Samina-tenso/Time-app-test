import React, { useRef, useEffect, useContext } from 'react'
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
            <div className="m-4 text-2xl">Timer</div>
            {stateSelectedTask.selectedTask.title ?
                (
                    <div className="space-y-4" >
                        <h1 className="text-2xl">{stateTimer.time}</h1>
                        <h2 className="text-xl">Project: {stateSelectedTask.selectedTask ? (stateSelectedTask.selectedTask.projectTitle) : null}</h2>
                        <h2 className="text-xl font-bold">Task: {stateSelectedTask.selectedTask ? (stateSelectedTask.selectedTask.title) : null}</h2>
                        <button className=" rounded-full p-1 hover:bg-slate-600 active:bg-slate-900" onClick={handleSave}> <BookmarkIcon className="w-8 m-2"></BookmarkIcon></button>
                        <button className=" rounded-full p-1 hover:bg-slate-600 active:bg-slate-900" onClick={() => dispatchTimer({ type: 'START' })}> <PlayIcon className="w-8 m-2 "></PlayIcon></button>
                        <button className=" rounded-full p-1 hover:bg-slate-600 active:bg-slate-900" onClick={() => dispatchTimer({ type: 'STOP' })}> <StopIcon className="w-8 m-2"></StopIcon></button>
                    </div>)

                : (<h1>Choose Task</h1>)
            }
        </>
    )
}

export default Timer