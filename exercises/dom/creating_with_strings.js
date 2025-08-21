// console.log("Hy Sandhiya");

const item = document.querySelector('.item');

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
