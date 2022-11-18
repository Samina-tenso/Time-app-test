export const initialState = {
    isRunning: false,
    seconds: 0,
    minutes: 0,
    hours: 0


}

export const timerReducer = (stateTimer, action) => {
    switch (action.type) {
        case 'START':
            return { ...stateTimer, isRunning: true }
        case 'STOP':
            return { ...stateTimer, isRunning: false }
        case 'RESET_TIME':
            return { isRunning: false, seconds: 0, minutes: 0, hours: 0 }
        case 'TICK':
            if (stateTimer.seconds === 2) {
                return { ...stateTimer, seconds: 0, minutes: stateTimer.minutes + 1 }
            } else if (stateTimer.minutes == 2) {
                return { ...stateTimer, minutes: 0, hours: stateTimer.hours + 1, seconds: stateTimer.seconds + 1 }
            } else {
                return { ...stateTimer, seconds: stateTimer.seconds + 1 }
            }
        default: return
    }
}
export default timerReducer