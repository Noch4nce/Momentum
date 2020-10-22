// DOM elements
const time = document.querySelector('.time');
const greeting = document.querySelector('.greeting');
const name = document.querySelector('.name');
const focus = document.querySelector('.focus');
const date = document.querySelector('.date');

//Options
const showAmPm = true;

//Show Time
function showTime () {
    // let today = new Date(2020, 06, 10, 14, 33, 30);
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    //Set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12hr Format
    // hour = hour % 12 || 12;

    //Output Time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}
    ${showAmPm ? amPm : ''}`;

    setTimeout(showTime, 1000);
}

//Show date
function showDate () {

    let today = new Date();

    let formatter = new Intl.DateTimeFormat("en", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });


    //Output Date
    date.innerHTML = `${formatter.format(today)}`;

    setTimeout(showTime, 60000);
}

//Add Zeros
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

//Set background and Greeting
function setBgGreet () {
    // let today = new Date(2020, 06, 10, 5, 33, 30);
    let today = new Date();
    let hour = today.getHours();

    if(hour < 12 && hour > 5) {
        //Morning
        document.body.style.backgroundImage = "url('img/morning/1.jpg')";
        greeting.textContent = 'Good Morning'
    } else if (hour < 18 && hour > 11) {
        // Afternoon
        document.body.style.backgroundImage = "url('img/afternoon/1.jpg')";
        greeting.textContent = 'Good Afternoon'
    } else if (hour < 24 && hour > 17) {
        //Evening
        document.body.style.backgroundImage = "url('img/evening/01.jpg')";
        greeting.textContent = 'Good Evening'
        document.body.style.color = 'white';
    } else {
        //Night
        document.body.style.backgroundImage = "url('img/night/1.jpg')";
        greeting.textContent = 'Good Night'
        document.body.style.color = 'white';
    }
}

// Get Name
function getName () {
    if(localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

//Set Name
function setName (e) {
    if (name.textContent === '') {
        name.textContent = localStorage.getItem('name');
    }

    if(e.type === 'keypress') {
        // Make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13) {
            if (e.target.innerText === '') {
                localStorage.setItem('name', '[Enter Name]');
                name.blur();
            } else {
                localStorage.setItem('name', e.target.innerText);
                name.blur();
            }
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}

// Get Focus
function getFocus () {
    if(localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

// Set  Focus
function setFocus (e) {
    if (focus.textContent === '') {
        focus.textContent = localStorage.getItem('focus');
    }

    if(e.type === 'keypress') {
        if(e.which == 13 || e.keyCode == 13) {
            if (e.target.innerText === '') {
                localStorage.setItem('focus', '[Enter Focus]');
                focus.blur();
            } else {
                localStorage.setItem('focus', e.target.innerText);
                focus.blur();
            }
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
        name.blur();
    }
}

function enterName() {
    name.textContent = '';
}

function enterFocus() {
    focus.textContent = '';
}

//Set Events

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
name.addEventListener('click', enterName);

focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);
focus.addEventListener('click', enterFocus);

// Run
showTime();
setBgGreet();
getName();
getFocus();
showDate ()