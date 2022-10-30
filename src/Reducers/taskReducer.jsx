export const initialState = {
    task: [{
        uuid: '',
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
        case "DELETE_TASK":
            console.log(action.payload)
            return { ...stateTask, task: [...stateTask.task].filter((task) => task.id !== action.payload.id) }

        case "FETCH_TASKS":
            let updateState =
            {
                ...stateTask, task: action.payload
            }
            return updateState
        case "ADD_TIME":
            let addedtimeState =
            {
                ...stateTask, task: [...stateTask.task.filter((task) => task.id !== action.payload.id), action.payload]
            }
            return addedtimeState
        default: return stateTask
    }

}
export default taskReducer