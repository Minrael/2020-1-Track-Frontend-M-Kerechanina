"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.someError = (error) => {
    console.log('Error:', error.name, error.message);
};
class InvalidLangError extends Error {
    constructor(message) {
        super(message);
        this.name = 'InvalidLangError';
    }
}
exports.InvalidLangError = InvalidLangError;
class NetError extends Error {
    constructor(message) {
        super(message);
        this.name = 'NetError';
    }
}
exports.NetError = NetError;
