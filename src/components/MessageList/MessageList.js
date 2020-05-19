import React, { useEffect/*, useState*/ } from 'react';

import { connect } from 'react-redux';
//import useIsMounted from 'ismounted'
import { getMessages/*, openWebSocket, closeWebSocket*/ } from '../../actions/getMessage';
//import { sendMessage } from '../../actions/sendMessage';
import messageToBox from './MessageBox';

//import Centrifuge from 'centrifuge'


const MessageList = (props) => {

    const { messages } = props.msgs;
    const { lddMessages } = props.loadedMessages;


    //const [MessagesBack, setMessagesBack] = useState([]);


    // CENTRIFUGO 
    // websocket works, message doesn't 

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
