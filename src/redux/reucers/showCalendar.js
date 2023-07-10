export const calendarReducer = (state, action) => {
    switch (action.type) {
        case 'SHOW_CALENDAR': 
            return state = true
        case 'HIDE_CALENDAR': 
            return state = false
        default:
            return state
    }
};

export default calendarReducer