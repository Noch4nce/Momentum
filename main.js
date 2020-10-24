// DOM elements
const time = document.querySelector('.time');
const greeting = document.querySelector('.greeting');
const name = document.querySelector('.name');
const focus = document.querySelector('.focus');
const date = document.querySelector('.date');

const blockquote = document.querySelector('blockquote');
const figcaption = document.querySelector('figcaption');
const btnQuote = document.querySelector('.btnQuote');

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');
const city = document.querySelector('.city');

let bgList = ['night/1', 'night/2', 'night/3', 'night/4', 'night/5', 'night/6', 'morning/5', 'morning/7', 'morning/10', 'morning/12', 'morning/13', 'morning/18', 'morning/20', 'day/1', 'day/4', 'day/7', 'day/8', 'day/16', 'evening/1', 'evening/3', 'evening/4', 'evening/8', 'evening/10', 'evening/12'];
let bgIndex;
let startHours = saveStartHours();

//Options
const showAmPm = true;

//Show Time
function showTime () {
    // let today = new Date(2020, 06, 10, 14, 33, 30);
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    time.innerHTML = `<span id="hours">${hour}`

    let currentHoursElement = document.getElementById('hours');
    let currentHours = currentHoursElement.textContent;

    //Set AM or PM
    // const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12hr Format
    hour = hour % 24 || 12;

    //Output Time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;


    if (startHours != currentHours) {
        startHours = currentHours;
        setBgGreet();
    }

    setTimeout(showTime, 1000);
}

function saveStartHours() {
    let date = new Date();
    return date.getHours();
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
    bgIndex = hour;

    if(hour < 12 && hour > 5) {
        //Morning
        document.body.style.backgroundImage = `url(img/morning/${Math.floor(Math.random()*6 + 1)}.jpg)`
        greeting.textContent = 'Good Morning'
    } else if (hour < 18 && hour > 11) {
        // Afternoon
        document.body.style.backgroundImage = `url(img/afternoon/${Math.floor(Math.random()*6 + 1)}.jpg)`
        greeting.textContent = 'Good Afternoon'
    } else if (hour < 24 && hour > 17) {
        //Evening
        const img = document.createElement('img');
        img.src = `img/${bgList[hour]}.jpg`;
        img.onload = () => {
        document.body.style.backgroundImage = `url(${img.src})`;
        }
        document.body.style.backgroundImage = `url(img/evening/${Math.floor(Math.random()*6 + 1)}.jpg)`
        greeting.textContent = 'Good Evening'
        document.body.style.color = 'white';
    } else {
        //Night
        document.body.style.backgroundImage = `url(img/night/${Math.floor(Math.random()*6 + 1)}.jpg)`
        greeting.textContent = 'Good Night'
        document.body.style.color = 'white';
    }
}

// Change bg

function changeBgr() {
    const img = document.createElement('img')
    if (document.body.style.backgroundImage.includes('morning')) {
        const src = `img/morning/${Math.floor(Math.random()*20 + 1)}.jpg`
        img.src = src
        img.onload = () => {
            document.body.style.backgroundImage = `url(${src})`
        }
        btnReload.disabled = true;
        setTimeout(function() { btnReload.disabled = false }, 2000);
    } else if (document.body.style.backgroundImage.includes('afternoon')) {
        const src = `img/afternoon/${Math.floor(Math.random()*20 + 1)}.jpg`
        img.src = src
        img.onload = () => {
            document.body.style.backgroundImage = `url(${src})`
        }
        btnReload.disabled = true;
        setTimeout(function() { btnReload.disabled = false }, 2000);
    } else if (document.body.style.backgroundImage.includes('evening')) {
        const src = `img/evening/${Math.floor(Math.random()*20 + 1)}.jpg`
        img.src = src
        img.onload = () => {
            document.body.style.backgroundImage = `url(${src})`
        }
        btnReload.disabled = true;
        setTimeout(function() { btnReload.disabled = false }, 2000);
    } else if (document.body.style.backgroundImage.includes('night')) {
        const src = `img/night/${Math.floor(Math.random()*20 + 1)}.jpg`
        img.src = src
        img.onload = () => {
            document.body.style.backgroundImage = `url(${src})`
        }
        btnReload.disabled = true;
        setTimeout(function() { btnReload.disabled = false }, 2000);
    }
}


// Get Name
function getName () {
    if(localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
        localStorage.setItem('name', '[Enter name]');
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

//Set Name
function setName (e) {
    if(e.type === 'keypress') {
        // Make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13) {
            if (e.target.innerText.trim() === '') {
                e.preventDefault();
                localStorage.setItem('name', '[Enter Name]');
                name.blur();
            } else {
                localStorage.setItem('name', e.target.innerText);
                name.blur();
            }
        }
    } else {
        if (e.target.innerText.trim() === '') {
            name.textContent = localStorage.getItem('name');
        } else {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    }
}

// Get Focus
function getFocus () {
    if(localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
        localStorage.setItem('focus', '[Enter Focus]');
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

// Set  Focus
function setFocus (e) {
    if(e.type === 'keypress') {
        if(e.which == 13 || e.keyCode == 13) {
            if (e.target.innerText.trim() === '') {
                e.preventDefault();
                localStorage.setItem('focus', '[Enter Focus]');
                focus.blur();
            } else {
                localStorage.setItem('focus', e.target.innerText);
                focus.blur();
            }
        }
    } else {
        if (e.target.innerText.trim() === '') {
            focus.textContent = localStorage.getItem('focus');
        } else {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    }
}

function enterName() {
    name.textContent = '';
}

function enterFocus() {
    focus.textContent = '';
}

// Get quotes

async function getQuote() {
    const blockquote = document.getElementsByTagName('blockquote')[0];
    const figcaption = document.getElementsByTagName('figcaption')[0];
    let response = await fetch('https://api.quotable.io/random');
    let data = await response.json();
    blockquote.innerHTML = `" ${data.content} "`;
    figcaption.textContent = data.author;
}


async function getWeather() {
    try {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&appid=c14397025b0f0a2f1f7bb192bdfce199&units=metric`;
        const response = await fetch(url);
        const data = await response.json();

        weatherIcon.className = 'weather-icon owf';
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        temperature.textContent = `${data.main.temp}°C`;
        weatherDescription.textContent = data.weather[0].description;
        humidity.textContent = `Humidity: ${data.main.humidity}%`;
        wind.textContent = `Wind: ${data.wind.speed}m/s`;
    } catch (e) {
        alert('Неправильно введен город');
    }
}


function getWeatherName () {
    if(localStorage.getItem('city') === null) {
        city.textContent = 'Minsk';
    } else {
        city.textContent = localStorage.getItem('city');
    }
}

function setWeatherName (e) {
    if (city.textContent === '') {
        city.textContent = localStorage.getItem('city');
    }

    if(e.type === 'keypress') {
        if(e.which == 13 || e.keyCode == 13) {
            if (e.target.innerText === '') {
                localStorage.setItem('city', 'Minsk');
                city.blur();
            } else {
                localStorage.setItem('city', e.target.innerText);
                city.blur();
            }
            getWeather();
        }
    } else {
        localStorage.setItem('city', e.target.innerText);
    }
}


//Set Events

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
name.addEventListener('click', enterName);

focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);
focus.addEventListener('click', enterFocus);

const btnReload = document.querySelector('.btn');
btnReload.addEventListener('click', changeBgr)

document.addEventListener('DOMContentLoaded', getQuote);
btnQuote.addEventListener('click', getQuote);

city.addEventListener('keypress', setWeatherName);
city.addEventListener('blur', setWeatherName);

// Run
showTime();
setBgGreet();
getName();
getFocus();
showDate ()
getQuote();
getWeatherName();
getWeather();