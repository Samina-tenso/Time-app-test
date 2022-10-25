import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"
import { useState } from "react"



export function Root() {

    const [selected, setSelected] = useState("")
    console.log(selected)
    return (
        <>
            <ul className="w-full  bg-slate-50  bottom-0 block fixed inset-x-0 flex  place-content-evenly">
                <li className={`w-full p-4 text-slate-800 hover:text-slate-50 ${selected == "tasks" ? "bg-slate-50" : "bg-slate-600"}`} onClick={() => setSelected("tasks")}> <Link to={`/tasks`} href="#">Tasks</Link></li>
                <li className={`w-full p-4 text-slate-800 hover:text-slate-50 ${selected == "calender" ? "bg-slate-50" : "bg-slate-600 "}`}> <Link to={`/calender`} href="#">Calender</Link></li>
                <li className={`w-full p-4 text-slate-800 hover:text-slate-50 ${selected == "projects" ? "bg-slate-50" : "bg-slate-600 "}`} onClick={() => setSelected("projects")}> <Link to={`/projects`} href="#">Projects</Link></li>
            </ul >

            <Outlet />
        </>

    )

}