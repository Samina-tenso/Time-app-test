import React from "react";
import { NewProject } from "./Components/NewProject";
import { ProjectList } from "./Components/ProjectList";
export function Projects() {
    return (
        <>
            <div className="justify-center">
                <NewProject />
                <ProjectList />
            </div>
        </>
    )
}