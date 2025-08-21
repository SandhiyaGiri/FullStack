console.log('It works')

const myParagraph = document.createElement('p');
myParagraph.textContent = "I'm a text inside the P";
myParagraph.classList.add("special");
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = "https://picsum.photos/600";
myImage.alt = "Nice photo";
// console.log()

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

