export const initialState = {
    task: [{
        id: '',
        title: '',
        projectId: null,
        projectTitle: null


    }
    ]
}
export const taskReducer = (stateTask, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return {
                ...stateTask, task: [
                    ...stateTask.task, action.payload
                ]
            }
        case "DELETED_TASK":
            let filteredState = {
                ...stateTask, task: [...stateTask.task].filter((task) => task.id !== action.payload.id)
            }
            return filteredState
        case "FETCH_TASKS":
            let updateState =
            {
                ...stateTask, task: action.payload
            }
            return updateState
        case "ADD_TIME":
            let addedTimeState =
            {
                ...stateTask, task: [...stateTask.task.filter((task) => task.id !== action.payload.id), action.payload]
            }
            return addedTimeState
        case "REMOVE_TIME":
            let removedTimeState =
            {
                ...stateTask, task: [...stateTask.task.filter((task) => task.id !== action.payload.id), action.payload]
            }
            return removedTimeState
        default: return stateTask
    }

}
export default taskReducer