$(function(){

	'use strict'

	//ELEMENTS
	var $one = document.getElementById('one'),
		$next = document.getElementById('next'),
		$bgImage = document.getElementById('bg-image'),
		$correctImage = document.getElementById('right'),
		$inCorrectImage = document.getElementById('wrong'),

		//GLOBAL VARS
		current = $one,
		rightAnswer = false,
		count = 0,

		//QUIZ
		dataSource = './data/quiz.json',
		quizArr = [],
		questionText = document.getElementById('quest-text'),
		answersOneText = document.getElementById('answersOne'),
		answersTwoText = document.getElementById('answersTwo'),
		answersThreeText = document.getElementById('answersThree'),
		answersArr = [answersOneText,answersTwoText,answersThreeText];


	//FUNCTIONS
	/*$.getJSON(dataSource, function(json){
		console.log(json);
	});*/
	function loadJson(jsonFile){
		var data = JSON.parse(jsonFile);
		for (var i = 0; i<data.length; i++) {
			questionText.innerHTML = data[i].question1;
			answersArr.innerHTML = data[0].answers1;
			//console.log('JSON file = ',data[i]);
			console.log(data[i].answers1);
			console.log(' ',answersArr.innerHTML);
		}
		return data;
	};
	loadJson(quiz);

	/*function testLoad(node, number){
		var data = JSON.parse(node);
		questionText.innerHTML = data[number].question1;
		console.log(data[number].answers1);
	}
	testLoad(quiz, 0);
	function jsonLoad(node, numberVal, nodeValue){
		var data = JSON.parse(node);
		return [node, numberVal, nodeValue];
		console.log(data[numberVal].nodeValue);
	}
	jsonLoad(quiz, 0, question1);*/


	function opacitySwitch(object, percentage, time) {
		//default param for Safari fix
		if ( time == undefined ){
			time = 700;
		}
		if( object.hasClass('display-none') ){
			object.removeClass('display-none').addClass('display-block');
		}
		object.animate({opacity: percentage}, time);
		//console.log( object, ' ', 'opacity ', object.css('opacity'));
	};


	function fadeinTime(object, percentage, currentDiv){
		setInterval(function(){
			currentDiv = current;
			opacitySwitch(object, percentage);
		},300);
	};


	function switchQuiz(){
		/*opacitySwitch($one, 0);
		opacitySwitch($two, 0);
		opacitySwitch($three, 0);

		if( current == $one ){
			opacitySwitch($one, 0);
			opacitySwitch($marvin, 0);
			opacitySwitch($two, 1, 1200);
			$('.quiz-three').removeClass('margin-Big-final');
			//fadeinTime($two, 1, $two);
			console.log('two');
		}
		else if( current == $two ){
			opacitySwitch($two, 0);
			opacitySwitch($snoopy, 0);
			opacitySwitch($three, 1, 1200);
			$('.quiz-three').addClass('margin-Big-final');
			//fadeinTime($three, 1, $three);	
			$two.removeClass('display-block').addClass('display-none');
			console.log('three');
		}
		if ( rightAnswer == true ){
			opacitySwitch($correctImage, 1);
		}else{
			opacitySwitch($inCorrectImage, 1);
		}
		//console.log('current ',current,' Opacity ', current.css('opacity'));
		console.log("CURRENT PAGE ",current)*/
	};


	$('.correct').click(function(e){
		e.preventDefault();
		rightAnswer = true;
		if( current == $three ){
			opacitySwitch($next, 0);
			$next.removeClass('display-block').addClass('display-none');
		}else{
			opacitySwitch($next, 1);
		}
		switchQuiz();
		console.log('Correct');
	});

	$('.in-correct').click(function(e){
		e.preventDefault();
		rightAnswer = false;
		if( current == $three ){
			opacitySwitch($next, 0);
			$next.removeClass('display-block').addClass('display-none');
		}else{
			opacitySwitch($next, 1);
		}	
		switchQuiz();
		console.log('In-Correct');
	});



	$('.next').click(function(e){
		e.preventDefault();

		/*opacitySwitch($correctImage,0, function(){
			$correctImage.removeClass('display-block').addClass('display-none');
		});
		opacitySwitch($inCorrectImage,0, function(){
			$inCorrectImage.removeClass('display-block').addClass('display-none');
		});
		opacitySwitch($next,0, function(){
			$next.removeClass('display-block').addClass('display-none');
		});

		if( current == $one ){
			opacitySwitch($two, 1);
			opacitySwitch($snoopy, 1);
			$one.removeClass('display-block').addClass('display-none');
			// console.log('One');
			current = $two;	
		}
		else if( current == $two ){
			opacitySwitch($three, 1);
			opacitySwitch($yatch, 1);
			$two.removeClass('display-block').addClass('display-none');
			// console.log('Two');
			current = $three;	
		}*/

		console.log('Current Div ', current);
	});



});