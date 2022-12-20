
import { NewTask } from '../../Pages/Components/NewTask'
import { screen, render, waitFor, fireEvent, stringMatching, toHaveBeenCalled, getAllByTestId, toHaveBeenCalledWith } from '@testing-library/react'
import { vi, describe } from 'vitest'
import userEvent from '@testing-library/user-event'
import { TaskProvider } from '../../Context/TaskContext'
import { ProjectProvider } from '../../Context/ProjectContext'
import { addTask } from '../../Hooks/addTask'
import { useAddTask } from '../../Hooks/addTask'
import { MockedRequest } from 'msw'
import { TaskList } from '../../Pages/Components/TaskList'
import { TimerProvider } from '../../Context/TimerContext'
import { SelectedTaskProvider } from '../../Context/SelectedTaskContext'

// const handleSubmit = vi.fn((title) => {
//     return Promise.resolve({ title })
// })
describe('NewTask', () => {
    test("Should call handeSubmit when clicked", async () => {
        const handleSubmit = vi.fn(() => {
            return Promise.resolve()
        })
        //const addTask = vi.spyOn()
        render(
            <TaskProvider>
                <ProjectProvider>
                    <SelectedTaskProvider>
                        <TimerProvider>
                            <NewTask onSubmit={handleSubmit} />
                            <TaskList />
                        </TimerProvider>
                    </SelectedTaskProvider>
                </ProjectProvider>
            </TaskProvider>
        )
        const taskInput = screen.getByTestId("task-name")
        expect(taskInput).toBeInTheDocument()
        fireEvent.change(taskInput, { target: { value: "test3" } })
        expect(taskInput).toHaveValue("test3")
        await waitFor(() => {
            userEvent.click(screen.getByTestId("reusableButton"))
        })
        await waitFor(() => {
            expect(screen.queryByText(/test3/)).toBeInTheDocument()
        }
        )
        screen.debug()
        //         debugger
    })
})
