import React, { useEffect, useContext } from 'react'
import { TaskContext } from "../Context/TaskContext"
import { DayPicker } from 'react-day-picker'
import { format, formatISO } from 'date-fns'
import { useGetByDate } from '../Hooks/getByDate'
import 'react-day-picker/dist/style.css';
import '../Styles/calender.css'

function Calender() {
    const { getByDate } = useGetByDate()
    const { stateTask, dispatchTask } = useContext(TaskContext)
    const [selected, setSelected] = React.useState(formatISO(new Date(), { representation: 'date' }));

    useEffect(() => {
        getByDate(currentDate)
        console.log(selected)
    }, [selected])

    let currentDate = formatISO(new Date(selected), { representation: 'date' })
    console.log(currentDate)

    return (
        <div className="container">
            <span>
                < h1> Calender</h1 >
                <DayPicker
                    mode="single"
                    selected={selected}
                    onSelect={setSelected}
                />
            </span>
            <span>
                <p > You picked {format(new Date(selected), 'PP')}</p>
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
        </div>
    )
}

export default Calender