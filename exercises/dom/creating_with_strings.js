// console.log("Hy Sandhiya");

const item = document.querySelector('.item');


const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

document.body.appendChild(myDiv);
myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);

const myHeading = document.createElement('h2');
myHeading.textContent = 'Cool things';


myDiv.insertAdjacentElement('beforebegin',myHeading);

const list = document.createElement('ul');
const li = document.createElement('li');
li.textContent = 'three';
list.appendChild(li);

document.body.insertAdjacentElement('afterbegin', list);

const li5 = document.createElement('li');
li5.textContent = 'five';
list.append(li5);

const li1 = li5.cloneNode();
list.insertAdjacentElement('afterbegin', li1);


const width = 600;
const src = `https://picsum.photos/${width}`;
const desc = `Cute pup`;
const myHTML = `
<div className= "wrapper">
<h2> Hey , How are Sandhiya, This is written inside h2 - "${desc}"</h2>
<img src="${src}" alt="${desc}"/>
</div>
`

// Turn a string into a DOM element

const myFragment = document.createRange().createContextualFragment(myHTML);
document.body.append(myFragment);
