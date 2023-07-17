const accordion  = document.querySelectorAll('.accordion');
const accordionText  = document.querySelectorAll('.news');
const marker  = document.querySelectorAll('.marker');
const summary  = document.querySelector('summary');
const details  = document.querySelector('details');
const btn = document.getElementById('btn');
const btnModal  = document.getElementById('btnmodal');
const modal = document.getElementById('modal');
const currentYear  = document.getElementById('year');
const currentMonth  = document.getElementById('month');
const currentDay  = document.getElementById('day');
const currentTime  = document.getElementById('time');


setInterval (() => {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let yearString = year;
    let monthString = month;
    let dayString = day;
    let timeString = hour + ':' + minutes + ':' + seconds;

    currentYear.innerHTML = yearString;
    currentMonth.innerHTML = monthString;
    currentDay.innerHTML = dayString;
    currentTime.innerHTML = timeString;
}, 1000)

for (let i = 0; i < accordion.length; i++) {
    const accordionShell = accordion[i];
    const accordionCopy = accordionText[i];
    const accordionMarker = marker[i];

    accordionShell.addEventListener('click', () => {
        accordionShell.classList.toggle('accordion-active');
        accordionCopy.classList.toggle('accordion-text-active');
        accordionMarker.classList.toggle('marker-active');

        if ( accordionShell.style.overflowY === "auto") {
            accordionShell.style.overflowY ="hidden";
        }
        else {
            accordionShell.style.overflowY = 'auto';
        }
    });
}

btn.addEventListener('click', () => {    
    if (!btn.classList.contains('dark')) {
        document.body.style.background = "black";
        document.body.style.color = "white";
        btn.textContent = "Enable Light Mode"
        btn.classList.toggle('dark');
    }
    else if (btn.classList.contains('dark')) {
        document.body.style.background = "white";
        document.body.style.color = "black";
        btn.textContent = "Enable Dark Mode"
        btn.classList.toggle('dark');
    }
});

btnModal.addEventListener('click', () => {    
    if (!modal.classList.contains('timer-on')) {
        modal.classList.add('timer-on');
    }
});

modal.addEventListener('click', () => {    
    if (modal.classList.contains('timer-on')) {
        modal.classList.remove('timer-on');
    }
});