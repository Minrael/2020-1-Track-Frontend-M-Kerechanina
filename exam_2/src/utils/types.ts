export type TApiResponse = {
    code: Number,
    lang: string,
    text: string[],
}

export type TApiResponseLang = {
    code: Number,
    lang: string,
}

export type TArgs = {
    lang: string,
    text: string[],
    defLang?: boolean,
}

export type TGuessLang = {
    error: boolean,
    needToGuess: boolean,
    langString: string,
}

export type userException = {
    name: string,
    message: string,
}