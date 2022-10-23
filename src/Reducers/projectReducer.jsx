import React from "react"

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
        //...state.project is all of previous projeccts 
        case "FETCH_PROJECTS":
            let updateState =
            {
                ...state, projects: action.payload
            }
            return updateState
        case "DELETED_PROJECT":
            let filteredState = {
                ...state, projects: [...state.projects].filter((project) => project.uuid !== action.payload.uuid)
            }
            return filteredState


        case "SELECTED_PROJECT":
            let selectedState = {
                ...state,
                projects: [...state.projects, action.payload]

            }

            return selectedState




        default: return state
    }

}
export default projectReducer