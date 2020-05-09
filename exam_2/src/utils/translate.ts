import { TApiResponse } from './types' 
import { APIKEY, URLDOMEN, URLPATH } from './constants'
import { someError, NetError } from './errors'
//import { langValidate } from './inputValidate'

let status = (response: Response) => {
	if (response.status !== 200) {
		return Promise.reject(new NetError(response.statusText))
	}
	return Promise.resolve(response)
}

let toJson = (response: any): any => {
	return response.json()
}

export const getLanguages = () => {
    return fetch(`https://translate.yandex.net/api/v1.5/tr.json/getLangs?key=${APIKEY}&ui=en`)
    .then(response => response.json())
	.catch(someError)
}


export default function translate (text: String[], lang: string, defLang:boolean=false): Promise<TApiResponse>{
	//let data = langValidate(text, lang, defLang)
	let URLPRMS = `?key=${APIKEY}&text=${text}&lang=${lang}&format=plain`
	let API = URLDOMEN + URLPATH + URLPRMS;

	return fetch(API)
		.then(status)
		.catch(someError)
		.then(toJson)
		.catch(someError)		
}