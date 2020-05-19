import {
  SEND_MESSAGE_REQUEST,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAILURE,

} from '../constants/ActionTypes'


const initialState = {
    loading: false,
    messages: [],
    error: null,
}

export default (state=initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE_SUCCESS: {
            console.log('send_reducer');
            return {
                loading: false,
                messages: state.messages.concat(action.payload),
                error: null,
            }
        }
        case SEND_MESSAGE_REQUEST:{            
            console.log('send_request');
            return {
                loading: true,
                error: null,
                ...state,
                }
            }
        case SEND_MESSAGE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
                }
        default:
            return state;
    }
}