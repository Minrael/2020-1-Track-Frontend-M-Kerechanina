import { TApiResponse, TApiResponseLang } from './types' 
import { URLDOMEN, URLPATH } from './constants'
//import { APIKEY } from './API_KEY'
import { someError, NetError } from './errors'
//import { langValidate } from './inputValidate'

const APIKEY = process.env.api_key
const lang = process.env.lang

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
    return fetch(`https://translate.yandex.net/api/v1.5/tr.json/getLangs?key=trnsl.1.1.20200517T214413Z.4b156f534ea17b17.375da99471cffe1680409ae5f552ff3095f0bab6&ui=${lang}`, {mode: 'no-cors'})
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
