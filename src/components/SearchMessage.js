import React, { useState } from 'react';
import submit from '../static/mailsend_104372.png';
import messageToBox from './MessageList/MessageBox'

//WORKS WITH BACKEND (ElasticSearch)
const SearchMessage = (props) => {
    const [found, setFound] = useState('');
    const [val, setVal] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        search(val);
        setVal('');
    }

    const search = (word) => {
        fetch(`/chats/message_search/${word}`, {mode:'no-cors'})
        .then(res => res.json())
        .then(data => {
            let mesList = data['messages'];
            setFound(mesList);
            console.log(mesList);
      })
    }

    const handleSearchChange = (event) => {
        setVal(event.target.value);
        event.preventDefault();
    }

    return (
        <section>
            {found && found.map(msg => messageToBox(msg, Math.floor(Math.random()*10000)))}
            <input value={val} className = 'input-form' placeholder = 'search' onChange = { handleSearchChange }/>
            <button onClick = { handleSubmit }><img alt = 'search' src = {submit}/></button>
        </section>
    )
}

export default SearchMessage;