// // Appending string in the body:

// const body = document.body;
// body.append("Hello World", "Wes");

// // body.appendChild(HTML_ELEMENT) ; This will append the child to the body

// // We can also create an element and append it to the document. 

// const div = document.createElement('div');
// div.innerText = "Hello Sandy";
// body.append(div);

// // Two ways of adding HTML element to the page

// //1. Creating a HTML element

// const strong = document.createElement('strong');
// strong.innerText = "Hello Strong girl!"; // Good approach
// body.append(strong);

// //2. Creating a innerHTML text

// div.innerHTML = "<strong> It is another strong girl</strong>"
// body.append(div);

const body = document.body;
const div = document.querySelector('div');
const one = document.querySelector('#one');
const two = document.querySelector('#two');

console.log(one, two, div);