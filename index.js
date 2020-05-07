"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @description A function that merges given class names, no matter their format. Filters out invalid class names as well.
 * @param names any[]
 */
exports.classnamesFast = (...names) => {
    return names
        .reduce((classname, arg) => typeof arg === 'string' || arg instanceof Array
        ? classname.concat(arg)
        : classname, [])
        .filter(Boolean)
        .join(' ');
};
exports.clsf = exports.classnamesFast;
exports.default = exports.classnamesFast;
