$(function(){
	let slideIndex = 1;
	let interval = setInterval("slidesShow()", 3000);

	slidesShow = function() {

  		(slideIndex > $('li').length) ? slideIndex = 1 
  		: (slideIndex < 1) ? slideIndex = 5 
  		: slideIndex;

  		for (let i = 0; i < $('li').length; i++) {
    			$($('li')[i]).css("display","none");
  		}

  		for (let i = 0; i < $('.dot').length; i++) {
    			$($('.dot')[i]).removeClass('active');
  		}
  		$($('li')[slideIndex - 1]).css("display","block");
  		$($('.dot')[slideIndex - 1]).addClass('active');
  		slideIndex++;
	}

  slidesShow();

	otherSlide = function (nb) {
  		slideIndex += nb - 1;
  		slidesShow();
	}

	currentSlide = function(position) {
  		slideIndex = position ;
  		slidesShow();
	}

	stop = function() {
  		clearInterval(interval);
	}

	restart = function() {
  		interval = setInterval("slidesShow()", 3000);
	}

	$('#carousel').mouseenter(function() {stop()});
	$('#carousel').mouseleave(function() {restart()});
  
});

