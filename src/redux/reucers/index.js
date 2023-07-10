import {combineReducers} from 'redux'
import { showCalendar } from '../actions/showCalendar'

const allReducers = combineReducers({
    showCalendar,
});

export default allReducers