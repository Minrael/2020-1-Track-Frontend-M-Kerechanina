import {
  GET_MESSAGE_REQUEST,
  GET_MESSAGE_SUCCESS, 
  GET_MESSAGE_FAILURE,

} from '../constants/ActionTypes'

const getMessagesStarted = () => ({
  type: GET_MESSAGE_REQUEST
})

const getMessageSuccess = (messages) => ({
    type: GET_MESSAGE_SUCCESS,
    payload: messages
})

const getMessagesFailure = (error) => ({
    type: GET_MESSAGE_FAILURE,
    payload: error
})

export const getMessages = () => {
    return (dispatch) => {
        try {
          dispatch(getMessagesStarted());
          dispatch(getMessageSuccess(['messages from back']));
        }
        catch (e) {
          dispatch(getMessagesFailure(e.message))
        }
    }
}