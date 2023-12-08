// sth like typedef in c
// First Use:
type Rating = 1 | 2 | 3 | 4 | 5;

let rate: Rating = 2;
// rate = 11; // Compile Error!
console.log(rate);


// Object literal type declaration
type PersonPlus = {
    name: string,
    gender: "male" | "female", 
    age: number,
    single: boolean
};

const summuary = (person: PersonPlus): string => `${person.age} years old ${person.name}, is a ${person.single ? 'single' : 'married'} ${person.gender}.`;

console.log(summuary({name: 'Elliot', age: 26, gender: 'male', single: true}));

// function aliasing
type MathFuncs = (num: number) => number;
const pow: MathFuncs = function(n: number): number {
    return n ** 2;
};

const sqrt: MathFuncs = (n: number): number => n ** 0.5;

console.log(sqrt(99), pow(09))