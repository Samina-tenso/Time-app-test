

export const initialState = {
    projects: [{ uuid: '', title: '' }

    ]
}

export const projectReducer = (state, action) => {
    switch (action.type) {
        case "ADD_PROJECT":
            return {
                ...state, projects: [
                    ...state.projects, action.payload
                ]
            }
        case "FETCH_PROJECTS":
            let updateState =
            {
                ...state, projects: action.payload
            }
            return updateState
        case "DELETED_PROJECT":
            let filteredState = {
                ...state, projects: [...state.projects].filter((project) => project.id !== action.payload.id)
            }
            return filteredState
        default: return state
    }
}
export default projectReducer