import generateRandomNumber from '../utils.js';

const gameRounds = 3;
const gameDescription = 'What number is missing in the progression?';
const MIN_PROGRESSION_LENGTH = 5;
const MAX_PROGRESSION_LENGTH = 10;
const MAX_START_VALUE = 10;
const MAX_STEP_VALUE = 10;
const MIN_STEP_VALUE = 1;

const generateProgression = (length, start, step) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  const hiddenElementIndex = generateRandomNumber(length);
  const correctAnswer = progression[hiddenElementIndex].toString();
  progression[hiddenElementIndex] = '..';
  const question = progression.join(' ');

  return { question, correctAnswer };
};

const gameFunction = () => {
  const progressionLength = generateRandomNumber(
    MAX_PROGRESSION_LENGTH - MIN_PROGRESSION_LENGTH + 1,
    MIN_PROGRESSION_LENGTH,
  );
  const progressionStart = generateRandomNumber(MAX_START_VALUE);
  const progressionStep = generateRandomNumber(
    MAX_STEP_VALUE - MIN_STEP_VALUE + 1,
    MIN_STEP_VALUE,
  );
  const {
    question,
    correctAnswer,
  } = generateProgression(progressionLength, progressionStart, progressionStep);

  return [question, correctAnswer];
};

export { gameFunction, gameRounds, gameDescription };
