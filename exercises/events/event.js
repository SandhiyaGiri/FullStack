console.log('It works');

// const butts = document.getElementById('35');
// const butts = document.querySelector('button');

const butts = document.querySelector(".butts");
const coolie = document.querySelector(".cool");
const buybuttons = document.querySelectorAll('button.buy');
butts.addEventListener('click', function () { console.log("Sandhiya clicked it");}) // (event, callback_function) 


// Using a fuction:

function whenClicked(){
    console.log("This click is logged from the custom function!!");
}

const removed = () => console.log("Removed the event listner");
const coolie_log = () => console.log("This log is for coolie button");

butts.addEventListener('click', whenClicked); // the browser will run the fucntion for us 

// To remove a function - it must be named
// butts.removeEventListener('click', whenClicked); // with this we can't disable the functionality of the click i.e We cannot remove events for all the clicks
// We can pass the above line in the chrome console - This is callled unbinding
// binding is taking  a function and listening for a particular event

coolie.addEventListener('click', coolie_log); 

function buying(){
    console.log("Buying Item");
}

buybuttons.forEach(function(buybutton){
    console.log("Getting ready");
    buybutton.addEventListener('click', buying);
});



