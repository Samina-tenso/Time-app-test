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
            return selectedProject
        default: return stateSelected
    }

}
export default selectedProjectReducer