import React from 'react';
import { connect } from 'react-redux';
import { getMessages } from '../actions/getMessage';

function MessageList(props) {

    const { messages } = props.msgs;
    let msgs_render = [];

    let i = 0;
    if (typeof(messages)!=='undefined'){
        messages.forEach( function(msg) {
            if (msg.indexOf('&#') === -1)  {
                let messageBox = (<p key = {i} className = 'message'>{ msg }</p>);
                msgs_render.push(messageBox);
                i += 1;
            }
            else {
                let withEmoji = msg.replace(/&#(\w+)#&/g, ' <i class="$1 emoji"></i> ');
                let messageBox = (<p key = {i} className = 'message' dangerouslySetInnerHTML={{__html:withEmoji}}></p>);
                msgs_render.push(messageBox);
                i += 1;
            }
        });

    return ( 
        <div className='Message-list'>
            { msgs_render }
        </div>
    );
    }  
}

const mapStateToProps = (state) => ({
    msgs: state.sendMessage,
})

export default connect(
    mapStateToProps,
    { getMessages },
)(MessageList)
