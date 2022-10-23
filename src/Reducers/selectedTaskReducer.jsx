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
            let selectedTask = {
                ...stateSelectedTask,
                selectedTask: action.payload
            };
            return selectedTask
        case "RESET_SELECTED":
            let resetSelected = {
                ...stateSelectedTask,
                selectedTask: action.payload
            };
            return resetSelected
        default: return stateSelectedTask
    }

}
export default selectedTaskReducer