let person: {name: string} & {gender: string} = { // or: {name: string, gender: string}
    name: "whatever", gender: "whatever"
};

// let x: {name: string} & {gender: string} = {gender: "m"}; // Compile Error
// as you see, you can create new type shapes with intersectioning 

interface Gender {
    g: "male" | "female" // union literals; meaning that v is eigher 'male' or 'female'
};

interface Name {
    n: string
}

let newPerson: Gender & Name = {
    n: "me", g: "male"
};

console.log(person, newPerson)
const wrongPerson: Gender & Name = {n: "w", g: "x"}; // wrong literal for g!