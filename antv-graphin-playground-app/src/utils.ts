/**
 * @description
 * Group items by arbitrary key.
 *
 * Example
 * https://github.com/tc39/proposal-array-grouping
 */
// callback: (item:T, index:number, array:Array<T>) => T
export const groupBy = <T>(array: Array<T>, callback: any) => {
  let result: Record<string, any[]> = {};

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    const key = callback(item) as string;
    if (!key) throw new Error('Attempted to group item by key, but no key did not exist exists.') // TODO: what is the default behavior of lodash?
    
    if (result[key] === undefined) {
      result[key] = [];
    }
    result[key].push(item);
  }
  return result;
};

// const items = [
//   {role:'dog', name: "Bear"},
//   {role:'dog', name:'Adam'},
//   {role:'cat', name: 'Anna'},
//   {role:'cat', value: 'Ben'},
// ]

// groupBy(items, (item:any, index:number, collection:any[]) => {
//   return item.role
// })