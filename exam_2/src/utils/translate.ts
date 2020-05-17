import { TApiResponse, TApiResponseLang } from './types' 
import { URLDOMEN, URLPATH } from './constants'
//import { APIKEY } from './API_KEY'
import { someError, NetError } from './errors'
//import { langValidate } from './inputValidate'

const APIKEY = process.env.api

let status = (response: Response) => {
	if (response.status !== 200) {
		return Promise.reject(new NetError(response.statusText))
	}
	return Promise.resolve(response)
}

let toJson = (response: void|Response): Promise<any> => {
	if (response)
	return response.json()
	else return Promise.reject(response)
}

export const getLanguages = () => {
    return fetch(`https://translate.yandex.net/api/v1.5/tr.json/getLangs?key=${APIKEY}&ui=en`, {mode: 'no-cors'})
    .then(response => response.json())
	.catch(someError)
}

export const detectLang = (text:string[]): Promise<TApiResponseLang> => {
	const URLPRMS = `?key=${APIKEY}&text=${text}`
	const API = URLDOMEN + `/detect` + URLPRMS;
	return fetch(API, {mode: 'no-cors'})
	.then(status)
	.catch(someError)
	.then(toJson)
	.catch(someError)	
}


export default function translate (text: string[], lang: string, defLang:boolean=false): Promise<TApiResponse>{
	//let data = langValidate(text, lang, defLang)
	const URLPRMS = `?key=${APIKEY}&text=${text}&lang=${lang}&format=plain`
	const API = URLDOMEN + URLPATH + URLPRMS;

	return fetch(API, {mode: 'no-cors'})
		.then(status)
		.catch(someError)
		.then(toJson)
		.catch(someError)		
}
