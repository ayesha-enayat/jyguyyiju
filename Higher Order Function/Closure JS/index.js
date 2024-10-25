//****************** Lexicalscoping **************************

// function outer(){
//     let var1='This is outer function var';
// }
// console.log(var1);     

/*function outer() {
    let var1 = 'This is outer function var';
    //console.log(var2);  

    function inner() {
        console.log(var1);
        let var2 = 'This is inner function var';
    };
    function innerTwo() {
        console.log(var1);
        //console.log(var2);  
    }
    inner();
    innerTwo()
};
outer();  
*/          

// function init(){
//     let name = 'Ayesha';
//     function displayName(){
//         console.log(name); 
//     }
//     name='Aqsa'
//     displayName();
// }
// init(); 



// **************************Closure ***********************************
//A closure is a function along with its lexical environment


// function hello(x){
//     const a='VAR1';
//     const b='VAR2';
//     return function(){
//         console.log(a,b,x);
//     }
// }
// const  ans = hello("arg");
// ans();


// function calculatePower(exp){
//     return function(base){
//         return base ** exp;
//     }
// }
// const cube=calculatePower(3);
// console.log(cube(2))//8



// function firstFunc(){
//     const firstVar = 10
//     function secondFunc(){
//         const secondVar =20
//         function thirdFunc(){
//             const thirdVar = 30
//             console.log(firstVar,secondVar,thirdVar);    
//         }
//         return thirdFunc
//     }
//     return secondFunc
// }
// const ans = firstFunc()//return secondFunc
// const finalAns = ans() //return thirdFunc
// finalAns()

// function firstFunction(){
//     const firstVar='This is variable 1';
//     function secondFunction(){
//         const secondVar='This is variable 2';
//         function thirdFunction(){
//             const thirdVar='This is variable 3';
//             console.log(firstVar,secondVar,thirdVar); 
//         }
//         return thirdFunction;
//     }
//     return secondFunction;
// }
// const  Firstans = firstFunction(); //it return secondFunction
// // console.log(Firstans);
// const secondans=Firstans();
// // console.log(secondans); it  return second Function
// secondans();

// const ans = firstFunction()//return secondFunc
// const finalAns = ans() //return thirdFunc
// finalAns()



