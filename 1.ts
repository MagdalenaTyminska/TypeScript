function sum(x, y) {
  return x + y;
}
let result = sum(10, 5);
console.log(result); // 15

//

function sum(x, y) {
  return x + y;
}
let result = sum("10", "5");
console.log(result); // 105

//

function sum(x: number, y: number) {
  return x + y;
}
let result = sum("10", "5");
console.log(result); //Argument of type 'string' is not assignable to parameter of type 'number'.

//

function sum(x: string, y: string) {
  return x + y;
}
let result = sum(10, 5);
console.log(result); //Argument of type 'string' is not assignable to parameter of type 'number'.
