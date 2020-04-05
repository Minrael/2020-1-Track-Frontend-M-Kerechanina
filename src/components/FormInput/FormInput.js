import React, { useState } from 'react';
import { connect } from 'react-redux';
import { sendMessage } from '../../actions/sendMessage';
import { getMessages } from '../../actions/getMessage'
import submit from '../../static/mailsend_104372.png';
import attach from '../../static/attach-rotated_icon-icons.com_68593.png';
import emoji from '../../static/mbrismileface_99462.png'
import EmojiTool from './EmojiTool'
import stls from '../../styles/FormInput.css'
import TemplateButton from './TemplateButton'

const FormInput = (props) => {

    const {placeholder, sendMsg, getMsgs } = props
    const [inputMessage, setInputMessage] = useState(''); 
    const [emojiView, setEmojiView] = useState(false); 

    const handleSubmit = (event) => {
        if (inputMessage !== '') {
            event.preventDefault();
            sendMsg(inputMessage);
            setInputMessage('');
        }
    }

    const handleKeyPress = (event) => {
        if (event.charCode === 13) {
            event.preventDefault();
            handleSubmit(event);
        }
    }
    
    const handleInputChange = (event) => {
        setInputMessage(event.target.value);
        event.preventDefault();
    }

    const handleGetMessages = (event) => {
        event.preventDefault();
        getMsgs();
    }

    const handleEmojiView = (event) => {
        setEmojiView(!emojiView);
    }

    const handleEmojiClick = (emojiCode) => {
        setInputMessage(inputMessage + '&#' + emojiCode + '#&');
        setEmojiView(false);
    }

    return (
        <section className = 'chat'>
            {emojiView && <EmojiTool handleEmojiClick = { handleEmojiClick }/>}
            <section className = 'MessageForm'>
                <input value={inputMessage} className = 'input-form' placeholder = { placeholder } style = { stls } onChange = { handleInputChange } onKeyPress = { handleKeyPress } />
                <TemplateButton alt = 'emoji-button' Image = { emoji } onClick = { handleEmojiView}/>
                <TemplateButton alt = 'attach-button' Image = { attach } onClick = { handleGetMessages}/>
                <TemplateButton alt = 'submit-button' Image = { submit } onClick = { handleSubmit }/>
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