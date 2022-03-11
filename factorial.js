let arr = [1,2,3,4,5]; 

//  Method 1
let factorial = function(num) {
	let result=1;
	for(let i =num; i>=1; i--) {
		result = result*i;
		
	}
	return result;
}
//  Method 2
let factM2 = function(n) {
	let res=1;
	let i=1;
	while(i <=n) {
		
		res = res*i;
		i++;
	}
	return res;	
}

let factOfArr = function(arr) {
	for(let i=0; i< arr.length; i++) {
		let UpdatedfactInd = factM2(arr[i]);
		arr[i] = UpdatedfactInd;
	}
	return arr;
}




