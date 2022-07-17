$(document).ready(function(){
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if (scroll > 60) {
			$(".navbar").addClass("bg-nav")
			$(".navbar").css("box-shadow" , "0 3px 3px #e91b2321");
			$(".navbar-light .navbar-nav .nav-link").addClass("sticky-nav-link");
			$(".navbar-light .navbar-nav .active>.nav-link").removeClass("sticky-nav-link");
		}
		else{
			$(".navbar").removeClass("bg-nav")
			$(".navbar-light .navbar-nav .nav-link").removeClass("sticky-nav-link");
			$(".navbar").css("box-shadow" , "unset");
		}
	})
})

$(document).ready(function(){
	$('.zoomIn1').imageZoom();
});

$(document).ready(function(){
	$('.zoomIn2').imageZoom();
});

$(document).ready(function(){
	$('.zoomIn3').imageZoom();
});

$(document).ready(function(){
	$('.zoomIn4').imageZoom();
});

$(document).ready(function(){
	$('.zoomIn5').imageZoom();
});

$(document).ready(function(){
	$('.zoomIn6').imageZoom();
});
$(document).ready(function(){
	$('.zoomIn7').imageZoom();
});
$(document).ready(function(){
	$('.zoomIn8').imageZoom();
});

$('.zoomIn1').imageZoom({zoom : 300});
$('.zoomIn2').imageZoom({zoom : 300});
$('.zoomIn3').imageZoom({zoom : 300});
$('.zoomIn4').imageZoom({zoom : 300});
$('.zoomIn5').imageZoom({zoom : 250});
$('.zoomIn6').imageZoom({zoom : 250});
$('.zoomIn7').imageZoom({zoom : 250});
$('.zoomIn8').imageZoom({zoom : 250});

$(document).ready(function(){
	$(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    loop:true,
    responsiveClass:true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause:true,
    dots: false,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        576:{
            items:2,
            nav:false
        },
        768:{
        	items:3,
        	nav:false
        },
        1200:{
            items:4,
            nav:false,
            loop:true
        }
    }
})