//  console.log("This is working..s")

//  function outer() {
//     const out_var = "I'm a outer variable";
//     function inner() {
//         const in_var = "I'm a inner variable";
//         console.log(out_var);
//         console.log(in_var);
//     }
//     return inner;
// }

// const inner_fn = outer();
// inner_fn();

// function createGreeting(greeting=''){
//     // console.log(greeting.toUpperCase());
//     greeting = greeting.toUpperCase();
//     return function(name){
//         return `${greeting} ${name}`;
//     }
// }

// const sayHello = createGreeting('Hello');
// const sayHi = createGreeting('Hi');

function createGame(gameName){
    let score = 0
    return function scoreGame(){
        score++;
        console.log(`Your ${gameName} score is ${score}`);
    }
}