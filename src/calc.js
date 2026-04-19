import { runGame } from './index.js'

const getRandomNumber = (min = 0, max = 100) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const calculate = (num1, num2, operator) => {
  switch (operator) {
   case '+':
     return num1 + num2
   case '-':
     return num1 - num2
   case '*':
     return num1 * num2
   default:
     throw new Error(`Unknown operator: ${operator}`)
  }
}

const generateRound = () => {
  const num1 = getRandomNumber(1, 20)
  const num2 = getRandomNumber(1, 20)
  const operators = ['+', '-', '*']
  const operator = operators[Math.floor(Math.random() * operators.length)]

  const question = `${num1} ${operator} ${num2}`
  const correctAnswer = String(calculate(num1, num2, operator))

  return { question, correctAnswer }
}

export const runCalcGame = () => {
  const gameDescription = 'What is the result of the expression?'
  runGame(gameDescription, generateRound)
}
