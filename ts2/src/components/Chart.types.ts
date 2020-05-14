export interface Idata {
    filename: string
  }

type strORundef = string|undefined

export interface IDataSet {
  "Country/Region": strORundef,
  "Province/State": strORundef,
  "Confirmed": strORundef,
  "Deaths": strORundef,
  "Date": strORundef,
  "Recovered": strORundef
}