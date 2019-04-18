'use strict';

var questions = ['Do I have siblings?', 'Do I live on Mars?'];
var answers = ['Yes', 'No']



//Prompt user and get a response
var response = prompt(questions[0]);
if (response === answers[0])//.toLowerCase() {
  alert('You are right!');
  console.log({correct:'Yes'});
} else {
  alert('Nope, sorry.');
  console.log({incorrect:'No'});
}

//var arrayLength = questions.length, answers.length;
//for (i = 0; i < arrayLength; i++)

/*switch (answers) {
  case 'Yes':
  alert('why')
}