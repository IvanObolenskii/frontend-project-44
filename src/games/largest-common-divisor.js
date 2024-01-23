import generateRandomNumber from '../utils.js';

const gameRounds = 3;
const gameDescription = 'Find the greatest common divisor of given numbers.';
const MAX_RANDOM_NUMBER = 100;
const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
};

const gameFunction = () => {
  const num1 = generateRandomNumber(MAX_RANDOM_NUMBER, 1);
  const num2 = generateRandomNumber(MAX_RANDOM_NUMBER, 1);
  const question = `${num1} ${num2}`;
  const correctAnswer = gcd(num1, num2).toString();

  return [question, correctAnswer];
};

export { gameFunction, gameRounds, gameDescription };
