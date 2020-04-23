import { TGuessLang, TArgs } from './types' 
import { Langs } from './constants'
import { InvalidLangError } from './errors'


export let isLnagInList = (langString:String):TGuessLang => {
	let t:TGuessLang = {
		error: false,
        needToGuess: false,
        langString: langString,
	}
	let langArr: String[] = (langString as String).split('-');
	if (!(langArr[1] as string in Langs)) 
		t.error = true
	else {
		if (!(langArr[0] as string in Langs)) {
            t.needToGuess = true
            t.langString = langArr[1]
		}
	}
	return t
}

export function langValidate (text: String[], lang: string, defLang:boolean=false): TArgs {
    let data:TArgs = {
        "lang": lang,
        "text": text,
        "defLang": defLang,
    }
    try {
        if (isLnagInList(lang).needToGuess) {
            data.lang = isLnagInList(lang).langString as string
            data.defLang = true
        }
        if (!isLnagInList(lang).error) throw new InvalidLangError('no lang')
    }
    catch (e) {
        console.log(e)
    }
    
    return data;
}
