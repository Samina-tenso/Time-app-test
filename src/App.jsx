import React from 'react'

import { ReactDOM } from 'react-dom/client'
import {
  createBrowserRouter,
  Route,
  RouterProvider,
} from 'react-router-dom'
import './App.css'
import { ProjectProvider } from './Context/ProjectContext'
import { Root } from './Routes/Root'
import Tasks from './Pages/Tasks'
import Projects from './Pages/Projects'
import { TaskProvider } from './Context/TaskContext'
import { SelectedProjectProvider } from './Context/SelectedProjectContext'
import { TimerProvider } from './Context/TimerContext'
import { SelectedTaskProvider } from './Context/SelectedTaskContext'
import Toggle from './Pages/Toggle'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/projects',
        element: <Toggle />
      },
      {
        path: '/tasks',
        element: <Tasks />
      },
      //   {
      //     path: '/calender',
      //     element: <Calender />
      //   }
    ]
  }
])

function App() {

  return (
    <div className="App pb-4 h-full w-full bg-slate-800">
      < SelectedProjectProvider>
        <SelectedTaskProvider>
          <TimerProvider>
            <TaskProvider>
              <ProjectProvider>
                <RouterProvider router={router} />
              </ProjectProvider >
            </TaskProvider>
          </TimerProvider>
        </SelectedTaskProvider>
      </SelectedProjectProvider>
    </div>
  )
}

export default App
