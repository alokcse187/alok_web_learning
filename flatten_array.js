// Flatten Array
let arr = [1,[2,[3,[4,5,[6,7],8,[9,[10]]]]]];

const flattenArray = (arr, flattendArray = []) => {
    for(let i=0; i <= arr.length-1; i++) {
        if(Array.isArray(arr[i])) {
            flattenArray(arr[i], flattendArray);
        } else {
            flattendArray.push(arr[i]);
        } 
    }
    return flattendArray;
}

console.log(flattenArray(arr)); 
