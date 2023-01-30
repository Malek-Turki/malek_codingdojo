function fibonacciArray(n) {
    var fibArr = [0, 1];
    for(var i=0; i<8; i++){
        fibArr.push(fibArr[fibArr.length-1]+fibArr[fibArr.length-2]);
    }
    
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]