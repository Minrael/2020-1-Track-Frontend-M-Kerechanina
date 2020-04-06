import React from 'react';

const  TemplateButton = (props) => {
    return (
        <button id = {props.id} className = 'Button' onClick = { props.onClick }>
        <img alt = { props.alt } className = 'imgButton' src={ props.Image } />
        </button>
    )
}
export default TemplateButton;