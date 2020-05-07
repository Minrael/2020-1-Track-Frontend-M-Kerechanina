import * as React from 'react'
import * as T from './TextField.types'
import styles from './TextField.module.css'

const TextField = (props:T.ITextField) => {

    return(
    <div>
      <textarea onChange = {props.handleChange} onKeyPress = {props.handleKeyPress} placeholder = {props.placeholder}></textarea>
    </div>
  )
}

export default TextField