import { createContext, useReducer } from "react";
import { selectedProjectReducer, initialState } from "../Reducers/selectedProjectReducer";

export const SelectedProjectContext = createContext()

export const SelectedProjectProvider = ({ children }) => {
    const [stateSelected, dispatchSelected] = useReducer(selectedProjectReducer, initialState)
    console.log('selectedcontext state:', stateSelected)
    return (
        <SelectedProjectContext.Provider value={{ stateSelected, dispatchSelected }}>
            {children}
        </SelectedProjectContext.Provider>
    )
}