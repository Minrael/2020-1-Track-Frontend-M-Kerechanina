import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getMessages } from '../../actions/getMessage';
import messageToBox from './MessageBox';

const MessageList = (props) => {

    const { messages } = props.msgs;

    /*const [MessagesBack, setMessagesBack] = useState([])

    useEffect( () => {
        fetch(`https://maria-kerechanina.chickenkiller.com/chats/chat_message_list/`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setMessagesBack(data['messages'].reverse());
        });
    }, []);*/

    const replaceEmoji = (msg, key) => {
        let withEmoji = msg.replace(/&#(\w+)#&/g, ' <i class="$1 emoji"></i> ');
        let messageBox = messageToBox(withEmoji, key);
        return(messageBox);
    } 
    
    return ( 
        <div className='Message-list'>
            { /*MessagesBack && MessagesBack.map(msg => replaceEmoji(msg['content'], Math.floor(Math.random()*10000))) */
             messages && messages.map(msg => replaceEmoji(msg, Math.floor(Math.random()*10000))) }
        </div>
    );  
}

const mapStateToProps = (state) => ({
    msgs: state.sendMessage,
})

export default connect(
    mapStateToProps,
    { getMessages },
)(MessageList)
