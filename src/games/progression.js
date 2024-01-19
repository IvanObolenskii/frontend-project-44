const gameRounds = 3;
const gameGreeting = 'What number is missing in the progression?';
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
  return progression;
};

const hideElementInProgression = (progression, hiddenElementIndex) => {
  const progressionCopy = [...progression];
  progressionCopy[hiddenElementIndex] = '..';
  return progressionCopy;
};

const gameFunction = () => {
  const progressionLength = Math.floor(
    Math.random() * (MAX_PROGRESSION_LENGTH - MIN_PROGRESSION_LENGTH + 1),
  ) + MIN_PROGRESSION_LENGTH;
  const progressionStart = Math.floor(Math.random() * MAX_START_VALUE);
  const progressionStep = Math.floor(
    Math.random() * (MAX_STEP_VALUE - MIN_STEP_VALUE + 1),
  ) + MIN_STEP_VALUE;

  const progression = generateProgression(progressionLength, progressionStart, progressionStep);
  const hiddenElementIndex = Math.floor(Math.random() * progressionLength);
  const question = hideElementInProgression(progression, hiddenElementIndex).toString();
  const correctAnswer = progression[hiddenElementIndex].toString();

  return [question, correctAnswer];
};

export { gameFunction, gameRounds, gameGreeting };
