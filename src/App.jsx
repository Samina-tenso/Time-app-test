import React from 'react'
import {
  createBrowserRouter,
  Route,
  RouterProvider,
} from 'react-router-dom'
import './Styles/app.css'
import { ProjectProvider } from './Context/ProjectContext'
import { Root } from './Routes/Root'
import Tasks from './Pages/Tasks'
import Calender from './Pages/Calender'
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
      {
        path: '/projects/:id',
        element: <Tasks />
      },
      {
        path: '/calender',
        element: <Calender />
      }
    ]
  }
])

function App() {

  return (
    <div className="App  ">
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
