import React from 'react';
import styles from '../styles/globalStyles.css';
import FormInput from './FormInput/FormInput';
import MessageList from './MessageList/MessageList';
import Header from './Header/Header';
import Boundary from './Boundary'

// const ExceptionButton = () => {
//   return <button onClick={methodDoesNotExist}>Break the world</button>;
// }


export default function FormChat() {

    return (
      <Boundary>
        <section className={styles.FormChat}>
          <Header/>
          <MessageList />
          <FormInput placeholder = 'Cообщение'/>
        </section>
      </Boundary>
    )
}