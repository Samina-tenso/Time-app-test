export const initialState = {
    selected: {
        id: null,
        title: null,
    }
}

export const selectedProjectReducer = (stateSelectedProject, action) => {

    switch (action.type) {
        case "SELECTED_PROJECT":
            return {
                selected: action.payload[0]
            }


        default: return stateSelected
    }
}
export default selectedProjectReducer