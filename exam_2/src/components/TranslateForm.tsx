import * as React from 'react'
import * as T from '../types/TranslateForm.types'
import styles from '../styles/TranslateForm.module.css'
import TextField from './TextField'
import Button from './Button'
import { TranslateUtils, getLanguages, detectLang }  from '../utils/index'

const TranslateForm = () => {
  const [textValue, setTextValue] = React.useState('')
  const [textTranslated, setTextTranslated] = React.useState('')

  const [lDict, setLDict] = React.useState({})
 
  const [state, setState] = React.useState({
    langFrom: 'en',
    langTo: 'ru',
    langList: ['ru', 'en'],
    langNamesList: ['Russian', 'English'],
    isLangDetect: false,
    isLangsLoaded: false
  } as T.IState)

  React.useEffect(() => {
    const langsToList = (LanguagesDict:T.ILangDict) => {
      const listShortLangs = [];
      const listLongLangs = [];
      for (let key in LanguagesDict) {
        listShortLangs.push(key);
        listLongLangs.push(LanguagesDict[key])
      }
      setState({
        ...state,
        langList: listShortLangs,
        langNamesList: listLongLangs
      })
    }
    if (state.langList.length < 3) {
      langsToList(lDict);
    }
  }, [lDict, state])

  React.useEffect(() => {
    if (!state.isLangsLoaded) {
      getLanguages()    
      .then((data:any) => {
        setState({
          ...state,
          isLangsLoaded:true
        })
        setLDict(data.langs);
      });
    }
  },[state.langList, state.langNamesList, lDict, state.isLangsLoaded, state])

  
  const LangsList = (props:T.ILangsList) => {
    const langList = props.langList;
    let handleLangChange = props.handleLangChange;
    return(
      <select onChange = {handleLangChange} className = {styles.selectMenu}>
        {langList.map(el => <option key = {el as string}>{el}</option>)}
      </select>
    )
  }

  const handleLangTOChange = (event:any) => {
    const Longlang = event.target.value;
    let ind = state.langNamesList.indexOf(Longlang);
    const lang = state.langList[ind];
    setState({
      ...state,
      langTo: lang as string
    })
  }

  const handleLangFROMChange = (event:any) => {
    const Longlang = event.target.value;
    let ind = state.langNamesList.indexOf(Longlang);
    const lang = state.langList[ind];
    setState({
      ...state,
      langFrom: lang as string
    })
  }

  const handleInputChange = (event:any/*:React.SyntheticEvent<HTMLInputElement>*/) => {
    event.preventDefault();
    setTextValue(event.target.value);
  }

  React.useEffect(() => {
    const detectLanguage = () => {
      detectLang([textValue])
      .then((data:any) => {
        console.log(data.lang)
        setState({
          ...state,
          isLangDetect: false,
          langFrom: data.lang
        })
      })
    }
    if (state.isLangDetect && textValue) {
      detectLanguage();
    }
  }, [state.isLangDetect, textValue, state])

  const translate = () => {
    if (textValue) {
      let ln = state.langFrom + '-' + state.langTo
      console.log(textValue, ln)
      TranslateUtils([textValue], ln )    
      .then((data:any) => {
        console.log(data)
        setTextTranslated(data.text[0])
      });
    }
  }

  const handleKeyPress = (event:any) => {
    if (event.charCode === 13) {
      event.preventDefault();
      translate();
    }
  }
 
  return(
    <div className = {styles.area}>
      <div className = {styles.buttonsContainer}>
        <div className = {styles.inputLangArea}>
          <Button buttonName = "Detect lang" handleClick = {() => setState({...state, isLangDetect: true})} />
          <button className={styles.langButton}>{state.langNamesList[state.langList.indexOf(state.langFrom)]}</button>
          <Button buttonName = "English" handleClick = {()=>setState({...state, langFrom: 'en'})}/>
          <LangsList langList = {state.langNamesList} handleLangChange = {handleLangFROMChange}/>
        </div>
        <div className = {styles.outputLangArea}>
          <button className={styles.langButton}>{state.langNamesList[state.langList.indexOf(state.langTo)]}</button>
          <Button buttonName = "Russian" handleClick = {()=>setState({...state, langTo: 'ru'})}/>
          <Button buttonName = "English" handleClick = {()=>setState({...state, langTo: 'en'})}/>
          <LangsList langList = {state.langNamesList} handleLangChange = {handleLangTOChange}/>
        </div>
      </div>
      <div className = {styles.textConteiner}>
        <TextField 
          handleChange = {handleInputChange}
          handleKeyPress = {handleKeyPress}  
        />
        <TextField
         value = {textTranslated}/>
      </div>
    </div>
  )
}

export default TranslateForm
