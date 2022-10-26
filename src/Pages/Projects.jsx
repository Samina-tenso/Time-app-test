import React from "react";
import NewProject from "./NewProject";
import ProjectList from "./ProjectList";
import Toggle from "./Toggle";
export default function Projects() {
    return (
        <>

            <div className=" space-y-8">


                <NewProject />
                <ProjectList />
            </div>
        </>
    )
}