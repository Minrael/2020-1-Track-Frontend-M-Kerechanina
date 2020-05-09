export interface ILangsList{
    langList: String[],
    handleLangChange?: (e:any) => void
}

export interface IData {
    
}

export interface IState{
    langFrom: string,
    langTo: string,
    langList: Array<String>,
    langNamesList: Array<String>,
    isLangDetect: boolean,
    isLangsLoaded: boolean
}

export interface ILangDict {
    [p:string]: string
}