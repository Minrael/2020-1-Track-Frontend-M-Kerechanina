import React from 'react';
import styles from '../styles/globalStyles.css';
import FormInput from './FormInput/FormInput';
import MessageList from './MessageList/MessageList'
import Header from './Header/Header'

export default function FormChat() {
    return (
    <section className={styles.FormChat}>
      <Header/>
      <MessageList />
      <FormInput placeholder = 'Cообщение'/>
    </section>
    )
}