import readlineSync from 'readline-sync';

const askName = () => {
    const name = readlineSync.question('Your name: ');
    console.log(`Hello, ${name}!`);
};

export default askName;