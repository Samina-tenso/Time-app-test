export const initialState = {
    selected: [{
        projectId: null,
        projectTitle: null,
    }
    ]
}

export const selectedProjectReducer = (stateSelected, action) => {

    switch (action.type) {
        case "SELECTED_PROJECT":
            let selectedProject = {
                ...stateSelected,
                selected: action.payload
            }
            console.log(selectedProject)
            return selectedProject
        case "RESET_SELECTED_PROJECT":
            let resetSelectedProject = {
                ...stateSelected,
                selected: action.payload
            }
            return resetSelectedProject

        default: return stateSelected
    }
}
export default selectedProjectReducer