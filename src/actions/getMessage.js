import {
  GET_MESSAGE_REQUEST,
  GET_MESSAGE_SUCCESS, 
  GET_MESSAGE_FAILURE,

} from '../constants/ActionTypes'

//import Centrifuge from 'centrifuge'

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
    return (dispatch, getState) => {
        console.log("getMessage_action ");
        console.log(getState().getMessage.messages);
        try {
          dispatch(getMessagesStarted());
          dispatch(getMessageSuccess(['messages from back']));
        }
        catch (e) {
          dispatch(getMessagesFailure(e.message))
        }

        // Messages from back
        // DOESN'T WORK
        // fetch(`/chats/chat_message_list/`)
        // .then(res => res.json())
        // .then(data => {
        //     //console.log(data);
        //     let mesList = data['messages'].reverse();
        //     let msgs = []
        //     mesList.forEach(element => {
        //         msgs.push(element.content)
        //     });
        //     dispatch(getMessageSuccess(msgs));   
        // })
        // .catch((e) => {
        //   dispatch(getMessagesFailure(e.message))
        // })


    }
}

/*export const openWebSocket = () => {
  return (dispatch) => {

      socket = new Centrifuge('ws://127.0.0.1:8000/connection/websocket')
      socket.connect()

      socket.on('connect')

      socket.on('disconnect', (context) => {
        console.log('disconnected')
      })

      subscription = socket.subscribe('news', (message) => {
        console.log(message)
        dispatch(getMessageSuccess(message))
      })
  }
}
}*/
