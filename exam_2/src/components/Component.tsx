import * as React from 'react'
import * as T from '../types/Component.types'
import styles from '../styles/Component.module.css'
import TextField from './TextField'
import Button from './Button'
import { TranslateUtils }  from '../utils/index'

const LangsList = (props:T.IData) => {
  const langList = props.langList;
  return(
    <select className = {styles.selectMenu}>
      {langList.map(el => <option>{el}</option>)}
    </select>
  )

}

const Component = () => {
  const [textValue, setTextValue] = React.useState('start')
  const [textTranslated, setTextTranslated] = React.useState('ttt')
  //const [langs, setLangs] = React.useState({})
  const [state, setState] = React.useState({
    langFrom: 'en',
    langTo: 'ru',
    langList: ['ru', 'en']
  } as T.IState)

  
  const handleChange = (event:any/*:React.SyntheticEvent<HTMLInputElement>*/) => {
      event.preventDefault();
      setTextValue(event.target.value);
      setState({
        langFrom: 'en',
        langTo: 'ru',
        langList: ['ru', 'en']
      } as T.IState)
  }
  // const handleSubmit = () => {
  //     if (textValue !== '') {
  //       translateInputText();
  //   }
  // }

//   React.useEffect(() => {
//     fLang()    
//     .then((data:any) => {
//       console.log(data);
//       setLangs(data.langs)
//     });
// }, [langs])

  React.useEffect(() => {
      const ln = state.langFrom + '-' + state.langTo
      TranslateUtils([textValue], ln )    
      .then((data:any) => {
        console.log(data);
        setTextTranslated(data.text[0])
      });
  }, [textValue, state.langFrom, state.langTo])


  return(
    <div className = {styles.area}>
      <div className = {styles.buttonsContainer}>
        <div className = {styles.inputLangArea}>
          <Button buttonName = "Detect lang"/>
          <Button buttonName = "English"/>
          <Button buttonName = "Russian"/>
          <LangsList langList = {state.langList}/>
        </div>
        <div className = {styles.outputLangArea}>
          <Button buttonName = "Russian"/>
          <Button buttonName = "English"/>
          <LangsList langList = {state.langList}/>
        </div>
      </div>
      <div className = {styles.textConteiner}>
        <TextField 
          handleChange = {handleChange}/>
        <TextField
         value = {textTranslated}/>
      </div>
    </div>
  )
}

export default Component