import { createContext, useReducer } from "react";
import { timerReducer, initialState } from "../Reducers/timerReducer";

export const TimerContext = createContext()

export const TimerProvider = ({ children }) => {
    const [stateTimer, dispatchTimer] = useReducer(timerReducer, initialState)
    console.log('timercontext timerstate:', stateTimer)
    return (
        <TimerContext.Provider value={{ stateTimer, dispatchTimer }}>
            {children}
        </TimerContext.Provider>
    )
}
