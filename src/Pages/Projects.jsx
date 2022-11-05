import React from "react";
import NewProject from "./NewProject";
import ProjectList from "./ProjectList";
export default function Projects() {
    return (
        <>
            <div className="justify-center">
                <NewProject />
                <ProjectList />
            </div>
        </>
    )
}