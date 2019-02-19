"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isNullOrWhiteSpace(input) {
    if (typeof input === 'undefined' || input == null) {
        return true;
    }
    return input.replace(/\s/g, '').length < 1;
}
exports.default = isNullOrWhiteSpace;
