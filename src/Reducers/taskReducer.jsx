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
        case "DELETED_TASK":
            let filteredState = {
                ...stateTask, task: [...stateTask.task].filter((task) => task.uuid !== action.payload.uuid)
            }
            return filteredState
        case "FETCH_TASKS":
            let updateState =
            {
                ...stateTask, task: action.payload
            }
            return updateState
        case "ADD_TIME":
            let addedtimeState =
            {
                ...stateTask, task: [...stateTask.task.filter((task) => task.uuid !== action.payload.uuid), action.payload]
            }
            return addedtimeState
        default: return stateTask
    }

}
export default taskReducer