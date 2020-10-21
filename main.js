// DOM elements
const time = document.querySelector('.time');
const greeting = document.querySelector('.greeting');
const name = document.querySelector('.name');
const focus = document.querySelector('.focus');

//Show Time
function showTime () {
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    //Set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12hr Format
    hour = hour % 12 || 12;

    //Output Time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

    setTimeout(showTime, 1000);
}

//Add Zeros
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

//Set background and Greeting
function setBgGreet () {
    let today = new Date();
    let hour = today.getHours();

    if(hour < 12) {
        //Morning
        document.body.style.backgroundImage = "url('img/morning/1.jpg')";
        greeting.textContent = 'Good Morning'
    } else if (hour < 18) {
        // Afternoon
        document.body.style.backgroundImage = "url('img/afternoon/1.jpg')";
        greeting.textContent = 'Good Afternoon'
    } else {
        //Evening
        document.body.style.backgroundImage = "url('img/night/1.jpg')";
        greeting.textContent = 'Good Night'
        document.body.style.color = 'white';
    }
}

// Run
showTime();
setBgGreet();