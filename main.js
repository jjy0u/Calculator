const display = document.querySelector("#display")
const numberButtons = document.querySelectorAll(".number")
const operatorButtons = document.querySelectorAll(".operator")

let x = 0

const numberButtonClickEvent = (event) =>{
    display.innerHTML += event.target.value
    x = display.innerHTML
    if (x.slice(-1).test(/[^0-9]/$)) {
        display.innerHTML = ""
    } 
}

numberButtons.forEach((numberButton) => {
    numberButton.addEventListener("click", numberButtonClickEvent)
})

const operatorButtonClickEvent = (event) =>{
    if (event.target.value == "+") {
        x.concat("+")
    } /*else if (value == "-")*/
}

console.log(x)

operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener("click", operatorButtonClickEvent)
})