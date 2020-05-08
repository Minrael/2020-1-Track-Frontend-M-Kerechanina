//import * as U from '../utils/constants'
export interface IData{
    langList: String[]
}


// export interface IState{
//     langFrom: U.Langs,
//     langTo: U.Langs,
//     langList: []
// }


export interface IState{
    langFrom: string,
    langTo: string,
    langList: Array<String>
}