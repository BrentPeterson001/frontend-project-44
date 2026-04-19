import { runGame } from './index.js'

const findGCD = (a, b) => {
  let first = Math.abs(a)
  let second = Math.abs(b)

  while ( second !== 0) {
    const temp = second
    second = first % second
    first = temp
  }

  return first
}

const getRandomNumber = (min = 1, max = 100) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const generateRound = () => {
  const num1 = getRandomNumber(1, 50)
  const num2 = getRandomNumber(1, 50)

  const question = `${num1} ${num2}`
  const correctAnswer = String(findGCD(num1, num2))

  return { question, correctAnswer }
}

export const runGcdGame = () => {
  const gameDescription = 'Find the greatest common divisor of given numbers.'
  runGame(gameDescription, generateRound)
}