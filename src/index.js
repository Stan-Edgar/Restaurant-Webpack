// index.js
import "./styles.css";
import { headText, paraText, imagePath } from "./content.js";

import { home, imgSrc, homeHead, homePara } from "./home.js";
import { menu, menuImg, menuHead, menuPara } from "./menu.js";
import { about, aHead,  aPara, evilWalt } from "./about.js";



const content = document.querySelector('#content');

const hero = document.createElement("div");
hero.className = "hero";

const txt = document.createElement('div');
const head = document.createElement('h1');
const para = document.createElement('p');

const walt = document.createElement('img');
walt.src = imagePath; // Use the imported image path

// Add text content
head.innerHTML = headText;
para.innerHTML = paraText;

// Append elements
txt.appendChild(head);
txt.appendChild(para);

hero.appendChild(txt);
hero.appendChild(walt);
content.appendChild(hero);


home.addEventListener('click', function() {
    alert("I am home");
    walt.src = imgSrc;
    head.innerHTML = homeHead;
    para.innerHTML = homePara;
})

menu.addEventListener('click', function() {
    alert("I am menu");
    walt.src = menuImg;
    head.innerHTML = menuHead;
    para.innerHTML = menuPara;
})

about.addEventListener('click', function() {
    alert("I am about");
    walt.src = evilWalt;
    head.innerHTML = aHead;
    para.innerHTML = aPara;

    walt.style.cssText = "-webkit-box-shadow: 1px 10px 57px 0px #FF0000; box-shadow: 1px 10px 57px 0px #FF0000;"

})

console.log("Hello Edgar");