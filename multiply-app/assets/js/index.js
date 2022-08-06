const question = document.querySelector("#question")
const input = document.querySelector("#input")
const form = document.querySelector("#form")
const scoreElement = document.querySelector("#score")
const clear = document.querySelector("#clear")

const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);
const result = num1 * num2

let score = JSON.parse(localStorage.getItem("score"))

if (!score) {
  score = 0
}

scoreElement.innerText = `Score: ${score}`

question.innerText = `Multiply: ${num1} x ${num2}`



form.addEventListener("submit", () => {
  const userAnswer = +input.value;
  if (userAnswer === result) {
    score++
    updateLocalStorage()
  } else {
    score--
    updateLocalStorage()
  }
})


clear.addEventListener("click", ()=>{
  if(score !== 0){
    localStorage.clear()
    location.reload()
  }
})



function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score))
}