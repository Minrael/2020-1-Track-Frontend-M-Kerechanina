import React, { useState } from 'react';
import { connect } from 'react-redux';
import { sendMessage } from '../actions/sendMessage';
import { getMessages } from '../actions/getMessage'
import submit from '../static/mailsend_104372.png';
import attach from '../static/attach-rotated_icon-icons.com_68593.png';
import styles from '../styles/globalStyles.css'


function  TemplateButton(props) {
    return (
        <button onClick = { props.onClick }>
        <img alt = { props.alt } className = 'imgButton' src={ props.Image } />
        </button>
    )
}

function FormInput(props) {

    const {placeholder, sendMsg, getMsgs } = props
    const [inputMessage, setInputMessage] = useState(''); 


    function _onSubmit(event){
        event.preventDefault();
        console.log('inputMessage: ' + inputMessage);
        sendMsg(inputMessage);
        setInputMessage('');
    }

    function _onKeyPress(event) {
        if (event.charCode === 13 && (inputMessage !== '')) {
            event.preventDefault();
            _onSubmit(event);
        }
    }
    
    function _onInputChange(event) {
      setInputMessage(event.target.value);
      console.log(inputMessage);
      event.preventDefault();
    }

    function _getMessages(event) {
        event.preventDefault();
        getMsgs();
    }

    return (
        <section className = 'chat'>
            <input className = 'input-form' placeholder = { placeholder } style = { styles } onChange = { _onInputChange } onKeyPress= { _onKeyPress } />
            < TemplateButton alt = 'submit-button' Image = { submit } onClick = { _onSubmit } />
            < TemplateButton alt = 'attach-button' Image = { attach } onClick = { _getMessages}/>
        </section>
        )
}

const mapDispatchToProps = (dispatch) => ({
    sendMsg: (inputMessage) => dispatch(sendMessage(inputMessage)),
    getMsgs: () => dispatch(getMessages()),
})

export default connect(
    null,
    mapDispatchToProps,
)(FormInput)