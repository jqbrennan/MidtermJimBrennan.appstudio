
function calcAvgSquare(a,b,c) {
  let avgSquare = (((a + b + c)/3) * (a * a))
  return avgSquare
}

function randomMultiply(a,b) {
  let randomMult = a * b
  return randomMult
}

let calcChoice = prompt("enter average for average calculation or random for random calculation")
if (calcChoice == "average") {
  let num1 = Number(prompt('Enter the 1st number'))
  let num2 = Number(prompt('Enter the 2nd number'))
  let num3 = Number(prompt('Enter the 3rd number'))
  avgAnswer = calcAvgSquare(num1,num2,num3)
  alert(`The output using ${num1}, ${num2}, and ${num3} is ${avgAnswer}`)
  
} else if (calcChoice == "random") {
  let num4 = Number(prompt('Enter a number'))
  let num5 = Math.floor(Math.random() * 11)
  randomAnswer = randomMultiply(num4,num5)
  alert(`The result of multiplying the random number ${num5} with ${num4} is ${randomAnswer}.`)
}
