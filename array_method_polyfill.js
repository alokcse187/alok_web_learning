let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const addTwo = item => item + 2;
const isEven = item => item % 2 === 0;

// array.filter's pollyfill
if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = function (fn) {
    let filteredArr = [];
    for (let i = 0; i <= this.length - 1; i++) {
      if (fn(this[i])) {
        filteredArr.push(this[i]);
      }
    }
    return filteredArr;
  }
}
console.log(arr.myFilter(isEven));
 
// array.map's pollyfill
if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (fn) {
    let mappedArr = [];
    for (let i = 0; i <= this.length - 1; i++) {
      mappedArr[i] = fn(this[i]);
    }
    return mappedArr;
  }
}

console.log(arr.myMap(addTwo));
 
// array.forEach's pollyfill
if (!Array.prototype.myForEach) {
  Array.prototype.myForEach = function (fn) {
    for (let i = 0; i <= this.length - 1; i++) {
      fn(this[i]);
    }
  }
}
 
// array.every's pollyfill
if (!Array.prototype.myEvery) {
  Array.prototype.myEvery = function (fn) {
    for (let i = 0; i <= this.length - 1; i++) {
      if(!fn(this[i])) {
        return false;
      }
    }
    return true;
  }
}

console.log(arr.myEvery(isEven));

// array.reduce's pollyfill
const add = (a,b) => a+b; 
if(!Array.prototype.myReduce) {
   Array.prototype.myReduce = function(fn) {
    let accum = this[0]; 
    for(let i=1; i<=arr.length-1; i++) {
      accum = fn(accum, this[i])
    }
    return accum;
    } 
}

