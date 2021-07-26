$(document).ready(function() {

	$('.start-button').click(function(event) {
		$('.start, .first').addClass('active');
	});
	



	$('.first-button').click(function(event) {
		$('.first-button').addClass('active');
	});

	// var text = 2

	// console.log(test.classList.contains(".active"));

	// if($("#button-test").hasClass("first-button")){
	// 	console.log("yeea bitch!");
	// } else {
	// 	console.log("fuuuuu");
	// }

	$('#differences1').click(function(event) {
		$('#differences1').addClass('active');
	});


	$('#differences1').click(function(){
		if($('#differences1').hasClass("active")){
		$('.score-circl1').addClass('active');
	} else {
		console.log("fuuuuu");
	}
	});





	$('#differences2').click(function(event) {
		$('#differences2').addClass('active');
	});

	

	$('#differences2').click(function(){
		if($('#differences2').hasClass("active")){
		$('.score-circl2').addClass('active');
	} else {
		console.log("fuuuuu");
	}
	});





	$('#differences3').click(function(event) {
		$('#differences3').addClass('active');
	});
	

	$('#differences3').click(function(){
		if($('#differences3').hasClass("active")){
		$('.score-circl3').addClass('active');
	} else {
		console.log("fuuuuu");
	}
	});




	$('#differences4').click(function(event) {
		$('#differences4').addClass('active');
	});
	

	$('#differences4').click(function(){
		if($('#differences4').hasClass("active")){
		$('.score-circl4').addClass('active');
	} else {
		console.log("fuuuuu");
	}
	});







	$('.first-button').click(function(event) {
		$('#img2, .first-original, #differences1, #differences2, #differences3, #differences4, #score-text2').addClass('active');
	});

	$('.first-button').click(function(event) {
		$('.first-button').addClass('delete1');
		$('.first-button2').addClass('active');
	});

	$('.first-button').click(function(event) {
		$('.circle').addClass('active2');
	});

	$('.first-button').click(function(event) {
		$('#score-text').addClass('anvithible');
	});

	$('.first-button').click(function(event) {
		$('.first-original2, .first-kopiya2').addClass('vithible');
	});

	$('.first-button').click(function(event) {
		$('.img2-differeneces2-1, .img2-differeneces2-2, .img2-differeneces2-3').addClass('vithible2');
	});


	$('.first-button').click(function(event) {
		$('.score2-circl1, .score2-circl2, .score2-circl3, .score2-circl4').removeClass('anvithible1');
	});




	$('.img2-differeneces2-1').click(function(event) {
		$('.img2-differeneces2-1').addClass('active');
		$('.img2-differeneces2-1').addClass('anvithibl2');
	});

	$('.img2-differeneces2-1').click(function(){
		if($('.img2-differeneces2-1').hasClass("vithible2")){
		$('.score2-circl1').addClass('active');
	} else {
		console.log("fuuuuu");
	}
	});


	$('.img2-differeneces2-2').click(function(event) {
		$('.img2-differeneces2-2').addClass('active');
		$('.img2-differeneces2-2').addClass('anvithibl2');
	});

	$('.img2-differeneces2-2').click(function(){
		if($('.img2-differeneces2-2').hasClass("vithible2")){
		$('.score2-circl2').addClass('active');
	} else {
		console.log("fuuuuu");
	}
	});


	$('.img2-differeneces2-3').click(function(event) {
		$('.img2-differeneces2-3').addClass('active');
		$('.img2-differeneces2-3').addClass('anvithibl2');
	});

	$('.img2-differeneces2-3').click(function(){
		if($('.img2-differeneces2-3').hasClass("vithible2")){
		$('.score2-circl3').addClass('active');
	} else {
		console.log("fuuuuu");
	}
	});










	$('.first-button2').click(function(event) {
		$('.first-original3, .first-kopiya3').addClass('vithible');
	});

	$('.first-button2').click(function(event) {
		$('.first-kopiya2, .first-original2').addClass('active');
	});

	$('.first-button2').click(function(event) {
		$('.first-kopiya2, .first-original2').removeClass('vithible');
	});


	$('.first-button3').click(function(event) {
		$('.img2-differeneces3-3, .img2-differeneces3-2, .img2-differeneces3-1, #score-text4').addClass('active');
	});


	$('.first-button2').click(function(event) {
		$('#score-text2').addClass('anvithible');
	});


	$('.first-button2').click(function(event) {
		$('.anvithible1').addClass('active2');
	});


	$('.first-button2').click(function(event) {
		$('.score3-circl1, .score3-circl2, .score3-circl3').removeClass('anvithible2');
	});

	$('.first-button2').click(function(event) {
		$('.first-button2').addClass('delete1');
		$('.first-button3').addClass('active');
	});








	$('.first-button3').click(function(event) {
		$('.first-original4, .first-kopiya4').addClass('vithible');
	});

	$('.first-button3').click(function(event) {
		$('.first-kopiya3, .first-original3').addClass('active');
	});

	$('.first-button3').click(function(event) {
		$('.first-kopiya3, .first-original3').removeClass('vithible');
	});


	$('.first-button2').click(function(event) {
		$('.img2-differeneces2-3, .img2-differeneces2-2, .img2-differeneces2-1, #score-text3').addClass('active');
	});


	$('.first-button2').click(function(event) {
		$('#score-text2').addClass('anvithible');
	});


	$('.first-button2').click(function(event) {
		$('.anvithible1').addClass('active2');
	});


	$('.first-button2').click(function(event) {
		$('.score3-circl1, .score3-circl2, .score3-circl3').removeClass('anvithible2');
	});



	$('.first-button3').click(function(event) {
		$('.first-button3').addClass('delete1');
		$('.first-button4').addClass('active');
	});

	$('.first-button3').click(function(event) {
		$('#score-text3').addClass('anvithible');
	});


	$('.img2-differeneces3-1').click(function(event) {
		$('.img2-differeneces3-1').addClass('active');
		$('.img2-differeneces3-1').addClass('anvithibl2');
	});

	$('.img2-differeneces3-1').click(function(){
		if($('.img2-differeneces3-1').hasClass("vithible2")){
		$('.score3-circl1').addClass('active');
	} else {
		console.log("fuuuuu");
	}
	});


	$('.img2-differeneces3-2').click(function(event) {
		$('.img2-differeneces3-2').addClass('active');
		$('.img2-differeneces3-2').addClass('anvithibl2');
	});

	$('.img2-differeneces3-2').click(function(){
		if($('.img2-differeneces3-2').hasClass("vithible2")){
		$('.score3-circl2').addClass('active');
	} else {
		console.log("fuuuuu");
	}
	});


	$('.img2-differeneces3-3').click(function(event) {
		$('.img2-differeneces3-3').addClass('active');
		$('.img2-differeneces3-3').addClass('anvithibl2');
	});

	$('.img2-differeneces3-3').click(function(){
		if($('.img2-differeneces3-3').hasClass("vithible2")){
		$('.score3-circl3').addClass('active');
	} else {
		console.log("fuuuuu");
	}
	});


	$('.first-button2').click(function(event) {
		$('.img2-differeneces3-1, .img2-differeneces3-2, .img2-differeneces3-3').addClass('vithible2');
	});


	$('.first-button3').click(function(event) {
		$('.score4-circl1, .score4-circl2, .score4-circl3').removeClass('anvithible3');
	});












	$('.first-button3').click(function(event) {
		$('.img2-differeneces4-1, .img2-differeneces4-2, .img2-differeneces4-3').addClass('vithible2');
	});


	$('.img2-differeneces4-1').click(function(event) {
		$('.img2-differeneces4-1').addClass('active');
		$('.img2-differeneces4-1').addClass('anvithibl2');
	});

	$('.img2-differeneces4-1').click(function(){
		if($('.img2-differeneces4-1').hasClass("vithible2")){
		$('.score4-circl1').addClass('active');
	} else {
		console.log("fuuuuu");
	}
	});


	$('.img2-differeneces4-2').click(function(event) {
		$('.img2-differeneces4-2').addClass('active');
		$('.img2-differeneces4-2').addClass('anvithibl2');
	});

	$('.img2-differeneces4-2').click(function(){
		if($('.img2-differeneces4-2').hasClass("vithible2")){
		$('.score4-circl2').addClass('active');
	} else {
		console.log("fuuuuu");
	}
	});


	$('.img2-differeneces4-3').click(function(event) {
		$('.img2-differeneces4-3').addClass('active');
		$('.img2-differeneces4-3').addClass('anvithibl2');
	});

	$('.img2-differeneces4-3').click(function(){
		if($('.img2-differeneces4-3').hasClass("vithible2")){
		$('.score4-circl3').addClass('active');
	} else {
		console.log("fuuuuu");
	}
	});


	













	$('.first-button4').click(function(event) {
		$('.first-button4').addClass('delete1');
		$('.first-button5').addClass('active');
	});

	$('.first-button4').click(function(event) {
		$('.first-original5, .first-kopiya5').addClass('vithible');
	});


	$('.first-button4').click(function(event) {
		$('.first-kopiya4, .first-original4').addClass('active');
	});


	$('.first-button4').click(function(event) {
		$('.first-kopiya4, .first-original4').removeClass('vithible');
	});

	$('.first-button3').click(function(event) {
		$('.img2-differeneces3-3, .img2-differeneces3-2, .img2-differeneces3-1, #score-text4').addClass('active');
	});

	$('.first-button4').click(function(event) {
		$('#score-text4').addClass('anvithible');
	});

	$('.first-button4').click(function(event) {
		$('.score5-circl1, .score5-circl2, .score5-circl3').removeClass('anvithible4');
	});

	$('.first-button4').click(function(event) {
		$('#score-text5').addClass('active');
	});






	$('.first-button4').click(function(event) {
		$('.img2-differeneces5-1, .img2-differeneces5-2, .img2-differeneces5-3').addClass('vithible2');
	});


	$('.img2-differeneces5-1').click(function(event) {
		$('.img2-differeneces5-1').addClass('active');
		$('.img2-differeneces5-1').addClass('anvithibl2');
	});

	$('.img2-differeneces5-1').click(function(){
		if($('.img2-differeneces5-1').hasClass("vithible2")){
		$('.score5-circl1').addClass('active');
	} else {
		console.log("fuuuuu");
	}
	});


	$('.img2-differeneces5-2').click(function(event) {
		$('.img2-differeneces5-2').addClass('active');
		$('.img2-differeneces5-2').addClass('anvithibl2');
	});

	$('.img2-differeneces5-2').click(function(){
		if($('.img2-differeneces5-2').hasClass("vithible2")){
		$('.score5-circl2').addClass('active');
	} else {
		console.log("fuuuuu");
	}
	});


	$('.img2-differeneces5-3').click(function(event) {
		$('.img2-differeneces5-3').addClass('active');
		$('.img2-differeneces5-3').addClass('anvithibl2');
	});

	$('.img2-differeneces5-3').click(function(){
		if($('.img2-differeneces5-3').hasClass("vithible2")){
		$('.score5-circl3').addClass('active');
	} else {
		console.log("fuuuuu");
	}
	});






	$('.first-button5').click(function(){
		$('.first').addClass('deleted');
		$('.final').addClass('active');
	});



});