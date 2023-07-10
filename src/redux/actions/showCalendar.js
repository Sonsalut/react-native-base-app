export const showCalendar = (boolean) => {
    return {
        type: 'SHOW_CALENDAR',
        payload: boolean
    }
}

export const hideCalendar = (boolean) => {
    return {
        type: 'HIDE_CALENDAR',
        payload: boolean
    }
}