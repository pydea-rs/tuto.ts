function checkAge(user) {
    console.log(user.name);
    return user.age >= 18;
}
;

// const user: User = {name: "test"}; // => error
console.log(checkAge({ name: "test" }));
