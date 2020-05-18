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
