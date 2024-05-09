const clock = document.querySelector(".timer-container .timer")
const start = document.querySelector("#start")
const pause = document.querySelector("#pause")
const reset = document.querySelector("#reset")

let seconds = 0
let timer;

function getTimefromsecond(sec) {
    const date = new Date(sec*1000);
    return date.toLocaleTimeString('pt-br', {
        hour12: false,
        timeZone: 'GMT',
    })
}


function startClock() {
    timer = setInterval(() => {
        clock.classList.remove('paused')
        seconds++
        clock.innerHTML = getTimefromsecond(seconds)
    }, 1000);
}

start.addEventListener('click', (event) => {
    clearInterval(timer)
    startClock()
})

pause.addEventListener('click', (event) => {
    setTimeout( () => {
        clearInterval(timer);
        clock.classList.add('paused')
    })
})

reset.addEventListener('click', (event) => {
    clearInterval(timer)
    clock.classList.remove('paused')
    clock.innerHTML = getTimefromsecond(0)
    seconds = 0
})