const array = [5, 7,
    [4, [2], 8, [1, 3], 2],
    [9, []],
    1, 8
]

console.log(treeSum(array))

// function treeSum(array){
//   let sum= 0;
//  array = array.flat(Infinity)
//     for (let i = 0; i < array.length; i++) {
//       sum+= array[i]
//     }
//   return sum
// }

function treeSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            sum += treeSum(arr[i]);
        } else if (isFinite(arr[i])) {
            sum += arr[i];
        }
    }
    return sum;
}