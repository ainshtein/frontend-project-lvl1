import { cons } from '@hexlet/pairs';
import getRandomInt from '../utils.js';
import playBrainGames from "../index.js";

const isEven = (number) => number % 2 === 0;

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameData = () => {
  const gameQuestion = getRandomInt();
  const rightAnswer = isEven(gameQuestion) ? 'yes' : 'no';

  return cons(gameQuestion, rightAnswer);
};

export default () => playBrainGames(gameDescription, getGameData);
