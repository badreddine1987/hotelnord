"use strict";

const menu = document.querySelector(".menu-open");
const nav = document.querySelector(".menu-toggle");
const social = document.querySelector(".social-media")


menu.addEventListener("click", navToggle );

function navToggle() {
  menu.classList.toggle("active");
  nav.classList.toggle("active");
  social.classList.toggle("active");
}