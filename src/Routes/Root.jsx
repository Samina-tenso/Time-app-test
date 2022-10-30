import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"
import { useContext, useState } from "react"
import '../Styles/root.css'
import { SelectedProjectContext } from "../Context/SelectedProjectContext"
import { ProjectContext } from "../Context/ProjectContext"
export function Root() {
    const { stateSelectedProject } = useContext(SelectedProjectContext)
    console.log(stateSelectedProject)
    return (
        <div>
            <ul className="root-container" >
                <li className=""> <Link to={`/projects/prev`}>Tasks</Link></li>
                <li className=""> <Link to={`/calender`} href="#">Calender</Link></li>
                <li className=""> <Link to={`/projects`} href="#">Projects</Link></li>
            </ul >
            <Outlet />
        </div>

    )

}