import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"



export function Root() {

    return (
        <>


            <ul className="w-full  bg-slate-50  bottom-0 block fixed inset-x-0 flex  place-content-evenly   ">
                <li className=" w-full p-4 hover:bg-slate-800 bg-slate-50 text-slate-800 hover:text-slate-50"> <Link to={`/tasks`} href="#">Tasks</Link></li>
                <li className="w-full p-4 hover:bg-slate-800 bg-slate-50 text-slate-800 hover:text-slate-50"> <Link to={`/calender`} href="#">Calender</Link></li>
                <li className="w-full p-4 hover:bg-slate-800 bg-slate-50 text-slate-800 hover:text-slate-50"> <Link to={`/projects`} href="#">Projects</Link></li>
            </ul >

            <Outlet />
        </>

    )

}