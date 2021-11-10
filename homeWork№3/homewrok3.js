// function treeSum() {
//    let arr = [5,7 [4, [2], 8 [1,3], 2], [9,[]], 1, 8]; 
   
// }




// let arr = [5,7,[4, [2], 8, [1,3], 2], [9, []], 1, 8];
// function arraySum(array){
// let sum = 0;
// for(let i = 0; i < array.length; i++){
// sum += array[i];

// }
// console.log(sum);
// }
// arraySum(arr);

// let arr = [5,7,[4, [2], 8, [1,3], 2], [9, []], 1, 8];
// let arr = [5, 7, [4, [2], 8, [1, 3], 2], [9, []], 1, 8,];

// function arraySum(array) {
// 	let sum = 0;
// 	for (let i = 0; i < array.length; i++) {
// 		if (Object.prototype.toString.call(array[i]) === '[object Number]') {
// 			sum += array[i];
// 		}
// 	}
// 	return sum
// }
// console.log(arraySum(arr))

let arra = [5, 7, [4, [2], 8, [1, 3], 2], [9, []], 1, 8,];

function arraySum(array) {
	
    let sum = 0;
	for (let i = 0; i < array.length; i++) {
		if (Object.prototype.toString.call(array[i]) === '[object Number]') {
		sum += array[i];
		}
	}
	return sum
     
}

 console.log(arraySum(arra))






 





 
