// ****************************Function Declaration
function myFunc(name){
    console.log("Hello "+ name);
}
myFunc("Function Declaration")  //Hello Function Expression



// ******************************Function Expression
var myFunc1 =function(name){
    console.log("Hello "+ name);
}

myFunc1("Function Expression"); //Hello Function Expression
const funcOutput = myFunc1;
funcOutput("Function Expression"); //Hello Function Expression
console.log(funcOutput);  //Output: [Function: myFunc1]   

// ********************Higher Order Function (Function returning function)*********************************

function outerFunction(){
    let outerVariable='This is outer function variable';
    function innerFunction(){
        console.log(outerVariable);
    }
    return  innerFunction;
}
//outerFunction() it will not show anything

const myFunction=outerFunction();
myFunction(); // it will show the value of outerVariable  



