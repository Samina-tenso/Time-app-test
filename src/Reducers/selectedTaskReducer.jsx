export const initialState = {
    selectedTask: [{
        uuid: '',
        title: '',
        projectId: null,
        projectTitle: null,
        time: ' '

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