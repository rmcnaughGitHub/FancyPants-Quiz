$(function(){

	$one = $('.one');
	$two = $('.two');
	$three = $('.three');
	$next = $('.next');
	$marvin = $('.marvin');
	$snoopy = $('.snoopy');
	$yatch = $('.yatch');

	var current;

	var quizArr = [
		$one,
		$two,
		$three
	];

	console.log('Working ',quizArr);

	function opacitySwitch(object, percentage) {
		if( object.hasClass('display-none') ){
			object.removeClass('display-none').addClass('display-block');
		}
		object.animate(function(){
			opacity: percentage,
			'swing'
		}, 300);
		//console.log('opacity ', object);
	}

	function fadeinTime(){
		setInterval(function(){
			opacitySwitch(current, 1);
		},100);
	}

	function switchQuiz(){
		var current = $one;
		//for (var i = 0; i < quizArr.length; i++){
			
			if( current == $one){
				opacitySwitch(current, 0);
				opacitySwitch($marvin, 0);
				//current = $two;
				//fadeinTime();
				
			}
			console.log('current ',current,' Opacity ', current.css('opacity'));
		//}
	}

	opacitySwitch($('.marvin'), 0);

	$('.correct').click(function(e){
		e.preventDefault();
		//opacitySwitch($next, 1);
		switchQuiz();
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