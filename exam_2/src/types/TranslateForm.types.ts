import * as React from 'react'

export interface ILangsList{
    langList: string[],
    handleLangChange?: (e:React.KeyboardEvent<HTMLSelectElement>) => void
}

export interface IState{
    langFrom: string,
    langTo: string,
    langList: string[],
    langNamesList: string[],
    isLangDetect: boolean,
    isLangsLoaded: boolean
}

export interface ILangDict {
    [p:string]: string
}

type TLangs = {
    [langs:string]: string
}
export type TApiListLangs = {
    dirs: string[],
    langs: TLangs
}
