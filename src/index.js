import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const roundsCount = 3;
const greetingText = '\nWelcome to the Brain Games!';

const playBrainGames = (gameDescription, getGameData) => {
  console.log(greetingText);

  const userName = readlineSync.question('May I have your name? \n');

  if (userName) {
    console.log(`Hello, ${userName}`);
  } else {
    console.log('Hello, user');
  }

  console.log(`${gameDescription}\n`);

  for (let i = 0; i < roundsCount; i += 1 ) {
    const gameData = getGameData();
    const getGameQuestion = car(gameData);
    const getGameAnswer = cdr(gameData);

    console.log(`Question: ${getGameQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== getGameAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${getGameAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!\n');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default playBrainGames;