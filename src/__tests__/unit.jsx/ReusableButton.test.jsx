import { cleanup, fireEvent, getByTestId, render, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import React from "react"
import { ReusableButton } from "../../Pages/Components/ReusableButton"
import { NewTask } from "../../Pages/Components/NewTask";
import { vi, act } from "vitest";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom"
import { TaskProvider } from "../../Context/TaskContext";
import { ProjectProvider } from "../../Context/ProjectContext";

describe('Reusable button should render with props', () => {
    test("Should render ReusableButton", () => {
        render(<ReusableButton />)
        const button = screen.getByTestId(/reusableButton/)
        expect(button).toBeInTheDocument()

    })
    test("Should render ResuableButton with title Add Tasks", () => {
        render(<ReusableButton children={"Add Tasks"} />)
        const pElement = screen.queryByTestId('reusableButton')
        expect(pElement).toBeInTheDocument();
        expect(screen.getByText("Add Tasks")).toBeInTheDocument()

    })
})
