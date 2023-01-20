const display = document.querySelector("#display")
const numberButtons = document.querySelectorAll(".number")
const operatorButtons = document.querySelectorAll(".operator")

let expression = ""
let operator

const numberButtonClickEvent = (event) =>{
    if (expression.slice(-1) == operator) {
        display.innerText = ""
    } 
    display.innerHTML += event.target.value
    expression += event.target.value
    console.log(expression)
}

const operatorButtonClickEvent = (event) =>{
    if (event.target.value == "+") {
        operator = "+"
    } else if (event.target.value == "-") {    
        operator = "-"
    } else if (event.target.value == "/") {    
        operator = "/"
    } else if (event.target.value == "x") {    
        operator = "*"
    }
    
    expression = display.innerHTML + operator
}

numberButtons.forEach((numberButton) => {
    numberButton.addEventListener("click", numberButtonClickEvent)
})
operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener("click", operatorButtonClickEvent)
})