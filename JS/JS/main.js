$(document).ready(() => {
	
	var background = ["img/mechanics.jpg", "img/people.jpg", "img/showcase.jpg", "img/webdesign.jpg"];
	
	$('#btn').on('click', () => {
		$('#model').show();
		$('.backg1').css('background-image', 'url('+ background[0] +')')
		$('.backg2').css('background-image', 'url('+ background[1] +')')
		$('.backg3').css('background-image', 'url('+ background[2] +')')
		$('.backg4').css('background-image', 'url('+ background[3] +')')
	});
	
	$('.new-backgrounds > div').click(function() {
		$(this).toggleClass('add-border');
		$(this).siblings().removeClass('add-border');
	});
	
	$('#save-button').on('click', () => {

	var newIntroText = $('#intro-text').val();
	var newIntroTextColor = $('#intro-text-color').val();

	var newLogoTitle = $('#logo-title').val();
	var newLogoColor = $('#logo-color').val();
//		
		$('.intro-text > h1').text(newIntroText);
		$('.intro-text > h1').css('color', newIntroTextColor);
//		
		$('#branding > a span.highlight').text(newLogoTitle);
		$('#branding > a span.highlight').css('color', newLogoColor);

		// Clear input field
		$('.w3-input').focus(
			function(){
					$(this).val('');
			});
//		
		if($('.backg1').hasClass('add-border')) {
			$('#showcase').css('background-image', 'url(' + background[0] + ')');
		}else if($('.backg2').hasClass('add-border')) {
			$('#showcase').css('background-image', 'url(' + background[1] + ')');
		}else if($('.backg3').hasClass('add-border')) {
			$('#showcase').css('background-image', 'url(' + background[2] + ')');
		}else {
			$('#showcase').css('background-image', 'url(' + background[3] + ')');
		};
			$('#model').hide();			
		});
	
	
});

// Side Menu
// var current = document.querySelectorAll('.sidenav li');

// 	for(var i = 0; i < current.length; i++){
// 			current[i].onclick = function() {
// 				var element = current[0];
// 				while(element){
// 					if(element.tagName === 'LI'){
// 						element.classList.remove('current');
// 					}
// 					element = element.nextSibling;
// 				}
// 				this.classList.add('current');
// 			};
// 		}
		

	

		function openSlideMenu() {
			var nav = document.getElementById('mobile-nav');
			var wrap = document.getElementById('wrap');
			var stack = document.getElementById('body');
			nav.style.width = '250px';			
			wrap.style.display = 'block';
			stack.style.overflowY = 'hidden';
			window.addEventListener('mouseup', function(event) {		
				if(event.target != nav && event.target.parentNode != nav) {
					wrap.style.display = 'none';
					nav.style.width = '';
					stack.style.overflowY = '';
				}
			})
			
		};

	

