$('.first-option').hide();

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

$('article').readmore({
  collapsedHeight:10,
  heightMargin: 16
});