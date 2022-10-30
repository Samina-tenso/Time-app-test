import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"
import { useContext, useState } from "react"
import '../Styles/root.css'
import { SelectedProjectContext } from "../Context/SelectedProjectContext"

export function Root() {
    const { stateSelected } = useContext(SelectedProjectContext)
    console.log(stateSelected)
    return (
        <div>
            <ul className="root-container" >
                <li className=""> <Link to={`/timer`} href="#">Timer</Link></li>
                <li className=""> <Link to={`/calender`} href="#">Calender</Link></li>
                <li className=""> <Link to={`/projects`} href="#">Projects</Link></li>
            </ul >
            <Outlet />
        </div>

    )

}