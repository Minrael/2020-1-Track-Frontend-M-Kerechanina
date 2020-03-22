import React from 'react';
import styles from '../styles/EmojiTool.css'


function Emoji(props){
  return (
    <i className={props.name + " emoji"} onClick={() => props.onClick(props.name)}/>
  );
}

function EmojiTool(props) {
    return(
        <div className = {styles.EmojiTool}>
            <Emoji name='smile' onClick={props.handleEmojiClick}/>
            <Emoji name='sad' onClick={props.handleEmojiClick}/>
            <Emoji name='surprised' onClick={props.handleEmojiClick}/>
            <Emoji name='angry' onClick={props.handleEmojiClick}/>
            <Emoji name='happy' onClick={props.handleEmojiClick}/>
            <Emoji name='kiss' onClick={props.handleEmojiClick}/>
            <Emoji name='mask' onClick={props.handleEmojiClick}/>
            <Emoji name='tongue' onClick={props.handleEmojiClick}/>
            <Emoji name='crying' onClick={props.handleEmojiClick}/>
        </div>
    );
}

export default EmojiTool;