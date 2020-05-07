"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const errors_1 = require("./errors");
//import { langValidate } from './inputValidate'
// const fetch = require('node-fetch');
// if (!globalThis.fetch) {
// 	globalThis.fetch = fetch;
// }
let status = (response) => {
    if (response.status !== 200) {
        return Promise.reject(new errors_1.NetError(response.statusText));
    }
    return Promise.resolve(response);
};
let toJson = (response) => {
    return response.json();
};
function translate(text, lang, defLang = false) {
    //let data = langValidate(text, lang, defLang)
    let URLPRMS = `?key=${constants_1.APIKEY}&text=${text}&lang=${lang}&format=plain`;
    let API = constants_1.URLDOMEN + constants_1.URLPATH + URLPRMS;
    return fetch(API)
        .then(status)
        .catch(errors_1.someError)
        .then(toJson)
        .catch(errors_1.someError);
}
exports.default = translate;
