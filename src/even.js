import { runGame } from './index.js';
const isEven = (number) => number % 2 === 0;
const generateRound = () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const question = String(randomNumber);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return { question, correctAnswer };
};
export const runEvenGame = () => {
  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGame(gameDescription, generateRound);
};