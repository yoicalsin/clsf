import { isString, isArray } from 'is-all-utils';

/**
 * @description A function that merges given class names, no matter their format. Filters out invalid class names as well.
 * @param names any[]
 */
export const clsf = (...names: any[]): string => {
   return names
      .reduce(
         (classname, arg) =>
            isString(arg) || isArray(arg) ? classname.concat(arg) : classname,
         [],
      )
      .filter(Boolean)
      .join(' ');
};

export default clsf;
