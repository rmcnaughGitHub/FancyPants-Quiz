$(function(){

	$one = $('.one');
	$two = $('.two');
	$three = $('.three');

	var quizArr = [
		$one,
		$two,
		$three
	];

	console.log('Working ',quizArr);


	$('.correct').click(function(e){
		e.preventDefault();
		console.log('Correct');
	});


	$('.next').click(function(e){
		e.preventDefault();
		for (var i = 0; i < quizArr.length; i++){
			
			if( i == 0){
				quizArr[].animate(function(){

				});
			}

		}
		console.log('Next');
	});



});