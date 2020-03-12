import React, { useState } from 'react';
import { connect } from 'react-redux';
import { sendMessage } from '../actions/sendMessage';
import { getMessages } from '../actions/getMessage'
import submit from '../static/mailsend_104372.png';
import attach from '../static/attach-rotated_icon-icons.com_68593.png';
import emoji from '../static/mbrismileface_99462.png'
import EmojiTool from './EmojiTool'
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
    const [emojiView, setEmojiView] = useState(false); 

    /*let i = 0;
    let Msg = {
        id: i,
        data: '',
    }*/

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
        setInputMessage(inputMessage + emojiCode);
        setEmojiView(false);
    }

    return (
        <section className = 'chat'>
            {emojiView === true ? <EmojiTool handleEmojiClick = { handleEmojiClick }/>:<div></div>}
            <input value={inputMessage} className = 'input-form' placeholder = { placeholder } style = { styles } onChange = { handleInputChange } onKeyPress = { handleKeyPress } />
            < TemplateButton alt = 'submit-button' Image = { submit } onClick = { handleSubmit } />
            < TemplateButton alt = 'attach-button' Image = { attach } onClick = { handleGetMessages}/>
            < TemplateButton alt = 'emoji-button' Image = { emoji } onClick = { handleEmojiView}/>
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