import { render, waitFor, getAllByText, screen, getByText, act, runTimersToTime } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { vi } from "vitest"
import { ProjectProvider } from "../../Context/ProjectContext"
import { SelectedTaskProvider } from "../../Context/SelectedTaskContext"
import { TaskProvider } from "../../Context/TaskContext"
import { TimerContext, TimerProvider } from "../../Context/TimerContext"
import { TaskList } from "../../Pages/Components/TaskList"
import { Timer } from "../../Pages/Components/Timer"
import { Tasks } from '../../Pages/Tasks'


describe("Selected task should appear in Timer", () => {
    beforeEach(async () => {
        render(<ProjectProvider><TaskProvider><SelectedTaskProvider><TimerProvider ><Tasks /></TimerProvider></SelectedTaskProvider></TaskProvider></ProjectProvider >)
        await waitFor(() => {
            expect(screen.getByText(/test1/)).toBeInTheDocument()
        })
        const selectedTask = screen.getByText(/test1/)
        await userEvent.click(selectedTask)
        const selectedTimerTask = screen.getByTestId("selected-timerItem")
        await waitFor(() => {
            expect(selectedTimerTask.textContent).toMatch(/test1/)
        })
    })
    afterEach(() => {
        vi.useRealTimers()
    })
    test("Time should start and display for selected item", async () => {
        vi.useFakeTimers()
        const user = userEvent.setup({
            advanceTimers: () => vi.advanceTimersByTime(4000),
        });
        const playButton = screen.getByTestId("play-button")
        await user.click(playButton)
        expect(await screen.findByText(/0:1:1/)).toBeInTheDocument()
        screen.debug()
    })
})