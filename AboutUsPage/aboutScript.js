'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
let badWords = ["badWord"];

tabsContainer.addEventListener('click', function (e) {
    const clicked = e.target.closest('.operations__tab');
  
    // Guard clause
    if (!clicked) return;
  
    // Remove active classes
    tabs.forEach(t => t.classList.remove('operations__tab--active'));
    tabsContent.forEach(c => 
      {

      c.style.display = "none";
      c.classList.remove('operations__content--active')});
  
    // Activate tab
    clicked.classList.add('operations__tab--active');
  
    // Activate content area
    let tabClicked = document
    .querySelector(`.operations__content--${clicked.dataset.tab}`);
    
    tabClicked.classList.add('operations__content--active');
    tabClicked.style.display = "block";    
     
  });
  function openInNewTab(url) {
    window.open("http://"+url);
   }

let myRe = /Nulla*/gi;
let str = document.querySelector('.bio').children[0].textContent;
let myArray;
while ((myArray = myRe.exec(str)) !== null) {
  let msg = 'Found ' + myArray[0] + '. ';
  msg += 'Next match starts at ' + myRe.lastIndex;
  console.log(msg);
 }
for(let i =0;i<badWords.length;i++){
  
  var re = new RegExp(badWords[i],"gi");
  const found = str.match(re);
  console.log(found);
document.querySelector('.bio').children[0].textContent =str.replaceAll(found,"****");
console.log(badWords[i]);      
}