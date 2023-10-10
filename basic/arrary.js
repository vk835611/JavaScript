const arr1 = [1,2,3,4,5]
const arr2 = [6,7,8,9,10]

console.log((arr1 + arr2)); 

// const all_num = arr1.concat(arr2)

// console.log(all_num);
const all_num = [...arr1,...arr2]
console.log(all_num);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

console.log(another_array.flat(Infinity));