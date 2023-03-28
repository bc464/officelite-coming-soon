const arrowDown = document.querySelector(".arrow-down");
let hiddenPages = document.querySelector(".hidden-pages");
const emailInput = document.querySelector(".email");
const crossIcon = document.querySelector(".icon-cross");
const submitButton = document.querySelector(".btn");

// Counter variables
const timerContainer = document.querySelector(".counter-box");
const items = document.querySelectorAll(".timer-format h6");
let futureDate = document.querySelector(".future-date");

let nowPlus30 = new Date(Date.now() + (30 * 24 * 60 * 60 * 1000));

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getHours();

const year = nowPlus30.getFullYear();
const hours = nowPlus30.getHours();
const minutes = nowPlus30.getMinutes();
const seconds = nowPlus30.getSeconds();
const day = nowPlus30.getDate()


// Future Day i.e 30 days from current day 

calculatedDate = nowPlus30.toLocaleString('en-uk', {day: "numeric",month:'long', year:'numeric'})
futureDate.innerHTML = calculatedDate;

// Counter set for 30 days
function getRemainingTime() {
    const today = new Date().getTime();
    const t = nowPlus30 - today;

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    let days = Math.floor(t/oneDay);

    let hours = Math.floor((t % oneDay) / oneHour);

    let minutes = Math.floor((t % oneHour) / oneMinute);

    let seconds = Math.floor((t % oneMinute) / 1000);

    const values = [days, hours, minutes, seconds];
    
    function format(item) {
        if(item < 10) {
            return item = `0${item}`;
        }
        else {
            return item;
        }
    }

    items.forEach(function(item, index) {
        item.innerHTML = format(values[index]);
        console.log(values[index])
    })

};
 let countdown = setInterval(getRemainingTime, 1000);

 getRemainingTime();


// Showing hidden input fields
arrowDown.addEventListener("click", () =>  {
    
    if (hiddenPages.style.display === "none") {
        hiddenPages.style.display = "block";
        arrowDown.style.rotate = "180deg";
    } else {
        hiddenPages.style.display = "none";
        arrowDown.style.rotate = "0deg";
    }
    
})
// Checking if email address has @ - show error
submitButton.addEventListener("click", ()=> {
    
    if (!emailInput.value.includes("@")) {
        crossIcon.style.display = "block"
        emailInput.style.color = "red"
    }
})