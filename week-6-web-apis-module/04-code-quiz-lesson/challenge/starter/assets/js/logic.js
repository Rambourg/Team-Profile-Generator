let time = 75



//create a button
const btnStart = document.querySelector("#start")
btnStart.addEventListener("click", startQuizHandler)

function startQuizHandler(){
    const timerEl = document.querySelector('#time');
    const interval = setInterval(() => {
        time--
        timerEl.innerText = time;
    }, 1000)
}

// startQ funtion
    // start the timer 
    // show questions

// give answer function
    // jump to the next question
    // update the scores


