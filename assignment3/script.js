let btn = document.querySelector(".btn");
console.log(btn);

let body = document.querySelector("body");
console.log(body);

let audio = document.querySelector("#audio");
console.log(audio);
// I'm trying to link the lightswitch with the lightbulb
btn.addEventListener("click", (ToggleEvent) => {
  btn.onclick = function () {
    body.classList.toggle("on");
    audio.play();
  };
});
// make an light torch to move around with the mouse
var pos = document.documentElement;
pos.addEventListener("mousemove", (e) => {
  pos.style.setProperty("--x", e.clientX + "px");
  pos.style.setProperty("--y", e.clientY + "px");
});
// My Attempt to create a multiple typing words
var typingText = document.querySelector(".text2");
var myArray = ["Turn Off The Light", "Save The Earth", "Save The Environment"];
var arrayIndex = 1;
function textReplace() {
  setInterval(TimeRanges, 5000);
  function timer() {
    if (arrayIndex < myArray.length) {
      typingText.innerHTML = myArray[arrayIndex];
      arrayIndex = arrayIndex + 1;
    } else {
      arrayIndex = 0;
      typingText.innerHTML = myArray[arrayIndex];
      arrayIndex = arrayIndex + 1;
    }
  }
}
textReplace();
