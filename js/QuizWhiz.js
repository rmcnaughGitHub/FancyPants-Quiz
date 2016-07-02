'use strict'

/*
 * Either assign quiz to already established quiz or start over!!!
 */
var quiz = window.quiz || {};

quiz = {

	element: null,
	question: null,
	answers: null,
	response: null,
	next: null,
	data: null,
	index: null,
	feedbackResponse: null,

	/*
	 * Initialize object variables
	 */
	init: function(){
		quiz.element = document.querySelector('#quiz');
		quiz.question = document.querySelector('#question');
		quiz.answers = document.querySelector('#answers');
		quiz.response = document.querySelector('#response');
		quiz.nextButton = document.querySelector('#next');
		quiz.data = quiz.load();
		quiz.index = 0;
		quiz.next();
		quiz.setup();
	},

	/*
	 * Load all external data
	 */
	load: function(){
		// XHR Request for server data
		// Assing quiz.data to XHR response
		// Intead we did below cause we like fun...
		return(JSON.parse(quizData));
	},

	/*
	 * Set's up quiz
	 */
	setup: function(){
		quiz.question.innerHTML = quiz.data.content[quiz.index].question;
		quiz.data.content[quiz.index].answers.forEach(function(element, index){
			var anchor = document.createElement('a');
				anchor.href = "javascript:;"
				anchor.dataset.value = element;
				anchor.innerHTML = element;
				anchor.classList.add('answers');
				anchor.addEventListener('click', function(event){
					var selectedAnswer = event.srcElement.dataset.value;
					if(event.srcElement.dataset.value == quiz.data.content[quiz.index].correct){
						quiz.feedbackResponse = 'correct';
					}else{
						quiz.feedbackResponse = 'incorrect';
					}
					quiz.feedback();
					event.preventDefault();
				});
			/*
			 * Appens anchor element we created above to the empty div #answers
			 */
			quiz.answers.appendChild(anchor);
		});
	},

	/*
	 * Respond to an answer
	 */
	feedback: function(){
		quiz.response.classList.add('active', quiz.feedbackResponse);
	},

	/*
	 * Move to next question
	 */
	next: function(){
		quiz.nextButton.addEventListener('click', function(event){
			if(quiz.index == quiz.data.content.length - 1){
				var conf = confirm("Do you want to restart?");
				if(conf){
					window.location.href = window.location.href;
				}else{
					alert('GET OFF MY QUIZ!!!')
					window.location.href = 'http://www.google.com';
				}
			}else{
				quiz.index++;
				quiz.answers.innerHTML = "";
				quiz.setup();
				quiz.response.classList.remove('active', quiz.feedbackResponse);
				event.preventDefault();
			}
		});
	},

};

document.addEventListener("DOMContentLoaded", function() {
   quiz.init();
});
	