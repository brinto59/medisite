const video_button = document.querySelector(".video-button");
const video = document.querySelector(".video-container video");
const video_rect = document.querySelector(".video-container");
const play_sign = document.querySelector(".play");
const pause_sign = document.querySelector(".pause");

video_button.addEventListener("click",(e)=>{
    if(video.paused){
        video.play();
        video.controls = true;
        play_sign.style.display = "none";
        pause_sign.style.display = "block";
    }
    else{
        video.pause();
        video.controls = false;
        play_sign.style.display = "block";
        pause_sign.style.display = "none";
    }
});
video_rect.addEventListener("mouseover", (e)=>{
    
    if(!video.paused){
        video_button.style.display = "block";
        pause_sign.style.display = "block";
        play_sign.style.display = "none";
    }
    else if(video.paused){
        video_button.style.display = "block";
        pause_sign.style.display = "none";
        play_sign.style.display = "block"; 
    }
});
video_rect.addEventListener("mouseout", (e)=>{

    if(!video.paused){
        video_button.style.display = "none";
    }
    else if(video.paused){
        video_button.style.display = "block";
        pause_sign.style.display = "none";
        play_sign.style.display = "block"; 
    }
});
video.addEventListener("pause", (e)=>{
    video_button.style.display = "block";
    pause_sign.style.display = "none";
    play_sign.style.display = "block"; 
});
