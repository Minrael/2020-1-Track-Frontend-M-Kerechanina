import React from 'react';
import { connect } from 'react-redux';
import { getMessages } from '../actions/getMessage';

function Message (msg) {
    return (
        <p>{ msg }</p>
    )
}

function MessageList(props) {

    const { messages } = props.msgs
    let msgs_render = []

    for (let i=0; i<messages.length; i++) {
        let m_div = (
            <p key={i}>{messages[i]}</p>
        );
        msgs_render.push(m_div);
    }
    return (
    <div className='Message-list'>
        { msgs_render }
    </div>
    )
}

const mapStateToProps = (state) => ({
    msgs: state.sendMessage,
})

export default connect(
    mapStateToProps,
    { getMessages },
)(MessageList)

 /*messages.map((m) => (
            <Message key = {} msg = {m}/>)) */