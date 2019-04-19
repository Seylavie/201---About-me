'use strict';

var questions = ['Do I have siblings ?', 'Am I from Mars?', 'Can I go fishing in the Sahara?', 'Have I ever eaten Balut? ', 'Have I ever been ice skating in the Grand Canyon?' ];
var answers = ['yes', 'no', 'yes', 'no', 'no' ]

do {
  //Prompt user and get a response
  var response = prompt(questions[0]).toLowerCase();

  //Loop over questions
  for (var i = 0; i < questions.length; i++) {
    if (response === answers[0]) {
      alert('You are right!');
      console.log({correct:'Yes'});
      break;
    } else {
      alert('Oh, but I do.');
      console.log({incorrect:'No'});
      break;
    }
  }
} while (!correct);


/*var response = prompt(questions[1]);
if (response === answers[1]) {
  alert('Congrats! :)');
  console.log({correct:'No'});
} else {
  alert('Is that an insult? :(');
  console.log({incorrect:'Yes'});
}*/