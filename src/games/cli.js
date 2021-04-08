import readlineSync from 'readline-sync';

const greeting = () => {
  const name = readlineSync.question('May I have your name? ');

  if (name) {
    console.log(`Hello, ${name}`);
  } else {
    console.log('Hello, user');
  }
};

export default greeting;
