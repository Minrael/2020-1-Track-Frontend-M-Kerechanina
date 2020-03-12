import React from 'react';
import { connect } from 'react-redux';
import { getMessages } from '../actions/getMessage';
import smile from '../static/slightly-smiling-face.png'
import styles from '../styles/globalStyles.css'

function Message (msg, key) {
    /*if (msg=='smile') {
        return <p className = 'message' key = {key}>{smile}</p>
    }*/

    return (
        <p className = 'message' key = {key}>{ msg }</p>
    )
}

function MessageList(props) {

    const { messages } = props.msgs;
    let msgs_render = [];

    let i = 0;
    if (typeof(messages)!=='undefined'){
        messages.forEach( function(msg) {
            msgs_render.push(<p className = 'message' key = { i }>{ msg }</p>);
            i += 1;
        });
    console.log(typeof messages);
    console.log(messages);




    return ( 
        <div className='Message-list'>
            { msgs_render }
        </div>
    )

    }
    else { 
        console.log(typeof messages);
        console.log(messages);
        return(<div>no messages</div>)
    }

    
}

const mapStateToProps = (state) => ({
    msgs: state.sendMessage,
})

export default connect(
    mapStateToProps,
    { getMessages },
)(MessageList)

 /*messages.map((m) => (
            <Message key = {} msg = {m}/>)) 



        for (let i=0; i<messages.length; i++) {
            let m_div = (
                <p key={i}>{messages[i]}</p>
            )
        msgs_render.push(m_div);
        }

    return (messages.map((m, key) => (
        <div key = {key}>
        <Message  msg = {m}/>
        </div>
        )
    )
    )
    */