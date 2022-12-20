import { render, toBeInTheDocument, screen, getAllByTestId, waitFor, findByText } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { BrowserRouter, MemoryRouter, createBrowserRouter, createMemoryRouter, RouterProvider } from "react-router-dom"
import { ProjectProvider } from "../../Context/ProjectContext"

import { SelectedTaskProvider } from "../../Context/SelectedTaskContext"
import { TaskProvider } from "../../Context/TaskContext"
import { ProjectList } from "../../Pages/Components/ProjectList"
import { Toggle } from "../../Pages/Components/Toggle"
import { renderWithWrapper } from "../custom-render"

test("renders All Tasks on toggle", async () => {
    const routes = [
        {
            path: "/projects",
            element: <Toggle />
        }
    ]
    const router = createMemoryRouter(routes, {
        initialEntries: ["/projects"],

    })
    render(<ProjectProvider><TaskProvider><SelectedTaskProvider><RouterProvider router={router} /></SelectedTaskProvider></TaskProvider></ProjectProvider>)
    const toggleTasks = screen.getByTestId("toggle-tasks")
    expect(toggleTasks).toBeInTheDocument
    await waitFor(() => {
        userEvent.click(toggleTasks)
    })
    expect(await screen.findByText(/Time/)).toBeInTheDocument()
    //AllTasks renders
    screen.debug()
})