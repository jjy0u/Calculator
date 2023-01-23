const display = document.querySelector("#display__text")
const numberButtons = document.querySelectorAll(".buttons__number")
const operatorButtons = document.querySelectorAll(".buttons__operator")
const resetButton = document.querySelector("#buttons__reset")
const percentButton = document.querySelector("#buttons__percent")
const negativeButton = document.querySelector("#buttons__negative")
const deleteButton = document.querySelector("#buttons__del")

let expression = ""
let operator
let answer
let stringAnswer

//turn a string into an expression
const turnStringIntoExpression = (expression) => {
    if (expression.includes("+")){
        const expressionSplit = expression.split("+").map((element) =>{
            return Number(element)
        })
        return expressionSplit[0] + expressionSplit[1]
    } else if (expression.includes("*")){
        const expressionSplit = expression.split("*").map((element) =>{
            return Number(element)
        })
        return expressionSplit[0] * expressionSplit[1]
    } else if (expression.includes("/")){
        const expressionSplit = expression.split("/").map((element) =>{
            return Number(element)
        })
        return expressionSplit[0] / expressionSplit[1]
    } else if (expression.includes("--")){
        const expressionSplit = expression.split("--").map((element) =>{
            return Number(element)
        })
        return expressionSplit[0] + expressionSplit[1]
    } else if (expression.includes("-")){
        const expressionSplit = expression.split(expression.lastIndexOf("-")).map((element) =>{
            return Number(element)
        })
        return expressionSplit[0] - expressionSplit[1]
    } else {
        return Number(expression)
    }
}

const numberButtonClickEvent = (event) =>{
//takes the last character of the expression and if it is an operator, when a number is clicked the previous display will clear
    if (expression.slice(-1) == operator) {
        display.innerText = ""
    } 

//if the display is just a 0 then a button is pressed, remove the 0 - solves issue of multiple unecessary 0's before number NOTE: can this be combined with line 13 if statement with an ||?
    if(display.innerHTML == 0) {
        display.innerHTML = ""
    } else if (display.innerHTML == ".") {
        display.innerHTML = "0."
    }
    
//resets the expression to nothing after the equal sign is clicked (starts a new expression - only if a number button is pressed after the equal)
    if(expression.slice(-1) == "=") {
        expression = ""
    }
    
//adds the button clicked to whats already in the display rather than replacing it
    display.innerHTML += event.target.value
//adds a number to the string expression when button clicked
    expression += event.target.value
    console.log(expression)

//changes the AC button back to C, allowing a reset if there is a number
    if (resetButton.value == "AC"){
        resetButton.value = "C"
    }
}

const operatorButtonClickEvent = (event) =>{
//allows bypassing of the equal sign operator in the expression, so further calcs can be done after pressing =.
    if(expression.slice(-1) == "=") {
        expression = display.innerHTML
    }


//stores the operator in a variable to add to the expression
    if (event.target.value == "+") {
        operator = "+"
        display.innerHTML = turnStringIntoExpression(expression).toString()

    } else if (event.target.value == "-") {    
        operator = "-"
        display.innerHTML = turnStringIntoExpression(expression).toString()
    } else if (event.target.value == "/") {    
        operator = "/"
        display.innerHTML = turnStringIntoExpression(expression).toString()
    } else if (event.target.value == "x") {    
        operator = "*"
        display.innerHTML = turnStringIntoExpression(expression).toString()
    } else if (event.target.value == "=") {   
        operator = "="     
        display.innerHTML = turnStringIntoExpression(expression).toString()
        
    }

//whatever is in the display has the operator added to it, forming the expression
    expression = display.innerHTML + operator
}
console.log(expression)



const resetButtonClickEvent = (event) =>{
//when the C button is pressed, will change to AC
    if (event.target.value == "C") {
        event.target.value = "AC"
    }

// if the expression includes an operator, display 0 and also slice the expression from index 0 to the operater (will not include the operator so then add the operator. this is to remove whatever number you wrote after the operator)
    if (expression.includes(operator)){
        display.innerHTML = "0"
        expression = expression.slice(0, expression.indexOf(operator)) + operator
    } else {
        expression = ""
        display.innerHTML = "0"
    }
}

const deleteButtonClickEvent = (event) =>{
//same idea as AC, using slice to give the expression and display without the final character, unless the final character is an operator
    if (expression.slice(-1) == operator){
        expression
        display.innerHTML
    } else {
        expression = expression.slice(0,-1)
        display.innerHTML = display.innerHTML.slice(0,-1)
    }
}

const percentButtonClickEvent = (event) =>{
    //converts display into a number to divide by 100 then displays that percentage
    let percent = Number(display.innerHTML)/100
    display.innerHTML = String(percent)

    //if the expression has an operator, will take a slice of the expression up to the operator then add the new percentage display
    if (expression.includes(operator)){
        display.innerHTML = String(percent)
        expression = expression.slice(0, expression.indexOf(operator)) + operator + display.innerHTML
    }else{
        expression = display.innerHTML
    }
    console.log(expression)

    //allows converting number after equal is pressed into percentage, ready for use of further operators
    if(expression.includes("=")) {
        expression = expression.slice(expression.indexOf("=")).slice(1)
    }
}

const negativeButtonClickEvent = (event) =>{
    let negativeNumber = Number(display.innerHTML) * -1
    display.innerHTML = String(negativeNumber)
    
    if (expression.includes(operator)){
        display.innerHTML = String(negativeNumber)
        expression = expression.slice(0, expression.indexOf(operator)) + operator + display.innerHTML
    }else{
        expression = display.innerHTML
    }
    console.log(expression)

    //allows converting number after equal is pressed into a negative, ready for use of further operators
    if(expression.includes("=")) {
        expression = expression.slice(expression.indexOf("=")).slice(1)
    }
}


numberButtons.forEach((numberButton) => {
    numberButton.addEventListener("click", numberButtonClickEvent)
})
operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener("click", operatorButtonClickEvent)
})
resetButton.addEventListener("click", resetButtonClickEvent)
deleteButton.addEventListener("click", deleteButtonClickEvent)
percentButton.addEventListener("click", percentButtonClickEvent)
negativeButton.addEventListener("click", negativeButtonClickEvent)
