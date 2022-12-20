import { rest } from 'msw'
import { server } from './server'
const mockTasks = [
    {
        id: "1",
        title: "test1",
        projectId: "2",
        projectTitle: "test-project",
        day: "2022-12-17"
    },
    {
        id: "2",
        title: "test2",
        projectId: "2",
        projectTitle: "test-project",
        day: "2022-12-17"
    }
]
const mockProjects = [
    {
        id: "1",
        title: "test1",
    },
    {
        id: "2",
        title: "test2",
    }
]
export const handlers = [
    rest.get("http://localhost:3000/tasks", async (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json([
                {
                    id: "1",
                    title: "test1",
                    projectId: "2",
                    projectTitle: "test-project",
                    day: "2022-12-17"
                },
                {
                    id: "2",
                    title: "test2",
                    projectId: "2",
                    projectTitle: "test-project",
                    day: "2022-12-17"

                }
            ])
        )
    }),
    rest.post("http://localhost:3000/tasks", async (req, res, ctx) => {
        return res(ctx.json({
            id: "3",
            title: "test3",
            projectId: "2",
            projectTitle: "test-project",
            day: "2022-12-17"


        }))
    }),
    rest.get("http://localhost:3000/projects", async (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json([
                {
                    id: "1",
                    title: "test1",
                },
                {
                    id: "2",
                    title: "test2",
                },
                { added: 'task added' }
            ])
        )
    }),
    rest.post("http://localhost:3000/projects", async (req, res, ctx) => {
        return res(ctx.json(mockProjects))
    })
]

