import React from 'react';

const messageToBox = (messageText, key) => {
    return (<p key = {key} className = 'message' dangerouslySetInnerHTML={{__html:messageText}}></p>)
}

export default messageToBox;
