$(function(){

	$one = $('.one');
	$two = $('.two');
	$three = $('.three');

	$next = $('.next');

	$marvin = $('.marvin');
	$snoopy = $('.snoopy');
	$yatch = $('.yatch');

	$correctImage = $('.correct-image');
	$inCorrectImage = $('.incorrect-image');

	var current = $one,
	rightAnswer = false,
	count = 0;

	var quizQuestions,
	quizArr = [
		$one,
		$two,
		$three
	];


	//FUNCTIONS
	function opacitySwitch(object, percentage, time = 300) {
		if( object.hasClass('display-none') ){
			object.removeClass('display-none').addClass('display-block');
		}
		object.animate({opacity: percentage}, time);
		//console.log( object, ' ', 'opacity ', object.css('opacity'));
	};


	function switchQuiz(){

		opacitySwitch($one, 0);
		opacitySwitch($two, 0);
		opacitySwitch($three, 0);

		for ( var i = 0; i < quizArr.length; i++ ) {
			if ( quizArr[0].css('opacity') == 1 ){
				opacitySwitch(quizArr[0], 0);
				opacitySwitch($marvin, 0);
				opacitySwitch(quizArr[1], 1, 1200);
				$('.quiz-three').removeClass('margin-Big-final');
				console.log('two');
			}
			if ( quizArr[1].css('opacity') == 1 ){
				opacitySwitch(quizArr[1], 0);
				opacitySwitch($snoopy, 0);
				opacitySwitch(quizArr[2], 1, 1200);
				$('.quiz-three').removeClass('margin-Big-final');
				console.log('two');
			}
		}

		if ( rightAnswer == true ){
			opacitySwitch($correctImage, 1);
		}else{
			opacitySwitch($inCorrectImage, 1);
		}

		console.log("CURRENT PAGE ",current);
		/*if( current == $one ){
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
		}*/
		
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

		opacitySwitch($correctImage,0);
		opacitySwitch($inCorrectImage,0);
		opacitySwitch($next,0);

		
		$correctImage.removeClass('display-block').addClass('display-none');
		$inCorrectImage.removeClass('display-block').addClass('display-none');
		$next.removeClass('display-block').addClass('display-none');

		for ( var i = 0; i < quizArr.length; i++ ) {
			if ( quizArr[0].css('opacity') == 1 ){
				opacitySwitch(quizArr[0], 0);
				opacitySwitch($marvin, 0);
				opacitySwitch(quizArr[1], 1, 1200);
				$('.quiz-three').removeClass('margin-Big-final');
				console.log('two');
			}
			if ( quizArr[1].css('opacity') == 1 ){
				opacitySwitch(quizArr[1], 0);
				opacitySwitch($snoopy, 0);
				opacitySwitch(quizArr[2], 1, 1200);
				$('.quiz-three').removeClass('margin-Big-final');
				console.log('two');
			}
		}

		/*if( current == $one ){
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