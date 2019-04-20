'use strict';

var questions = ['Do I have siblings ?', 'Am I from Mars?', 'Can I go fishing in the Sahara?', 'Have I ever eaten Balut? ', 'Have I ever been ice skating in the Grand Canyon?' ];
var answers = ['yes', 'no', 'yes', 'no', 'no' ]

var numQuestion = ['How many hours do I sleep?']
var numAnswer = 11

//Prompt user and get a response

var response = prompt(questions[0]).toLowerCase();
if (response === answers[0]) {
  alert('You are right!');
  console.log({correct:'Yes'});
} else {
  alert('Oh, but I do.');
  console.log({incorrect:'No'});
}

var response1 = prompt(numQuestion[0]);
if (response1 > numAnswer) {
  alert('That is to much!');
} else {
  alert('That is to low.');
}
/*var response = prompt(questions[1]);
if (response === answers[1]) {
  alert('Congrats! :)');
  console.log({correct:'No'});
} else {
  alert('Is that an insult? :(');
  console.log({incorrect:'Yes'});
}*/