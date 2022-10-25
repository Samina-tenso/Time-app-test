import React from "react";
import NewProject from "./NewProject";
import ProjectList from "./ProjectList";
import Toggle from "./Toggle";
export default function Projects() {
    return (
        <>

            <div className=" space-y-8">
                <h1 className=" text-slate-50 text-xl">Projects</h1>

                <NewProject />
                <ProjectList />
            </div>
        </>
    )
}