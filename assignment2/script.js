const videoList = [
  {
    video: 'icantfeelanything.mp4',
    title: 'NCT DREAM 'icantfeelanything''
  },
  {
    video: 'UNKNOWN.mp4',
    title: 'NCT DREAM 'UNKNOWN''
  },
  {
    video: 'BOX.mp4',
    title: 'NCT DREAM 'BOX''
  },
  {
    video: 'Breathing.mp4',
    title: 'NCT DREAM 'Breathing''
  },
  {
    video: 'Carat Cake.mp4',
    title: 'NCT DREAM 'Carat Cake''
  },
]
const categories = [...new Set(videoList.map((item)=> {return item}))]
document.getElementById('videoList').innerHTML = categories.map((item)=> {
  var{ video,title} = item;
  return (
    `<div class="list active">
      <video src=${video} class="list-video"></video>
      <h3 class="list-title">${title}</h3>
    </div>`
  )
}).join('')
let videoList = document.querySelectorAll('.video-list .list');
videoList.forEach(remove =>{remove.classList.remove('active')});
videoList.forEach(vid =>{
  vid.onclick = ()=>{
    videoList.forEach(remove=>{remove.classList.remove('active')});
    vid.classList.add('active');
    let src= vid.querySelector('.list-video').src;
    let title = vid.querySelector('.list-title').innerHTML;
    document.querySelector('.main-video-container .main-video').src = src;
    document.querySelector('.main-video-container .main-video').play();
    document.querySelector('.main-video-container .main-video-title').innerHTML = title;
  };
});
// Add other functionalities here
