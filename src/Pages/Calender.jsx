import React, { useEffect, useContext } from 'react'
import { TaskContext } from "../Context/TaskContext"
import { DayPicker } from 'react-day-picker'
import { format, formatISO } from 'date-fns'
import { useGetByDate } from '../Hooks/getByDate'
import 'react-day-picker/dist/style.css';

export function Calender() {
    const { getByDate } = useGetByDate()
    const { stateTask } = useContext(TaskContext)
    const [selected, setSelected] = React.useState(formatISO(new Date(), { representation: 'date' }));
    useEffect(() => {
        getByDate(currentDate)
        console.log(selected)
    }, [selected])

    let currentDate = formatISO(new Date(selected), { representation: 'date' })
    console.log(currentDate)

    return (
        <>
            <div className="flex justify-center items-center">
                <span>
                    < h1 className="text-2xl mt-4"> Calender</h1 >
                    <DayPicker
                        mode="single"
                        selected={selected}
                        onSelect={setSelected}
                    />
                </span>
            </div>
            <div>
                <span >
                    <p data-testid="date" > You picked {format(new Date(selected), 'PP')}</p>
                </span>
                <span>
                    <ul>
                        {
                            stateTask.task.map(task => {
                                return <div>
                                    <h2>{task.title}</h2>
                                </div>
                            })
                        }
                    </ul>
                </span>
            </div >
        </>
    )
}