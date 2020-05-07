export type TApiResponse = {
    code: Number,
    lang: String,
    text: Array<String>,
}

export type TArgs = {
    lang: string,
    text: Array<String>,
    defLang?: boolean,
}

export type TGuessLang = {
    error: boolean,
    needToGuess: boolean,
    langString: String,
}

export type userException = {
    name: string,
    message: string,
}

export type newType = {
    
}