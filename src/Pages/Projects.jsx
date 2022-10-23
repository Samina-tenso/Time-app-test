import React from "react";
import NewProject from "./NewProject";
import ProjectList from "./ProjectList";
export default function Projects() {
    return (
        <div className="pt-6 space-y-8">
            <h1 className=" text-slate-50 text-xl">Projects</h1>

            <NewProject />
            <ProjectList />
        </div>
    )
}