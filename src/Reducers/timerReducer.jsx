export const initialState = {
    timer: [{
        isRunning: false,
        time: 0

    }
    ]
}

export const timerReducer = (stateTimer, action) => {
    switch (action.type) {
        case 'START':

            return { ...stateTimer, timer: [stateTimer.timer.isRunning, true] }
        case 'STOP':
            return { ...stateTimer, isRunning: false }
        case 'RESET':
            return { isRunning: false, time: 0 }
        case 'TICK':
            return { ...stateTimer, time: stateTimer.time + 1 }
        default: return stateTimer
    }

}
export default timerReducer