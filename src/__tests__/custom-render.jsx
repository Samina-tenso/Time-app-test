
import React from "react"
import { render } from "@testing-library/react"
import { BrowserRouter, MemoryRouter } from "react-router-dom"
import { TaskProvider } from "../Context/TaskContext";
import { ProjectProvider } from "../Context/ProjectContext";
const Wrappers = ({ children }) => {
    return (

        <ProjectProvider>
            <MemoryRouter>{children}</MemoryRouter>
        </ProjectProvider>

    )
}

const renderWithWrapper = (ui, children) => render(ui, { wrapper: Wrappers, ...children })
export * from '@testing-library/react'


// override render method
export { renderWithWrapper as render };