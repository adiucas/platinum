function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}

$('.first-option').hide();

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

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