import React from 'react';
import syles from './emojiButton.css'


function Emoji(props){
  return (
    <i className={props.name + " emoji"} onClick={props.onClick}/>
  );
}

function EmojiBar(props) {
    return(
        <div className = 'EmojiTool' onClick={props.handleEmojiClick}>
            <Emoji name='smile-face' onClick={props.handleEmojiClick}/>
            <Emoji name='sad-face' onClick={props.handleEmojiClick}/>
            <Emoji name='surprised-face' onClick={props.handleEmojiClick}/>
            <Emoji name='happy-face' onClick={props.handleEmojiClick}/>
        </div>
    );
}

export default EmojiBar;