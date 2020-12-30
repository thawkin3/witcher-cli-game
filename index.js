const prompts = require('prompts');

const questions = [
  {
    type: 'confirm',
    name: 'start',
    message: 'You are a character in the hit TV series The Witcher. Battle your enemies to prove yourself the victor! Ready?',
  },
  {
    type: 'select',
    name: 'character',
    message: 'Choose your character',
    choices: [
      { title: 'Geralt', value: 'Geralt' },
      { title: 'Ciri', value: 'Ciri' },
      { title: 'Yennefer', value: 'Yennefer' },
    ],
  },
];

const options = {
  onSubmit: (prompt, answer, answers) => {
    if (!answers.start) {
      console.log('Hope to see you again soon!');
      return true;
    }
  }
};

(async () => {
  const response = await prompts(questions, options);
  console.log(response);
})();
