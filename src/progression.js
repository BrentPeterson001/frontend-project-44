import { runGame } from './index.js';

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateProgression = () => {
  const length = getRandomNumber(5, 10);
  const start = getRandomNumber(1, 20);
  const step = getRandomNumber(1, 10);
  const hiddenIndex = getRandomNumber(0, length - 1);

  const progression = [];

  for (let i = 0; i < length; i += 1) {
    const value = start + i * step;
    progression.push(value);
  }

  const correctAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';

  const question = progression.join(' ');

  return { question, correctAnswer };
};

const generateRound = () => {
  return generateProgression();
};

export const runProgressionGame = () => {
  const gameDescription = 'What number is missing in the progression?';
  runGame(gameDescription, generateRound);
};