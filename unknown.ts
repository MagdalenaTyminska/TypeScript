let a: unknown;
a = 1;
let b: string = "";
// unknow przeciwieństwo any, nie można przypisać dowolnego typu
if (typeof a === "string") {
  b = a;
}
console.log(b);
