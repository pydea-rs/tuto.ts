// union allows variables to store values of multiple  different data types
let w: string | null = "fuck";
console.log(w);
w = null;
console.log(w);

let test: null | string | {x: number, y: number};
test = "yes";
console.log(test);
test = {x: 3, y: 0.5};
console.log(test);
// test = 1; // Compile Error