import generateRandomNumber from '../utils.js';

const gameRounds = 3;
const gameDescription = 'What is the result of the expression?';
const MAX_RANDOM_NUMBER = 100;

const calculate = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error('Unknown operation');
  }
};

const gameFunction = () => {
  const operations = ['+', '-', '*'];
  const num1 = generateRandomNumber(MAX_RANDOM_NUMBER);
  const num2 = generateRandomNumber(MAX_RANDOM_NUMBER);
  const operation = operations[generateRandomNumber(operations.length)];
  const question = `${num1} ${operation} ${num2}`;
  const correctAnswer = calculate(num1, num2, operation);

  return [question, correctAnswer.toString()];
};

export { gameFunction, gameRounds, gameDescription };
