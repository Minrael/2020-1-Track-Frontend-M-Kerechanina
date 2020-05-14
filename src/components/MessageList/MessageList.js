import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
//import useIsMounted from 'ismounted'
import { getMessages/*, openWebSocket, closeWebSocket*/ } from '../../actions/getMessage';
//import { sendMessage } from '../../actions/sendMessage';
import messageToBox from './MessageBox';
import Centrifuge from 'centrifuge'

const MessageList = (props) => {

    const { messages } = props.msgs;
    const { lddMessages } = props.loadedMessages;


    //const [MessagesBack, setMessagesBack] = useState([]);


    // CENTRIFUGO 
    // websocket works, message doesn't 
    useEffect(() => {
    let centrifuge = new Centrifuge('ws://localhost:8002/connection/websocket')//, "e59ad6ed-d35d-4b5c-89cb-d8f5bf37beb6")
    //centrifuge.setToken('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI0MiJ9.dHk1mvBEx4dVXnvWoaVg_rcrBiuhWdXEriZpdyIqMdU')
    centrifuge.on('connect', (context) => {
        console.log('yes')
      });
    centrifuge.subscribe('news', (message) => {
        console.log(message)
      });
    centrifuge.publish('news', {"input": "Hello!"}).then(function(res) {console.log('success')});
    centrifuge.connect();
    }, [messages])


//WORKS WITH BACHEND

//    useEffect(() => {
//         fetch(`/chats/chat_message_list/`)
//         .then(res => res.json())
//         .then(data => {
//             let mesList = data['messages'];
//             let msgs = []
//             mesList.forEach(element => {
//                 msgs.push(element.content)
//             });
//             setMessagesBack(msgs);
//         });
//    },[MessagesBack])
// RENDER
//    { MessagesBack && MessagesBack.map(msg => replaceEmoji(msg, Math.floor(Math.random()*10000))) }
 
    const resEnd = React.useRef(null) 

    useEffect(() => {
        const scrollInto = (target) => {
          target.current.scrollIntoView()
        }
        scrollInto(resEnd)
      })


    const replaceEmoji = (msg, key) => {
        let withEmoji = msg.replace(/&#(\w+)#&/g, ' <i class="$1 emoji"></i> ');
        let messageBox = messageToBox(withEmoji, key);
        console.log(lddMessages)
        return(messageBox);
    } 

    return ( 
        <div className='Message-list'>
            { messages && messages.map(msg => replaceEmoji(msg, Math.floor(Math.random()*10000)))}  
            <div ref={resEnd}/>  
        </div>
    );  
}

const mapStateToProps = (state) => ({
    msgs: state.sendMessage,
    loadedMessages: state.getMessage
})

const mapDispatchToProps = (dispatch) => ({
    getMsgs: () => dispatch(getMessages()),
    //openWS: () => openWebSocket(),
    //closeWS: () => closeWebSocket(),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MessageList)
