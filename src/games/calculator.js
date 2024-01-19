const gameRounds = 3;
const gameGreeting = 'What is the result of the expression?';
const MAX_RANDOM_NUMBER = 100;

const gameFunction = () => {
  const operations = ['+', '-', '*'];
  const num1 = Math.floor(Math.random() * MAX_RANDOM_NUMBER);
  const num2 = Math.floor(Math.random() * MAX_RANDOM_NUMBER);
  const operation = operations[Math.floor(Math.random() * operations.length)];

  const question = `${num1} ${operation} ${num2}`;
  let correctAnswer;

  switch (operation) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
    default:
      throw new Error('Unknown operation');
  }

  return [question, correctAnswer.toString()];
};

export { gameFunction, gameRounds, gameGreeting };
