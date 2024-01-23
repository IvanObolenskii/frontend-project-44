const generateRandomNumber = (
  maxRandomNumber,
  minOffset = 0,
) => Math.floor(Math.random() * maxRandomNumber) + minOffset;

export default generateRandomNumber;
