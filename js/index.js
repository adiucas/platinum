$('.first-option').hide();

var $grid = $('.grid').isotope({
  // options
  itemSelector: '.grid-item',
  layoutMode: 'fitRows'
});

$('.filter button').on("click", function(){
	var value = $(this).attr('data-name');
	$grid.isotope({
		filter:value
	});
})