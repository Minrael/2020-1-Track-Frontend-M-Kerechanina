import {
  SEND_MESSAGE_REQUEST,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAILURE,
} from '../constants/ActionTypes'


const sendMessageSuccess = (data) => ({
    type: SEND_MESSAGE_SUCCESS,
    payload: data,
  })

const sendMessageRequest = () => ({
    type: SEND_MESSAGE_REQUEST,
  })

const sendMessageFailure = (error) => ({
    type: SEND_MESSAGE_FAILURE,
    payload: {
      error: error,
    }
  })

export const sendMessage = (message) => {
    return (dispatch, getState) => {
        console.log("sendMessage_action ");
        console.log(getState());

        const data = new FormData()
        data.append('user', 1);
        data.append('chat', 1)
        data.append('content', message)

        //WORKS WITH BACKEND
        //dispatch(sendMessageRequest())
        fetch(`http://127.0.0.1:8000/chats/send_message/`,{
          method: 'POST', 
          body: data,
          mode: 'no-cors'
        })
        // .then(resp => resp.json())
        .then(() => dispatch(sendMessageSuccess(message)))
        // .catch((e) => dispatch(sendMessageFailure(e.message)))
        // try{
        //   dispatch(sendMessageRequest());
        //   dispatch(sendMessageSuccess(message));
        // }
        // catch (e) {
        //     dispatch(sendMessageFailure(e.message))
        // }
    }
}

