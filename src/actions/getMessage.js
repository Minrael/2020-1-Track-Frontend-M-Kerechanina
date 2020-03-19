import {
  GET_MESSAGE_REQUEST,
  //GET_MESSAGE_SUCCESS,
  //GET_MESSAGE_FAILURE,

} from '../constants/ActionTypes'



const getMessageSuccess = (/*messages*/) => ({
    type: GET_MESSAGE_REQUEST,
    /*payload: messages,*/
  })


export const getMessages = () => {
    return (dispatch, getState) => {
        console.log("getMessage_action ");
        console.log(getState().sendMessage.messages);
        dispatch(getMessageSuccess());
    }
}