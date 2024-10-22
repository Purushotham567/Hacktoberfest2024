const people = [
    { name: "John", age: 30 },
    { name: "Anna", age: 22 },
    { name: "Chris", age: 25 }
];

// Sort by age in ascending order
people.sort((a, b) => a.age - b.age);

console.log(people);
// Output: [{ name: "Anna", age: 22 }, { name: "Chris", age: 25 }, { name: "John", age: 30 }]
