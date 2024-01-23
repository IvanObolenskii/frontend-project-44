import generateRandomNumber from '../utils.js';

const gameRounds = 3;
const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const MAX_RANDOM_NUMBER = 100;
const isEven = (number) => number % 2 === 0;
const gameFunction = () => {
  const number = generateRandomNumber(MAX_RANDOM_NUMBER);
  const question = String(number);
  const correctAnswer = isEven(number) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export { gameFunction, gameRounds, gameDescription };
