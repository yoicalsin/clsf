"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const is_all_utils_1 = require("is-all-utils");
/**
 * @description A function that merges given class names, no matter their format. Filters out invalid class names as well.
 * @param names any[]
 */
exports.classnamesFast = (...names) => {
    return names
        .reduce((classname, arg) => is_all_utils_1.isString(arg) || is_all_utils_1.isArray(arg) ? classname.concat(arg) : classname, [])
        .filter(Boolean)
        .join(' ');
};
exports.clsf = exports.classnamesFast;
exports.default = exports.classnamesFast;
