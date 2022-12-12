const video_button = document.querySelector(".video-button");
const video = document.querySelector(".video-container video");
const video_rect = document.querySelector(".video-container");
const play_sign = document.querySelector(".play");
const pause_sign = document.querySelector(".pause");

const news_events_cards = document.querySelector(".news-events-cards");
const news_events_card = document.querySelectorAll(".news-events-card");
const left_move = document.querySelector(".left-move-sign i");
const right_move = document.querySelector(".right-move-sign i");

const contacts = document.querySelectorAll(".contact div i");
const tooltip = document.querySelector(".tooltip");
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

left_move.addEventListener("click", (e)=>{
    let translateX = getComputedStyle(news_events_cards).transform;
    let value = new DOMMatrix(translateX).m41;
    news_events_cards.style.transform=`translateX(${value-350}px)`;
    createDeleteElement();
});
right_move.addEventListener("click", (e)=>{
    let translateX = getComputedStyle(news_events_cards).transform;
    let value = new DOMMatrix(translateX).m41;
    news_events_cards.style.transform=`translateX(${value+350}px)`;
});

contacts.forEach(element => {
    element.addEventListener("click", (e)=>{
        tooltip.innerHTML = "Copied!"
        navigator.clipboard.writeText(e.target.nextSibling.innerHTML);
    });
});
contacts.forEach(element => {
    element.addEventListener("mouseover", (e)=>{
        tooltip.style.visibility="visible";
    });
});
contacts.forEach(element => {
    element.addEventListener("mouseout", (e)=>{
        tooltip.style.visibility="hidden";
        tooltip.innerHTML="Copy to clipboard!";
    });
});

function createDeleteElement(){
    console.log(`${news_events_cards.firstElementChild.textContent}`);
    if(news_events_cards.lastElementChild.dataset.id == "1"){
        let element = document.querySelector("[data-id=\"2\"]").cloneNode(true);
        console.log(element);
        news_events_cards.appendChild(element);
        news_events_cards.removeChild(news_events_cards.firstElementChild);
    }
}