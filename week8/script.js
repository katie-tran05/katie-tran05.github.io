const videoList = [
    { id: 1, src: "stardust.mp4" },
    { id: 2, src: "zenscape.mp4" },
    {
      id: 3,
      src: "https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/miac.mp4",
    },
  ];
const myVideo = document.querySelector("#my-video");
console.log(myVideo);

const playPauseButton = document.querySelector.Selector("#play-pause-button");
console.log(playPauseButton);

playPauseButton.addEventListener("click",togglePlay);

function togglePlay(){
    if(myVideo.paused || myVideo.ended){
        playPauseImg.src ="https://img.icons8.com/ios-glyphs/30/pause--v2.png"
        myVideo.play();
    } else {
        playPauseImg.src ="https://img.icons8.com/ios-glyphs/30/play--v2.png"
        myVideo.pause();
    }
}

// -------------------------------------------------------------
// mute unmute logic
// fetch the mute unmute button
const muteUnmuteButton = document.querySelector("#mute-unmute-button");
console.log(muteUnmuteButton);
// fetch the image so that we can change the icon based on the state
const muteUnmuteImg = document.querySelector.Selector("#mute-unmute-img");
console.log(muteUnmuteImg);
// listen to click on that button
muteUnmuteButton.addEventListener("click",toggleSound);

function toggleSound(){
    // if the video has no sound that means mute === true, then unmute the video
    if(myVideo.muted){
        muteUnmuteImg.src ="https://img.icons8.com/ios-glyphs/30/high-volume--v2.png"
        myVideo.muted = false();
    } else {
        muteUnmuteImg.src ="https://img.icons8.com/ios-glyphs/30/no-audio--v1.png"
        myVideo.muted = true();
    }
}
// -------------------------------------------------------------

// fast forward logic
// fetch the fast forward button
const fastForwardButton = document.querySelector("#fast-forward-button");
console.log(fastForwardButton);

// listen to click on that button
fastForwardButton.addEventListener("click",fastForward);

function fastForward(){
    if(myVideo.playbackRate === 1.0){
        myVideo.playbackRate = 2.0;
    } else {
        myVideo.playbackRate = 1.0;
    }
}
// -------------------------------------------------------------

// = assigning value name = "rohit" id=3;
// == comparing values 3== 4 false let b =4; b==4 true DONT USE ==
// === compare value and type 3 =="3" true 3=== "3" false
// myvideo.muted === true => myvideo.muted
// myvideo.muted === false => !myvideo.muted

// -------------------------------------------------------------


const step1Button = document.querySelector("#step1-button");
console.log(step1ButtonButton);

// listen to click on that button
step1Button.addEventListener("click",gotoStep1);

function gotoStep1(){
    myVideo.currentTime = 17.0;
    }
const step2Button = document.querySelector("#step2-button");
console.log(step2ButtonButton);

// listen to click on that button
step2Button.addEventListener("click",gotoStep2);

function gotoStep2(){
    myVideo.currentTime = 43.54;
    }

// -------------------------------------------------------------
// full screen logic
const fullscreenButton = document.querySelector("#fullscreen-button");
console.log(fullscreenButton);

// listen to click on that button
fullscreenButton.addEventListener("click",goFullscreen);

function goFullscreen(){
    if(!document.fullscreenElement){
        myVideo.requestFullscreen();
    } else{
        document.exitFullscreen();
    }
}
// -------------------------------------------------------------
// let us first fetch the media or video file to play
// const myVideo = document.querySelector(#my-video);
// console.log(myVideo);

myVideo.addEventListener("timeupdate", updatedProgressbar);

const progressBar = document.querySelector("#progress-bar");
console.log(progressBar);

function updatedProgressbar(){
    // find in percentage the amount of video
    let progress = (myVideo.currentTime / myVideo.duration) * 100;
    console.log(progress);
    // adjust the width of the progress bar accordingly
    progressBar.style.width = progress + "%";
}
// -------------------------------------------------------------
// likes logic
const heartButton = document.querySelector("#heart-button");
console.log(heartButton);

// listen to click on that button
heartButton.addEventListener("click",updateLikes);

let likes = 0;
const likesContainer = document.querySelector("#likes");

function updateLikes(){
    likes++;
    likesContainer.textContent = likes;
}
// -------------------------------------------------------------
// -------------------------------------------------------------
const playlist = [
    {
        id:1,
        src: "stardust.mp4"
        name: "Stardust",
    },
    {
        id:2,
        src: "zenscape.mp4",
        name: "Zenscape",
    },
    {
        id:3
        src: "https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/miac.mp4",
        name: "Music video"
    }
];

// playlist logic
const stardustButton = document.querySelector("#stardust-vid-button");
console.log(stardustButton);

// listen t click on that button
stardustButton.addEventListener("click", function chooseStardust(){
    chooseVideo(0);
});

const zenscapeButton = document.querySelector("#zenscape-vid-button");
console.log(zenscapeButton);

// listen t click on that button
zenscapeButton.addEventListener("click", function chooseZenscape(){
    chooseVideo(1);
});
const musicVidButton = document.querySelector("#musicvideo-vid-button");
console.log(musicVidButton);

// listen t click on that button
musicVidButton.addEventListener("click", function chooseMusicVideo(){
    chooseVideo(2);
});

function chooseVideo(no){
    // myVideo.pause();
    myVideo.src = playlist[no].src;
    console.log(myVideo.src);
    myVideo.load();
    myVideo.play();
}

function chooseSrc(src){
    myVideo.src = src;
    console.log(myVideo.src);
    myVideo.load();
    myVideo.play();
}