// // function init(){
// //     const p = document.querySelector('p');
// //     console.log(p);
// // }

// // document.addEventListener('DOMContentLoaded', init);

// const p = document.querySelector('p');
// const imgs = document.querySelectorAll('.item img');
// const item2 = document.querySelector('.item2');
// const item2image = item2.querySelector('img');
// const heading = document.querySelector('h2');
// console.log(p);
// console.dir(heading);

// console.log(heading.textContent); //Get property
// heading.textContent = "Sandhiya is lovely"; //Set property

// console.log(heading.textContent); //Returns only the text visible to the user - considering CSS styles
// console.log(heading.innerText); //Returns all text inside the element, regardless of visibility or styles.

// console.log(heading.innerHTML);
// console.log(heading.outerHTML);

// const pizzaList = document.querySelector(".pizza");
// console.log(pizzaList.textContent);

// // pizzaList.textContent = `${pizzaList.textContent} 🍕`;
// pizzaList.insertAdjacentTe('beforeend', '🍕');

const pic = document.querySelector(".nice");
console.log(pic.classList);
pic.classList.add('open');
pic.classList.remove('nice');
// pic.classList.add('round');
pic.classList.toggle('round'); // toggle - add when it is present and removes it when it is not. 

function toggler(){
    pic.classList.toggle('round');
}
pic.addEventListener('click', toggler);

pic.alt = "Mountain";
console.log(pic.alt);
console.log(pic.naturalWidth);

pic.setAttribute('alt', 'It is nature');
console.log(pic.alt);