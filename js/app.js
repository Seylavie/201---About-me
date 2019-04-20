'use strict';

var questions = ['Do I have siblings ?', 'Am I from Mars?', 'Can I go fishing in the Sahara?', 'Have I ever eaten Balut? ', 'Have I ever been ice skating in the Grand Canyon?'];
var answers = ['yes', 'no', 'yes', 'no', 'no']

var numQuestion = ['How many hours do I sleep?']
var numAnswer = 11

//Prompt user and get a response

for (var i = 0; i < questions.length; i++) {
  var response = prompt(questions[i]).toLowerCase();
  if (response === answers[i]) {
    alert('You are right!');
    console.log({ correct: 'Yes' });
  } else {
    alert('Oh, but I do.');
    console.log({ incorrect: 'No' });
  }

}

/*
var response = prompt(questions[1]);
if (response === answers[1]) {
  alert('Congrats! :)');
  console.log({correct:'No'});
} else {
  alert('Is that an insult? :(');
  console.log({incorrect:'Yes'});
}

var response = prompt(questions[2]);
if (response === answers[2]) {
  alert('Yay!');
  console.log({correct:'No'});
} else {
  alert('Why not? :(');
  console.log({incorrect:'Yes'});
}

var response = prompt(questions[3]);
if (response === answers[3]) {
  alert('Eww, no.');
  console.log({correct:'No'});
} else {
  alert('Correct!');
  console.log({incorrect:'Yes'});
}

var response = prompt(questions[4]);
if (response === answers[4]) {
  alert('Cool');
  console.log({correct:'No'});
} else {
  alert('Of course not :/');
  console.log({incorrect:'Yes'});
}

var response1 = prompt(numQuestion[0]);
if (response1 > numAnswer) {
  alert('That is to much!');
} else {
  alert('That is to low.');
}
*/
