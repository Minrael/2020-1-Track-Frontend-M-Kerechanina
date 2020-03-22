import React, { useState } from 'react';
import { connect } from 'react-redux';
import { sendMessage } from '../actions/sendMessage';
import { getMessages } from '../actions/getMessage'
import submit from '../static/mailsend_104372.png';
import attach from '../static/attach-rotated_icon-icons.com_68593.png';
import emoji from '../static/mbrismileface_99462.png'
import EmojiTool from './EmojiTool'
//import styles from '../styles/globalStyles.css'
import stls from '../styles/FormInput.css'


function  TemplateButton(props) {
    return (
        <button className = 'Button' onClick = { props.onClick }>
        <img alt = { props.alt } className = 'imgButton' src={ props.Image } />
        </button>
    )
}

function FormInput(props) {


    const {placeholder, sendMsg, getMsgs } = props
    const [inputMessage, setInputMessage] = useState(''); 
    const [emojiView, setEmojiView] = useState(false); 

    function handleSubmit(event){
        if (inputMessage !== '') {
            event.preventDefault();
            sendMsg(inputMessage);
            setInputMessage('');
        }
    }

    function handleKeyPress(event) {
        if (event.charCode === 13) {
            event.preventDefault();
            handleSubmit(event);
        }
    }
    
    function handleInputChange(event) {
      setInputMessage(event.target.value);
      event.preventDefault();
    }

    function handleGetMessages(event) {
        event.preventDefault();
        getMsgs();
    }

    function handleEmojiView(event) {
        setEmojiView(!emojiView);
    }

    function handleEmojiClick(emojiCode) {
        setInputMessage(inputMessage + '&#' + emojiCode + '#&');
        setEmojiView(false);
    }

    return (
        <section className = 'chat'>
            {emojiView === true ? <EmojiTool handleEmojiClick = { handleEmojiClick }/>:<div></div>}
            <section className = 'MessageForm'>
                <input value={inputMessage} className = 'input-form' placeholder = { placeholder } style = { stls } onChange = { handleInputChange } onKeyPress = { handleKeyPress } />
                < TemplateButton alt = 'emoji-button' Image = { emoji } onClick = { handleEmojiView}/>
                < TemplateButton alt = 'attach-button' Image = { attach } onClick = { handleGetMessages}/>
                < TemplateButton alt = 'submit-button' Image = { submit } onClick = { handleSubmit } />
            </section>   
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