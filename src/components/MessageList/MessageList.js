import React, { useEffect} from 'react';

import { connect } from 'react-redux';
import { getMessages } from '../../actions/getMessage';
import messageToBox from './MessageBox';

const MessageList = (props) => {

    const { messages } = props.msgs;
    const { lddMessages } = props.loadedMessages;
 
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
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MessageList)
