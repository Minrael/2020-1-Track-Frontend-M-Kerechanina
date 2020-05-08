"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class CacheStorage {
    constructor() {
        this.m = new Map();
    }
    setCache(key, value) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('set');
            return this.m.set(key, value);
        });
    }
    getCache(key) {
        return __awaiter(this, void 0, void 0, function* () {
            const value = yield this.m.get(key);
            return value;
        });
    }
}
exports.CacheStorage = CacheStorage;
function cacheDecorator(target) {
    return function (...args) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    };
}
exports.cacheDecorator = cacheDecorator;
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
