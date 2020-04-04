import React from 'react';

const  TemplateButton = (props) => {
    return (
        <button className = 'Button' onClick = { props.onClick }>
        <img alt = { props.alt } className = 'imgButton' src={ props.Image } />
        </button>
    )
}
export default TemplateButton;