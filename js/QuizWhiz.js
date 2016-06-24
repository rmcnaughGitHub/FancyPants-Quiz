$(function(){

	$one = $('.one');
	$two = $('.two');
	$three = $('.three');
	$next = $('.next');
	$marvin = $('.marvin');
	$snoopy = $('.snoopy');
	$yatch = $('.yatch');

	var current,
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
		object.animate({opacity: percentage}, 500);
		console.log( object, ' ', 'opacity ', object.css('opacity'));
	}

	function fadeinTime(object){
		setInterval(function(){
			opacitySwitch(object, 1);
		},100);
	}

	function switchQuiz(){
		var current = $one;
		//for (var i = 0; i < quizArr.length; i++){
			
			if( current == $one ){
				opacitySwitch(current, 0);
				opacitySwitch($marvin, 0);
				current = $two;
				fadeinTime(current);	
				console.log('current ',current,' Opacity ', current.css('opacity'));
			}
			if ( rightAnswer == true ){
				
			}
			//console.log('current ',current,' Opacity ', current.css('opacity'));
		//}
	}

	//opacitySwitch($('.one'), 0);
	//opacitySwitch($('.marvin'), 0);



	//$('.marvin').animate({opacity: 0}, 1000);

	$('.correct').click(function(e){
		e.preventDefault();
		opacitySwitch($next, 1);
		switchQuiz();
		rightAnswer = true;
		console.log('Correct');
	});


	$('.next').click(function(e){
		e.preventDefault();
		for (var i = 0; i < quizArr.length; i++){
			
			if( i == 0){
				
			}

		}
		switchQuiz();
		console.log('Next');
	});



});