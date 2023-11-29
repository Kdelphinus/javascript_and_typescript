var person = {
    name: 'Mark',
    age: 35,
    hobbies: ['Sports', 'Cooking'],
};
console.log(person.name);
console.log(person.age);
console.log(person.hobbies);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
