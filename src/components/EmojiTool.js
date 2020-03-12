import React from 'react';
import syles from './EmojiTool.css'


function Emoji(props){
  return (
    <i className={props.name + " emoji"} onClick={() => props.onClick(props.name)}/>
  );
}

function EmojiTool(props) {
    return(
        <div className = 'EmojiTool'>
            <Emoji name='smile-face' onClick={props.handleEmojiClick}/>
            <Emoji name='sad-face' onClick={props.handleEmojiClick}/>
            <Emoji name='surprised-face' onClick={props.handleEmojiClick}/>
            <Emoji name='happy-face' onClick={props.handleEmojiClick}/>
        </div>
    );
}

export default EmojiTool;