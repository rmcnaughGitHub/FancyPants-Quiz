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
	rightAnswer = false;

	var quizArr = [
		$one,
		$two,
		$three
	];

	//console.log('Working ',quizArr);

	function opacitySwitch(object, percentage) {
		if( object.hasClass('display-none') ){
			object.removeClass('display-none').addClass('display-block');
		}
		object.animate({opacity: percentage}, 300);
		//console.log( object, ' ', 'opacity ', object.css('opacity'));
	}

	function fadeinTime(object){
		setInterval(function(){
			opacitySwitch(object, 1);
		},100);
	}

	function switchQuiz(){
		//for (var i = 0; i < quizArr.length; i++){
			opacitySwitch($one, 0);
			opacitySwitch($two, 0);
			opacitySwitch($three, 0);
			if( current == $one ){
				opacitySwitch($one, 0);
				opacitySwitch($marvin, 0);
				current = $two;	
			}
			if( current == $two ){
				opacitySwitch($two, 0);
				opacitySwitch($snoopy, 0);
				current = $three;	
				///console.log('current ',current,' Opacity ', current.css('opacity'));
			}
			if( current == $three ){
				opacitySwitch($three, 0);
				opacitySwitch($yatch, 0);
				current = $one;	
				//console.log('current ',current,' Opacity ', current.css('opacity'));
			}
			console.log('current = ',current,' Opacity ', current.css('opacity'));
			//
			if ( rightAnswer == true ){
				opacitySwitch($correctImage, 1);
			}else{
				opacitySwitch($inCorrectImage, 1);
			}
			//console.log('current ',current,' Opacity ', current.css('opacity'));
		//}
	}


	$('.correct').click(function(e){
		e.preventDefault();
		rightAnswer = true;
		if( current == $three ){
			opacitySwitch($next, 0);
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
		/*for (var i = 0; i < quizArr.length; i++){
			
			if( i == 0){
				
			}

		}*/
		if( current == $one ){
			opacitySwitch($two, 1);
			opacitySwitch($snoopy, 1);
			//$one.removeClass('display-block').addClass('display-none');
			//$one.removeClass('display-block').addClass('display-none');
			current = $two;	
		}
		if( current == $two ){
			opacitySwitch($three, 1);
			opacitySwitch($yatch, 1);
			current = $three;	
		}
		console.log('Next');
	});



});