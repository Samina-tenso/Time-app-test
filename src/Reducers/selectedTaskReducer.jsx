export const initialState = {
    selectedTask: [{
        id: '',
        title: '',
        projectTitle: '',
        projectId: '',
    }
    ]
}

export const selectedTaskReducer = (stateSelectedTask, action) => {
    switch (action.type) {
        case "SELECTED_TASK":
            let currentTask = {
                ...stateSelectedTask,
                selectedTask: action.payload
            };
            return currentTask
        case "RESET_SELECTED_TASK":
            let resetSelected = {
                ...stateSelectedTask,
                selectedTask: initialState
            };
            return resetSelected
        default: return stateSelectedTask
    }
}
export default selectedTaskReducer