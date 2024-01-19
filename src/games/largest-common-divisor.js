const gameRounds = 3;
const gameGreeting = 'Find the greatest common divisor of given numbers.';
const MAX_RANDOM_NUMBER = 100;
const gcd = (a, b) => {
  let x = a;
  let y = b;
  while (y !== 0) {
    const temp = y;
    y = x % y;
    x = temp;
  }
  return x;
};

const gameFunction = () => {
  const num1 = Math.floor(Math.random() * MAX_RANDOM_NUMBER) + 1;
  const num2 = Math.floor(Math.random() * MAX_RANDOM_NUMBER) + 1;
  const question = `${num1} ${num2}`;
  const correctAnswer = gcd(num1, num2).toString();

  return [question, correctAnswer];
};

export { gameFunction, gameRounds, gameGreeting };
