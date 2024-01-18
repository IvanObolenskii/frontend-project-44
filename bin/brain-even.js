#!/usr/bin/env node
import readlineSync from 'readline-sync';
import askName from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = askName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const isEven = (number) => number % 2 === 0;

const gameRounds = 3;
let res = false;

for (let round = 0; round < gameRounds; round++) {
  const number = Math.floor(Math.random() * 100);
  console.log(`Question: ${number}`);

  const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
  const correctAnswer = isEven(number) ? 'yes' : 'no';

  if (userAnswer !== correctAnswer) {
    console.log(`'${userAnswer}' is the wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
    break;
  } else {
    if (round === gameRounds - 1) res = true;
    console.log('Correct!');
  }
}

if (res) console.log(`Congratulations, ${name}!`);
