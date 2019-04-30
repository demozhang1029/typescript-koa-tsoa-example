
interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return `Hello ${person.firstName} ${person.lastName}`;
}

const user = {firstName: 'Jane', lastName: 'Test'}

console.log(greeter(user));
