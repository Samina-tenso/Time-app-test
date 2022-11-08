import { NavLink } from "react-router-dom"
import { Outlet } from "react-router-dom"

export function Root() {
    return (
        <div>
            <ul className="fixed bottom-0 z-20 bg-slate-900s inset-x-0 flex text-center justify-center " >
                <NavLink className={({ isActive }) => isActive ? "bg-slate-600" : null} to={`/timer`} href="#"> <li className="p-4 hover:bg-slate-600" > Timer</li></NavLink>
                <NavLink className={({ isActive }) => isActive ? "bg-slate-600" : null} to={`/calender`} href="#"><li className="p-4 hover:bg-slate-600"> Calender</li></NavLink>
                <NavLink className={({ isActive }) => isActive ? "bg-slate-600" : null} to={`/projects`} href="#"> <li className="p-4 hover:bg-slate-600"> Projects</li></NavLink>
            </ul >
            <Outlet />
        </div >
    )
}