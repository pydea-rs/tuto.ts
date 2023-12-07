interface User {
    name: string
    age: number
}

function checkAge(user: User): Boolean {
    console.log(user.name);
    return user.age >= 18;
};

// const user: User = {name: "test"}; // => error
console.log(checkAge({name: "test"}));
