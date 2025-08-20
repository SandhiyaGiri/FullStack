// const a = "100";
// var b = 1000;
// let c = "Catch"

const dog = "scoopy";

function logDog(dog){
    console.log(dog);
}

function summa(){
    const dog = "Sunny";
    logDog(dog)
    // Sunnay will be printed
}

function logDog2(){
    // Scoopy will be printed
    console.log(dog);
}

function summa2(){
    const dog = "Sunny";
    logDog2();
    // Sunnay will be printed
}

function parent(){
    //  Like varaibles functions are also block scoped
    function child()
    {
        const name = "Sandy";
        console.log(name);
    }
    child(); //Can be defined only here
}

parent();