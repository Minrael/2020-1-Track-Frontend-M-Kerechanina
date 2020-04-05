import {
  SEND_MESSAGE_REQUEST,
  //TODO: раскомментить в следующей дз
  //SEND_MESSAGE_SUCCESS,
  //SEND_MESSAGE_FAILURE,

} from '../constants/ActionTypes'


const initialState = {
    loading: false,
    messages: [],
    error: null,
}

export default (state=initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE_REQUEST: {
            console.log('send_reducer');
            return {
                loading: true,
                messages: state.messages.concat(action.payload),
                error: null,
            }
        }
            //break;
        /*case SEND_MESSAGE_SUCCESS:
            console.log('success' + state);
            return {
                loading: false,
                error: null,
                message: action.payload,//[...state.message, action.payload]
                }
            console.log(state);
            break;
        case SEND_MESSAGE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
                }
            break;*/
        default:
            return state;
    }
}