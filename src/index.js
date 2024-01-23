import readlineSync from 'readline-sync';

const greetAndGetName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};
const playGame = (gameFunction, gameRounds, gameGreeting) => {
  const name = greetAndGetName();
  console.log(gameGreeting);

  for (let round = 0; round < gameRounds; round += 1) {
    const [question, correctAnswer] = gameFunction();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export { greetAndGetName, playGame };
