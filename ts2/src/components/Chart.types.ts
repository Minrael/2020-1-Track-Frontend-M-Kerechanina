export interface Idata {
    filename: string
  }

export interface IProps {
  filename:string,
  country: string,
  height: string,
  width: string
}

type strORundef = string|undefined

export interface IDataSet {
  "No": number,
  "Country/Region": strORundef,
  "Province/State": strORundef,
  "Confirmed": number,
  "Deaths": strORundef,
  "Date": string,
  "Recovered": strORundef
}