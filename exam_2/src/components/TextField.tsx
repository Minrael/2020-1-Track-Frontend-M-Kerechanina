import * as React from 'react'
import * as T from '../types/TextField.types'
import styles from '../styles/TextField.module.css'

const TextField = (props:T.ITextField) => {

    return(

      <textarea
        className = {styles.textArea}
        onChange = {props.handleChange} 
        onKeyPress = {props.handleKeyPress}
        placeholder = {props.placeholder} 
        value = {props.value}>
      </textarea>

  )
}

export default TextField