const myVideo = Document.querySelector("#my-video");
console.log(myVideo);

// --------------------------

// my logic for playing the video

const playButton = document.querySelector("#play-button");
console.log(playButton);

playButton.addEventListener("click", playVideo);

function playVideo() {
  myVideo.play();
}
// -------------------------

// my logic for pausing the video
const pauseButton = document.querySelector("#pause-button");
console.log(pauseButton);

pauseButton.addEventListener("click", pauseVideo);

function pauseVideo() {
  myVideo.pause();
}
