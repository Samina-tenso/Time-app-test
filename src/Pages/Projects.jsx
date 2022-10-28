import React from "react";
import NewProject from "./NewProject";
import ProjectList from "./ProjectList";
import '../Styles/projects.css'
export default function Projects() {
    return (
        <>
            <div className="container">
                <NewProject />
                <ProjectList />
            </div>
        </>
    )
}