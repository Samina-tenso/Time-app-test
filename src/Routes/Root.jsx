import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"
import { useContext, useState } from "react"
import { SelectedProjectContext } from "../Context/SelectedProjectContext"


export function Root() {
    const { stateSelected } = useContext(SelectedProjectContext)
    console.log(stateSelected)
    const [active, setActive] = useState("")

    console.log(stateSelected.selected, "hoo")
    return (
        <>
            <ul className="w-full  bg-slate-50  bottom-0 block fixed inset-x-0 flex  place-content-evenly">
                <li className={`w-full p-4 text-slate-800  ${active == "tasks" ? "bg-slate-50" : "bg-slate-600"}`} onClick={() => setActive("tasks")}> <Link to={`/projects/${stateSelected.selected}`} href="#">Tasks</Link></li>
                <li className={`w-full p-4 text-slate-800 ${active == "calender" ? "bg-slate-50" : "bg-slate-600 "}`}> <Link to={`/calender`} href="#">Calender</Link></li>
                <li className={`w-full p-4 text-slate-800  ${active == "projects" ? "bg-slate-50" : "bg-slate-600 "}`} onClick={() => setActive("projects")}> <Link to={`/projects`} href="#">Projects</Link></li>
            </ul >

            <Outlet />
        </>

    )

}