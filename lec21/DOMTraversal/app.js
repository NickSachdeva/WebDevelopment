// To add class-"heading" in style.css onto h1 in js
const h1 = document.querySelector('h1');

h1.setAttribute('class','heading');

// Now also add class-"one" onto h1
h1.setAttribute('class','heading one');

// Now remove class-"heading" from h1
h1.setAttribute('class','one'); // this is not a good practice so we use ClassList

// ----------------classList------------
h1.classList.add('heading');
h1.classList.remove('one');
h1.classList.add('two');
h1.classList.add('one');

const ul = document.querySelector('ul');
ul.classList.add('animals');
ul.classList.toggle('animals');//remove animals
ul.classList.toggle('animals');//add animals
ul.classList.toggle('animals');//remove animals
ul.classList.toggle('animals');//add animals

ul.classList.add('hide');
ul.classList.toggle('hide');
ul.classList.toggle('hide');
ul.classList.toggle('hide');

// --------------Traversing--------------
    // parentElement
    // children
    // previousElementSibling
    // nextElementSibling


// Add strong tag at the end of the para
const strong = document.createElement('strong');
strong.innerText = 'This is a strong tag';

const para = document.querySelector('#special');
para.appendChild(strong);
para.append('THIS IS SOME RANDOM TEST');

const em = document.createElement('em');
em.innerText=' New EM Tag!!!!!!';
para.append(em);//so append method can append both element and text but appendchild method only add element.

// Adding new created image element as a child of div.
const newImage = document.createElement('img');
newImage.setAttribute('src','https://images.unsplash.com/photo-1695748216442-5eaad91860f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60');
const div = document.querySelector('div');
div.appendChild(newImage);

// Adding new li
const li = document.createElement('li');
li.innerText='Rhino';

ul.append(li);

// Remove b tag from para
// const b = document.querySelector('p b');
// const p = document.querySelector('#special');
// p.removeChild(b);

