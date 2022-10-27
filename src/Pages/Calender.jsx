import React, { useEffect, useContext } from 'react'
import { TaskContext } from "../Context/TaskContext"
import { DayPicker } from 'react-day-picker'
import { format, formatISO } from 'date-fns'
import { useGetByDate } from '../Hooks/getByDate'
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

    let footer = <p>
        Select date
    </p>
    // if (selected) {
    //     footer = <p> you picke {selected}</p>
    // }
    return (
        <>
            <div>Calender</div>
            <div className='datePicker'>
                <DayPicker
                    styles={{
                        caption: { color: "red" }
                    }}
                    mode="single"
                    selected={selected}
                    onSelect={setSelected}
                    footer={footer}
                /></div>
            <div>
                <ul>
                    {
                        stateTask.task.map(task => {
                            return <div className="    md:p-0 text-slate-50   ">

                                <p className="" >{task.title}</p>
                            </div>

                        })
                    }

                </ul>
            </div>
        </>
    )
}

export default Calender