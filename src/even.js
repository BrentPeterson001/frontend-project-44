import readlineSync from 'readline-sync';

import { greeting } from './cli.js';

const isEven = (number) => number % 2 === 0;

export const runEvenGame = () => {
  const name = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const questions = [
    Math.floor(Math.random() * 100) + 1,
    Math.floor(Math.random() * 100) + 1,
    Math.floor(Math.random() * 100) + 1,
  ];
  for (let i = 0; i < questions.length; i += 1) {
    const randomNumber = questions[i];
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};