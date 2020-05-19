import {
  GET_MESSAGE_REQUEST,
  GET_MESSAGE_SUCCESS,
  GET_MESSAGE_FAILURE

} from '../constants/ActionTypes'

const initialState = {
    loading: false,
    messages: [],
    error: null,
}

export default (state=initialState, action) => {
    switch (action.type) {
        case GET_MESSAGE_SUCCESS: {
            console.log('get_message_success')
            return {
                loading: true,
                messages: state.messages.concat(action.payload),
                error: null,
            }
        }
        case GET_MESSAGE_REQUEST: {            
            console.log('get_message_request');
            console.log(state)
            return {
                ...state,
                loading: true,
                error: null,
                }
        }
        case GET_MESSAGE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
                }
        default:
            return state;
    }
}