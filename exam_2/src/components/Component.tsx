import * as React from 'react'
import * as T from './Component.types'
import styles from './Component.module.css'
import TextField from './TextField'
import Button from './Button'
import {TranslateUtils}  from '../ts/utils/index'

const Component = () => {
  const [textValue, setTextValue] = React.useState('start')
  const [textTranslated, setTextTranslated] = React.useState('ttt')

  
  const handleChange = (event:any/*:React.SyntheticEvent<HTMLInputElement>*/) => {
      event.preventDefault();
      setTextValue(event.target.value);
  }
  // const handleSubmit = () => {
  //     if (textValue !== '') {
  //       translateInputText();
  //   }
  // }

  React.useEffect(() => {
      TranslateUtils([textValue], 'en-ru')    
      .then((data:any) => {
        console.log(data);
        setTextTranslated(data.text[0])
      });
  }, [textValue])


  return(
    <div className = {styles.area}>
      <textarea className = {styles.inputForm} onChange = {handleChange}></textarea>
      
      <textarea className = {styles.inputForm} value = {textTranslated}></textarea>
    </div>
  )


  //return(<TextField handleChange = {handleChange} handleKeyPress = {handleKeyPress} placeholder = "Input text" />
  // <button className = {styles.translateButton} onClick = {handleSubmit}/>
  // )
}

export default Component