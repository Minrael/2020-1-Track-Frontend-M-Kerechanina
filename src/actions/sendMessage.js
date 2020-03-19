import {
  SEND_MESSAGE_REQUEST,
  //SEND_MESSAGE_SUCCESS,
  //SEND_MESSAGE_FAILURE,

} from '../constants/ActionTypes'


const sendMessageStarted = (data) => ({
    type: SEND_MESSAGE_REQUEST,
    payload: data/*messageList.push(data)*/,
  })

/*const sendMessageSuccess = () => ({
    type: SEND_MESSAGE_REQUEST,
  })

const sendMessageFailure = (error) => ({
    type: SEND_MESSAGE_REQUEST,
    payload: {
      error: error,
    }
  })*/

export const sendMessage = (message) => {
    return (dispatch, getState) => {
        console.log("sendMessage_action ");
        console.log(getState());
        dispatch(sendMessageStarted(message));
    }
}

