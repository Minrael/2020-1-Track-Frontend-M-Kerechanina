import * as React from 'react'
import * as T from '../types/Component.types'
import styles from '../styles/Component.module.css'
import TextField from './TextField'
import Button from './Button'
import { TranslateUtils, getLanguages }  from '../utils/index'

const Component = () => {
  const [textValue, setTextValue] = React.useState('')
  const [textTranslated, setTextTranslated] = React.useState('')

  const [lDict, setLDict] = React.useState({
  })
 
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
    const lang = event.target.value;
    //const LongLang = 
    setState({
      ...state,
      langTo: lang
    })
  }

  const handleLangFROMChange = (event:any) => {
    const lang = event.target.value;
    //const LongLang = 
    setState({
      ...state,
      langFrom: lang
    })
  }

  const handleInputChange = (event:any/*:React.SyntheticEvent<HTMLInputElement>*/) => {
    event.preventDefault();
    setTextValue(event.target.value);
  }

  React.useEffect(() => {
      let ln = state.langFrom + '-' + state.langTo
      console.log(textValue, ln)
      TranslateUtils([textValue], ln )    
      .then((data:any) => {
        if (textValue) setTextTranslated(data.text[0])
      });
  }, [textValue, state.langFrom, state.langTo])


 // const detectLang:any = React.useRef(null)
  const handleClickDetect = (event:any) => {
    setState({
      isLangDetect: true,
      ...state
    });
    console.log("detect-->");
    console.log(state.isLangDetect);
}

  return(
    <div className = {styles.area}>
      <div className = {styles.buttonsContainer}>
        <div className = {styles.inputLangArea}>
          <Button buttonName = "Detect lang" handleClick = {handleClickDetect} />
          <Button buttonName = "English"/>
          <Button buttonName = "Russian" />
          <LangsList langList = {state.langList} handleLangChange = {handleLangFROMChange}/>
        </div>
        <div className = {styles.outputLangArea}>
          <Button buttonName = "Russian"/>
          <Button buttonName = "English"/>
          <LangsList langList = {state.langList} handleLangChange = {handleLangTOChange}/>
        </div>
      </div>
      <div className = {styles.textConteiner}>
        <TextField 
          handleChange = {handleInputChange}/>
        <TextField
         value = {textTranslated}/>
      </div>
    </div>
  )
}

export default Component
