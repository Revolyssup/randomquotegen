import giveQuote from './reducers'
import { combineReducers } from 'redux'

export default combineReducers({
    quote: giveQuote
})