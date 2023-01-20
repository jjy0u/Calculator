const display = document.querySelector("#display")
const numberButtons = document.querySelectorAll(".number")

const buttonClickEvent = (event) =>{
    display.innerHTML += event.target.value
}

numberButtons.forEach((numberButton) => {
    numberButton.addEventListener("click", buttonClickEvent)
})

