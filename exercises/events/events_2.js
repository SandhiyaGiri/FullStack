console.log('It works');

// const butts = document.getElementById('35');
// const butts = document.querySelector('button');

const butts = document.querySelector(".butts");
const coolie = document.querySelector(".cool");
const buybuttons = document.querySelectorAll('button.buy');
butts.addEventListener('click', function () { console.log("Sandhiya clicked it");}) // (event, callback_function) 


function whenYouAreBuying(event){
    // console.log("You are buying it");
    // console.log(`The price of the product you bought is ${button.target.dataset.price}`);
    // console.log(`The parent of the button clicked is ${button.target.dataset.parent}`);
        const button = event.currentTarget;

        console.log('You clicked the button');
    
        console.log(event.target); 
        console.log(event.currentTarget);
        console.log(event.target === event.currentTarget);
    
        // Stop this event from bubbling up
        // event.stopPropagation();
        // console.log('Stopped');
    }
    

buybuttons.forEach(function (buybutton) {
    // console.log("Buy button log");
    // console.log('click', whenYouAreBuying(buybutton.targe))
    buybutton.addEventListener('click', whenYouAreBuying); 
    
})

window.addEventListener( 'click', function(event){
    console.log("YOU CICKED THE WINDOW");
    console.log(event.target);
    event.stopPropagation();
},
{capture: true}
)