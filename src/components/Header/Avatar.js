import React from 'react'
import avatar from '../../static/american.svg';

export default function Avatar() {
    return (
        <div className = 'divAvatar'>
            <img className = 'avatar' alt='avatar' src = { avatar } />
        </div>)
}