import { cons } from '@hexlet/pairs';
import getRandomInt from "../utils.js";
import playBrainGames from "../index.js";

const calcOperations = ['+', '-', '*'];

const gameDescription = 'What is the result of the expression?';

const calculateExpression = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return null;
  }
};

const getGameData = () => {
  const firstCalcValue = getRandomInt();
  const secondCalcValue = getRandomInt();
  const calcOperation = calcOperations[getRandomInt(0, calcOperations.length -1)];
  const gameQuestion = `${firstCalcValue} ${calcOperation} ${secondCalcValue}`;
  const rightAnswer = String(calculateExpression(firstCalcValue, secondCalcValue, calcOperation));

  return cons(gameQuestion, rightAnswer);
};

export default () => playBrainGames(gameDescription, getGameData);
