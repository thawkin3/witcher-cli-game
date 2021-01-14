const prompts = require('prompts');

const sneakResult = Math.random() > 0.5;

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
  {
    type: 'select',
    name: 'weapon',
    message: 'Choose your weapon',
    choices: [
      { title: 'Silver sword', value: 'silverSword' },
      { title: 'Dagger', value: 'dagger' },
      { title: 'Crossbow', value: 'crossbow' },
    ],
  },
  {
    type: 'select',
    name: 'nightWraith',
    message: 'You stumble upon a night wraith. What do you do?',
    choices: [
      { title: 'Fight', value: 'fight' },
      { title: 'Run away', value: 'runAway' },
      { title: 'Sneak', value: 'sneak' },
    ],
  },
  {
    type: prev => prev === 'runAway' ? 'confirm' : null,
    name: 'nightWraithRunAway',
    message: 'You got away safely! Ready to continue on your journey?',
  },
  {
    type: prev => prev === 'sneak' ? 'confirm' : null,
    name: 'nightWraithSneak',
    message: sneakResult ? 'You snuck by safely! Ready to continue on your journey?' : 'Oh no! It saw you! Ready to fight?',
  },
  {
    type: (prev, values) => values.nightWraith === 'fight' || (values.nightWraith === 'sneak' && sneakResult === false) ? 'confirm' : null,
    name: 'nightWraithFight',
    message: 'Fight!',
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
