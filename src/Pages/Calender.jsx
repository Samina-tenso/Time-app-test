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
    //"Oct 27, 2022"
    //Oct 26, 2022

    //"2022-10-27T16:19:10.764Z"-task
    // 2022 - 10 - 27T18: 20: 48 + 02: 00 -calender

    //"2022-10-27T16:05:07.262Z"

    //  Thu Oct 27 2022 18: 07: 04 GMT + 0200(Central European Summer Time)
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
                            return <div className="    md:p-0 text-slate-50   ">

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