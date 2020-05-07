import { isString, isArray } from 'is-all-utils';

/**
 * @description A function that merges given class names, no matter their format. Filters out invalid class names as well.
 * @param names any[]
 */
export const classnamesFast = (...names: any[]) => {
   return names
      .reduce(
         (classname, arg) =>
            isString(arg) || isArray(arg) ? classname.concat(arg) : classname,
         [],
      )
      .filter(Boolean)
      .join(' ');
};

export { classnamesFast as clsf };

export default classnamesFast;
