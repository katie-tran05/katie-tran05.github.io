let btn = document.querySelector(".btn");
console.log(btn);

let body = document.querySelector("body");
console.log(body);

btn.addEventListener("click", (ToggleEvent) => {
  body.classList.toggle("on");
});
