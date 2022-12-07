// function definition 
function getSquareOf(num) {
    console.log(`getSquareOf called with parameter ${num}. Output shall be ${num*num}`);
    return num ** 2;
}

// function call 
getSquareOf(5);
let output = getSquareOf(23);
console.log(output);
console.log(getSquareOf(12));

// function definition - arrow notation
// let getCubeOf = (num) => {
//     return num**3;
// }
let getCubeOf = (num) => (num**3);
console.log(getCubeOf(2))

// Scope

// let, const, var, undeclared 
function random() {
    {
        let v1 = "abc";
        const v2 = "def";
        var v3 = "ghi";
        v4 = "jkl";
    }
    console.log(v4);
    console.log(v3);
    // console.log(v2); // const has block scope 
    // console.log(v1); // let has block scope 
}
random();
console.log(v4);
// console.log(v3); // var has function scope 

function randomf() {
    {
        function f1 () { console.log(1); }
        var f2 = () => { console.log(2); }
        let f3 = () => { console.log(3); }
        let f4 = function () { console.log(4); }
    }
    f1();
    f2();
    // f3(); // let has block scope
    // f4(); // let has block scope 
}
randomf();
// f1(); // "function" has function scope 
// f2(); // var has function scope 

