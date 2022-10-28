export const initialState = {
    isRunning: false,
    time: 0
}

export const timerReducer = (stateTimer, action) => {
    switch (action.type) {
        case 'START':
            return { ...stateTimer, isRunning: true }
        case 'STOP':
            return { ...stateTimer, isRunning: false }
        // case 'RESET_TIME':
        //     return { isRunning: false, time: 0 }
        case 'TICK':
            return { ...stateTimer, time: stateTimer.time + 1 }
        default: return
    }
}
export default timerReducer