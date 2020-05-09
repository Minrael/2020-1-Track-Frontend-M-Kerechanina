import * as React from 'react'
import * as T from '../types/Button.types'
import styles from '../styles/Button.module.css'

const Button = (props:T.IButtonProps) => {

  return(
    <div>
      <button className = {styles.Button} onClick = {props.handleClick}>{props.buttonName}</button>
    </div>
  )
}

export default Button