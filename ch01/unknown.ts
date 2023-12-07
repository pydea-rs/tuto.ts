const useAny = () : any => {

    // using any type:
    let x: any = 1;
    x = {s: 1};
    x = Array();
    x.push('test'); // ** Compiler wont check if the member function is defined or not!
    console.log(x);

    return x;
};

const useUnknown = () : unknown => {
    let x: unknown = 11;
    x = {s: 1};
    x = [];
    // x.push('array mem'); // Compile Error!
    if(x instanceof Array)
        x.push('Authorized Use!');
    return x;
}

let x: unknown = useUnknown();
// x.anyFunc(); // Compile Error!

let y = useAny();
y.anyFunc(); // Runtime Error! But no warning during compile!
