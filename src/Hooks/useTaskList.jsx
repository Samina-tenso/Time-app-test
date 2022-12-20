import React from 'react'
import { useEffect, useContext } from 'react';
import { TaskContext } from '../Context/TaskContext';
import { useDeleteTask } from './deleteTask';
import { useGetTasks } from './getTasks';
import { SelectedTaskContext } from '../Context/SelectedTaskContext';
import { TimerContext } from '../Context/TimerContext';
import { useRemoveTime } from './removeTime';

export function useTaskList() {
    const { stateTask } = useContext(TaskContext)
    const { deleteTask } = useDeleteTask()
    const { removeTime } = useRemoveTime()
    const { getTasks } = useGetTasks()
    const { dispatchTimer } = useContext(TimerContext)
    const { stateSelectedTask, dispatchSelectedTask } = useContext(SelectedTaskContext)
    useEffect(() => {

        getTasks()


    }, [])
    const handleSelected = (id, title, projectTitle, projectId) => {
        dispatchSelectedTask({
            type: 'SELECTED_TASK',
            payload: {
                id: id,
                title: title,
                projectTitle: projectTitle,
                projectId: projectId
            }
        })
        dispatchTimer({
            type: 'RESET_TIME'
        })
    }
    const handleDelete = (id) => {
        deleteTask(id)
        if (id == stateSelectedTask.selectedTask.id) {
            dispatchSelectedTask({
                type: 'RESET_SELECTED_TASK'
            })
        }
    }
    const handleRemoveTime = async (id) => {
        console.log(id)
        await removeTime(id)
    }
    return [
        stateTask, {
            deleteTask: handleDelete,
            removeTime: handleRemoveTime,
            selectTask: handleSelected
        }

    ]
}