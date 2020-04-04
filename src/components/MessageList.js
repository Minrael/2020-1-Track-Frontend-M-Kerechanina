import React from 'react';
import { connect } from 'react-redux';
import { getMessages } from '../actions/getMessage';
import messageToBox from './MessageBox';

const MessageList = (props) => {

    const { messages } = props.msgs;

    const replaceEmoji = (msg, key) => {
        let withEmoji = msg.replace(/&#(\w+)#&/g, ' <i class="$1 emoji"></i> ');
        let messageBox = messageToBox(withEmoji, key);
        return(messageBox);
    } 
    
    return ( 
        <div className='Message-list'>
            { messages && messages.map(msg => replaceEmoji(msg, Math.floor(Math.random()*10000))) }
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
