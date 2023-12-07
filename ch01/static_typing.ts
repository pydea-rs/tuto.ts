interface User {
    name: string
    age: number
}

function checkAge(user: User): Boolean {
    console.log(user.name);
    return user.age >= 18;
};

// const user: User = {name: "test"}; // => error
// console.log(checkAge({name: "test"})); // not implementing the User interface so it throws compile error!
// console.log(checkAge({name: 'test', age: "17"})); // not following checkAge param type-shape again (age must be numeric!)
console.log(checkAge({name: "test", age: 20})); // not its right; ts follows type-shapes, not type names!

