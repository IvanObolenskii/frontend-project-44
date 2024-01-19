const gameRounds = 3;
const gameGreeting = 'Answer "yes" if the number is even, otherwise answer "no".';
const MAX_RANDOM_NUMBER = 100;
const gameFunction = () => {
  const number = Math.floor(Math.random() * MAX_RANDOM_NUMBER);
  const question = `${number}`;
  const correctAnswer = (number % 2 === 0) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export { gameFunction, gameRounds, gameGreeting };
