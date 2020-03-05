import { combineReducers } from 'redux'
import sendMessage from './sendMessage'
import getMessage from './getMessage'

export default combineReducers({
    sendMessage,
    getMessage,
})