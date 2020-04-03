import React from 'react';

export default function messageToBox (messageText, key) {
    return (<p key = {key} className = 'message' dangerouslySetInnerHTML={{__html:messageText}}></p>)
}
