export const someError = (error: Error) => {
	console.log('Error:', error.name, error.message);
}

export class InvalidLangError extends Error {
	constructor(message){
		super(message);
		this.name = 'InvalidLangError'
	}
}

export class NetError extends Error {
	constructor(message){
		super(message);
		this.name = 'NetError'
	}
}