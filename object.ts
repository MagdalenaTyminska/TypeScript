function p(person: { firstName: string; lastName: string }) {
  console.log(person.firstName);
  console.log(person.lastName);
}
let person = {
  firstName: "Josh",
  lastName: "Smith",
};

p(person);
