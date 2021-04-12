import { cons } from '@hexlet/pairs';
import getRandomInt from '../utils.js';
import playBrainGames from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const findGreatestCommonDivisor = (a, b) => {
  const biggerValue = Math.max(a, b);
  const smallerValue = Math.min(a, b);
  const defaultDivisor = 1;

  for (let i = smallerValue; i > 1; i -= 1) {
    if (biggerValue % i === 0 && smallerValue % i === 0) {
      return i;
    }
  }
  return defaultDivisor;
};

const getGameData = () => {
  const firstValue = getRandomInt();
  const secondValue = getRandomInt();
  const gameQuestion = `${firstValue} ${secondValue}`;
  const rightAnswer = String(findGreatestCommonDivisor(firstValue, secondValue));

  return cons(gameQuestion, rightAnswer);
};

export default () => playBrainGames(gameDescription, getGameData);
