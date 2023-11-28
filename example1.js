function sum1(x, y) {
    return x + y;
}
let result1 = sum1(10, 5);
console.log(result1); // 15
//
function sum2(x, y) {
    return x + y;
}
let result2 = sum2("10", "5");
console.log(result2); // 105
//
function sum3(x, y) {
    return x + y;
}
let result3 = sum3("10", "5");
console.log(result3); //Argument of type 'string' is not assignable to parameter of type 'number'.
//
function sum4(x, y) {
    return x + y;
}
let result4 = sum4(10, 5);
console.log(result4); //Argument of type 'string' is not assignable to parameter of type 'number'.
