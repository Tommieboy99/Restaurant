import "./style.css";
import { handleHomeDOM } from './home.js';
import { handleMenuDOM } from './menu.js';
import { handleAboutDOM } from './about.js';

handleHomeDOM();

const contentDiv = document.querySelector("#content");

const homeBtn = document.querySelector("#home-btn");
const productsBtn = document.querySelector("#products-btn");
const aboutBtn = document.querySelector("#about-btn");

homeBtn.addEventListener("click", () => {
    contentDiv.textContent = "";
    handleHomeDOM();
});

productsBtn.addEventListener("click", () => {
    contentDiv.textContent = "";
    handleMenuDOM();
});

aboutBtn.addEventListener("click", () => {
    contentDiv.textContent = "";
    handleAboutDOM();
})