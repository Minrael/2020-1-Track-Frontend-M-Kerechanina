import React from 'react';
import styles from '../../styles/EmojiTool.css'
import Emoji from './Emoji'

const EmojiTool = (props) => {
    return(
        <div className = {styles.EmojiTool}>
            <Emoji name='smile' handleClick={props.handleEmojiClick}/>
            <Emoji name='sad' handleClick={props.handleEmojiClick}/>
            <Emoji name='surprised' handleClick={props.handleEmojiClick}/>
            <Emoji name='angry' handleClick={props.handleEmojiClick}/>
            <Emoji name='happy' handleClick={props.handleEmojiClick}/>
            <Emoji name='kiss' handleClick={props.handleEmojiClick}/>
            <Emoji name='mask' handleClick={props.handleEmojiClick}/>
            <Emoji name='tongue' handleClick={props.handleEmojiClick}/>
            <Emoji name='crying' handleClick={props.handleEmojiClick}/>
        </div>
    );
}

export default EmojiTool;