import React from 'react';
import { connect } from 'react-redux';
import { sendMessage } from '../actions';

const Msg = (props) => (
    <button onClick = {() => props.sendMessage()} ></button>

)

const MapStateToProps = (state) => ({
    message: state.message.message,
})

export default connect(
    MapStateToProps,
    { sendMessage }
)(Msg)