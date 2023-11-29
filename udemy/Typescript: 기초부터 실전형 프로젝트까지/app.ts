const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // Tuple
} = {
  name: 'Mark',
  age: 35,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author']
};

console.log(person.name);
console.log(person.age);
console.log(person.hobbies);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}