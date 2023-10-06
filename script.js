console.log("hola amigo")


// initilaze the variables
let songIndex = 0;
let AudioElement = new Audio("calm down.mp3");
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let box = document.getElementsByClassName("box");
let songItems = Array.from(document.getElementsByClassName('songItem'));
let timeNow = document.getElementsByClassName("timeNow");
let songs = [
    {songName:"Calm Down", filePath: "calm down.mp3", coverpath: "calm down.jpg", gradientClass: "gradient-0" },
    {songName:"Taki Taki", filePath: "Taki Taki.mp3", coverpath: "Taki Taki.jpeg", gradientClass: "gradient-1" },
    {songName:"Boyfriend", filePath: "Boyfriend.mp3", coverpath: "Boyfriend.jpg", gradientClass: "gradient-2" },
    {songName:"We Dont Talk Anymore", filePath: "We Dont Talk Anymore.mp3", coverpath: "We Dont Talk Anymore.jpg", gradientClass: "gradient-3" },
    {songName:"Slow Down", filePath: "Slow Down.mp3", coverpath: "Slow Down.jpeg", gradientClass: "gradient-4" },
    {songName:"Wolves", filePath: "Wolves.mp3", coverpath: "Wolves.jpeg", gradientClass: "gradient-5" },
    {songName:"Come Get It", filePath: "Come Get It.mp3", coverpath: "Come Get It.jpg", gradientClass: "gradient-6" },
    {songName:"I Want You To Know", filePath: "I Want You To Know.mp3", coverpath: "I Want You To Know.jpg", gradientClass: "gradient-7" }
]


//gradient colors

// 0  
let BGcolors = [
{background:"linear-gradient(90deg, rgba(255,136,40,1) 0%, rgba(217,87,68,1) 51%, rgba(255,198,99,1) 100%)"},
// 1       
{background:"linear-gradient(90deg, rgba(185,63,44,1) 0%, rgba(82,140,210,1) 51%, rgba(6,39,108,1) 100%)"},
// 2 
{background:"linear-gradient(90deg, rgba(196,119,62,1) 0%, rgba(146,93,47,1) 13%, rgba(13,19,17,1) 100%)"},
// 3 
{background:"linear-gradient(194deg, rgba(88,88,88,1) 0%, rgba(0,0,0,1) 100%)"},
// 4 
{background:"linear-gradient(264deg, rgba(235,169,75,1) 0%, rgba(90,34,0,1) 29%, rgba(0,0,0,1) 72%)"},
// 5 
{background:"linear-gradient(103deg, rgba(34,58,99,1) 0%, rgba(190,189,207,1) 100%)"},
// 6 
{background:"linear-gradient(103deg, rgba(83,12,9,1) 0%, rgba(6,0,0,1) 100%)"},
// 7 
{background:"linear-gradient(55deg, rgba(149,149,149,1) 0%, rgba(56,65,70,1) 50%, rgba(3,16,25,1) 100%)"}]


//assigning song-values to each
songItems.forEach((element, i)=>{
    element.getElementsByClassName("songNumber")[0].innerText = i+1;
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    // element.getElementsByClassName("songListPlay")[0].innerText = AudioElement.duration;
})
// play and pause
masterPlay.addEventListener('click',()=>{
    giff()
})

// giff function
function giff(){
    if(AudioElement.paused || AudioElement.currentTime<=0){
        AudioElement.play();
        masterPlay.textContent = 'pause_circle';
        gif.style.opacity = 1;
    }
    else{
        AudioElement.pause();
        makeAllPLay();
        masterPlay.textContent = 'play_circle';
        gif.style.opacity = 0;
    }
}

//make all play
const makeAllPLay = ()=>{
    Array.from(document.getElementsByClassName("material-icons play")).forEach((element) =>{
        element.textContent = 'play_circle';
    })
}
//current song function
const currSong = (songIndex)=>{
    document.getElementsByClassName("songInfo").textContent = songs[songIndex].songName;
}
//play for each song
Array.from(document.getElementsByClassName("material-icons play")).forEach((element) => {
    
    element.addEventListener('click', (e)=>{
        makeAllPLay();
        songIndex = parseInt(e.target.id);
        songPath  = songs[songIndex].filePath;
        e.target.textContent = 'pause_circle';
        console.log(songPath);
        AudioElement.currentTime = 0;
        AudioElement.src = songPath;
        AudioElement.play();
        giff();
        masterPlay.textContent = 'pause_circle';
        document.getElementById("songMasterName").innerHTML = songs[songIndex].songName;
        document.body.style.transition = "background 2s ease-in-out";
        document.body.style.background = BGcolors[songIndex].background;      
    })
})
//timeline... progress bar

// myProgressBar.
AudioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((AudioElement.currentTime / AudioElement.duration)*100);
    console.log(progress, AudioElement.currentTime)
    myProgressBar.value = progress;
    // timeNow.innerHTML = parseInt(AudioElement.currentTime);
})
// change
myProgressBar.addEventListener('change', ()=>{
    AudioElement.currentTime = myProgressBar.value * AudioElement.duration / 100;
})

document.getElementById("next").addEventListener('click', ()=>{
    if(songIndex >= 7){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    songPath  = songs[songIndex].filePath;
    AudioElement.currentTime = 0;
    AudioElement.src = songPath;
    AudioElement.play()
    giff();
    masterPlay.textContent = 'pause_circle';
    document.getElementById("songMasterName").innerHTML = songs[songIndex].songName;
    setBg();
})
document.getElementById("prev").addEventListener('click', ()=>{
    if(songIndex <= 1){
        songIndex = 7;
    }
    else{
        songIndex -= 1;
    }
    songPath  = songs[songIndex].filePath;
    AudioElement.currentTime = 0;
    AudioElement.src = songPath;
    AudioElement.play()
    giff();
    masterPlay.textContent = 'pause_circle';
    document.getElementById("songMasterName").innerHTML = songs[songIndex].songName;
})

// CHANGE BG GRADIENT FUNCTION
function setBg(){
    document.body.style.background = background0;
}

