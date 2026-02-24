let factorial = (n) => {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
};

// console.log(factorial(10)); 
// imaediately invoked function ==> expression  it comes under anonymmous functions 
// will not have function name it works as one of a 


(function()
{console.log("life");})
();

(function()
{
    let a = 2;
let b = 4;
console.log(a+b);})
();

// // recursive function ==> to implement stack data structure  to implement complex data structures 
// // come under named function 

let fibonacci = function(n) {    // //made func, variables,logic,callf func
    let a = 0, b = 1;

    for (let i = 0; i < n; i++) {
        console.log(a);
        let temp = a + b;
        a = b;
        b = temp;
    }
};

fibonacci(7);

// // function callbacks ==> 
let v1 = function () {
console.log("This is Function Callback example.");
 };

function back(x) {
x();
console.log("Inside x Function.");
}
back(v1);

function greet(name, callback) {
    console.log("Hello " + name);
    callback();   // calling the callback function
}

function sayBye() {
    console.log("you are a very good hearted person");
}

greet("Anshika", sayBye);


