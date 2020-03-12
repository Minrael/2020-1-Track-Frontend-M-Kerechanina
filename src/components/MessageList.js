import React from 'react';
import { connect } from 'react-redux';
import { getMessages } from '../actions/getMessage';
import smile from '../static/slightly-smiling-face.png'
import styles from '../styles/globalStyles.css'

/*function Message (msg, key) {
    if (msg=='smile') {
        return <p className = 'message' key = {key}>{smile}</p>
    }

    return (
        <p className = 'message' key = {key}>{ msg }</p>
    )
}*/

function emojiToImage(emojiCode, key) {
    return (
        <p className = 'message' key = {key}><img src={smile}/></p>
    )
}

function MessageList(props) {

    const { messages } = props.msgs;
    let msgs_render = [];

    let i = 0;
    if (typeof(messages)!=='undefined'){
        messages.forEach( function(msg) {
            if (msg.indexOf(':::') === -1)  {
                msgs_render.push(<p className = 'message' key = { i }>{ msg }</p>);
                i += 1;
            }
            else {
                msgs_render.push(emojiToImage('smile-face', i));
                i += 1;
            }
        });
        

    console.log(typeof messages);
    console.log(messages);

    return ( 
        <div className='Message-list'>
            { msgs_render }
        </div>
    );

    }  
        else {
        console.log('');
    }
}

const mapStateToProps = (state) => ({
    msgs: state.sendMessage,
})

export default connect(
    mapStateToProps,
    { getMessages },
)(MessageList)

