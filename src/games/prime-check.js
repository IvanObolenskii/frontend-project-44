import generateRandomNumber from '../utils.js';

const gameRounds = 3;
const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const MAX_RANDOM_NUMBER = 100;

const isPrime = (num) => {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
};

const gameFunction = () => {
  const number = generateRandomNumber(MAX_RANDOM_NUMBER, 2);
  const question = String(number);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export { gameFunction, gameRounds, gameDescription };
