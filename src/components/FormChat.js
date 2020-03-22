import React from 'react';
import styles from '../styles/globalStyles.css';
import FormInput from './FormInput';
import MessageList from './MessageList'
import Header from './Header'
//import styled from '@emotion/styled'


export default function FormChat() {
    return (
    <section className={styles.FormChat}>
      <Header/>
      <MessageList />
      <FormInput placeholder = 'Cообщение'/>
    </section>
    )
}