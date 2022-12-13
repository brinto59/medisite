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

let left_move_flag = true;
let right_move_flag = true;
let i = 3;
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

function slider(){
    left_move.addEventListener("click", async (e)=>{
        // let translateX = getComputedStyle(news_events_cards).transform;
        // let value = new DOMMatrix(translateX).m41;
        if(left_move_flag==true){
            i += 1;
            if(i*(-348) <=-2088){
                news_events_cards.style.transform=`translateX(${-2088}px)`;
            }
            else{
                news_events_cards.style.transform=`translateX(${i*(-348)}px)`;
            }
            // await sleep(2000);
        }
        if(i*(-348) <=-2088){
            left_move.style.color="#efe9e9";
            left_move_flag = false;
        }
        if(right_move_flag == false){
            right_move.style.color = "#a09d9d";
            right_move_flag = true;
        }
        // createDeleteElement();
    });
    right_move.addEventListener("click", async (e)=>{
        let translateX = getComputedStyle(news_events_cards).transform;
        let value = new DOMMatrix(translateX).m41;
        console.log("value", value);
        if(right_move_flag==true){
            i-=1;
            if(i*(-348) >=0){
                news_events_cards.style.transform=`translateX(${0}px)`;
            }
            else{
                console.log(i*(-348), i);
                news_events_cards.style.transform=`translateX(${i*(-348)}px)`;
            }
            // await sleep(2000);
        }
        if(i*(-348) >=0){
            right_move.style.color="#efe9e9";
            right_move_flag = false;
        }
        if(left_move_flag == false){
            left_move.style.color = "#a09d9d";
            left_move_flag = true;
        }
    });    
}
slider();
function infiniteSlide(){
    myInterval = setInterval(()=>{
        if(i < 6){
            i += 1;
            left_move.style.color = "#a09d9d";
            right_move.style.color = "#a09d9d";
            left_move_flag = true;
            right_move_flag = true;
            if(i*(-348) >=0){
                right_move.style.color="#efe9e9";
                right_move_flag = false; 
                console.log("Hello")
            }
            news_events_cards.style.transform=`translateX(${i*(-348)}px)`;
        }
        else{
            i = -1;
            left_move.style.color="#efe9e9";
            left_move_flag = false; 
        }
    },2500);
}
infiniteSlide();
news_events_card.forEach((element)=>{
    element.addEventListener("mouseover",(e)=>{
        clearInterval(myInterval);
        element.style.transform = "scale(1.1, 1.1)";
        console.log(e.clientX, e.clientY);
    });
    element.addEventListener("mouseout",(e)=>{
        infiniteSlide();
        element.style.transform = "scale(1, 1)";
    });
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
function sleep(ms){
    return new Promise(resolve=>setTimeout(resolve, ms));
}