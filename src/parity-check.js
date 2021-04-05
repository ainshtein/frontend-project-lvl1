import readlineSync from 'readline-sync';

const playParityCheck = () => {
  console.log('Welcome to the Brain Games!');

  const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const isEven = (number) => number % 2 === 0;

  const userName = readlineSync.question('May I have your name? ');
  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
  let roundsCounter = 0;
  const totalRounds = 3;

  if (userName) {
    console.log(`Hello, ${userName}`);
  } else {
    console.log('Hello, user');
  }

  console.log(gameDescription);

  for (roundsCounter; roundsCounter < totalRounds; roundsCounter += 1) {
    const randomNumber = getRandomInt(1, 20);
    const question = `Question: ${randomNumber}`;
    console.log(question);

    let answer = readlineSync.question('Your answer: ');
    answer = answer.toString();

    if (isEven(randomNumber) && answer === 'yes') {
      console.log('Correct!');
    } else if (!isEven(randomNumber) && answer === 'no') {
      console.log('Correct!');
    } else if (isEven(randomNumber) && answer === 'no') {
      console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
      console.log(`Let's try again, ${userName}`);
      break;
    } else if (!isEven(randomNumber) && answer === 'yes') {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      console.log(`Let's try again, ${userName}`);
      break;
    } else {
      console.log(`wrong answer ;(. Let's try again, ${userName}.`);
      break;
    }
  }

  if (roundsCounter === 3) {
    console.log(`Congratulations, ${userName}`);
  }
};

export default playParityCheck;
