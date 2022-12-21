import { render, waitFor, getByText, screen } from "@testing-library/react"
import { ProjectProvider } from "../../Context/ProjectContext"
import { SelectedTaskProvider } from "../../Context/SelectedTaskContext"
import { ProjectList } from "../../Pages/Components/ProjectList"

test("renders ProjectList", async () => {
    render(<ProjectProvider>
        <SelectedTaskProvider>
            <ProjectList />
        </SelectedTaskProvider>
    </ProjectProvider>)
    await waitFor(() => {
        expect(screen.getByText("test1")).toBeInTheDocument();
        expect(screen.getByText("test2")).toBeInTheDocument();
    })
    screen.debug()
})