type TKeyCache = {
    "text": String[],
    "lang": string
}
type TValueCache = string

interface mem {
    key: TKeyCache,
    value: TValueCache
}

export class CacheStorage {
    m:Map<string, TValueCache> =  new Map()
    constructor() {
    }
    async setCache (key:string, value:TValueCache): Promise<any> {
        console.log('set');
        return this.m.set(key,value);
    }
    async getCache(key:string): Promise<any> {
        const value = await this.m.get(key)
        return value
    }
}

export function cacheDecorator(target: Function):any {
    return  async function (...args){

    }
}


/*let myCache = new Map<string, TValueCache>()
export function mCache(key:TKeyCache, value:TValueCache, fn){
    if (key.text[0] as string in myCache) {
        console.log('data from cache ->')
        return myCache.get(key.text[0] as string)
    }
    else {
        let value = fn(key)
        myCache.set(key.text[0] as string, value )
        return value
    }
}*/