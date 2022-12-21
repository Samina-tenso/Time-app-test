import { cleanup, fireEvent, getByTestId, render, renderHook, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import React from "react"
import { TaskProvider } from "../../Context/TaskContext";
import { TaskList } from '../../Pages/Components/TaskList'
import { TimerProvider } from "../../Context/TimerContext";
import { SelectedTaskProvider } from "../../Context/SelectedTaskContext";

test("button exists in TaskList", () => {
    waitFor(() => expect(screen.getAllByRole("button")).toBeInTheDocument())
    screen.debug()
})

test("renders list of tasks", async () => {
    render(<TaskProvider>
        <SelectedTaskProvider>
            <TimerProvider>
                <TaskList />
            </TimerProvider>
        </SelectedTaskProvider>
    </TaskProvider>)
    await waitFor(() => {
        expect(screen.getByText(/test1/)).toBeInTheDocument()
        screen.debug()
    })
})

