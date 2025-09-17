// let p = new Promise((resolve, reject) => {
//     let a = 1 + 2
//     if (a === 2) {
//         resolve("Success");
//     }
//     else {
//         reject("Failed");
//     }
// })

// p.then((message) => { console.log('This runs inside then ' + message); }).catch((message) => { console.log('This is inside catch ' + message); })

const userLeft = false;
const userWatchingCatMeme = false;


// function watchingTutorial(callBack, errorCallBack){
//     if (userLeft){
//         errorCallBack({
//             name : "user_left",
//             message: ":("
//         })}
//     else if(userWatchingCatMeme){
//         errorCallBack({
//             name : "Cat user",
//             message: "Cats are memes"
//         })}
//     else{
//         callBack("You are sucessfull")
//     }
//     }

// watchingTutorial((message) => {
//     console.log("Success " + message)
// }, (error) => {
//     console.log(error.name + " Failed " + error.message);
// })

// Implementation using promises - Promises are ment to solve the above problem

function watchingTutorial(){
    return new Promise((resolve, reject) => {
    if (userLeft){
        reject({
            name : "user_left",
            message: ":("
        })}
    else if(userWatchingCatMeme){
        reject({
            name : "Cat user",
            message: "Cats are memes"
        })}
    else{
        resolve("You are sucessfull")
    }})

    }

watchingTutorial().then((message) => {
    console.log("Success " + message)
}).catch((error) => {
    console.log(error.name + " Failed " + error.message);
})