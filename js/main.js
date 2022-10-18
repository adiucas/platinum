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
});

function AddReadMore() {
    //This limit you can set after how much characters you want to show Read More.
    var carLmt = 270;
    // Text to show when text is collapsed
    var readMoreTxt = " ... See More";
    // Text to show when text is expanded
    var readLessTxt = "...Read Less";


    //Traverse all selectors with this class and manupulate HTML part to show Read More
    $(".addReadMore").each(function() {
        if ($(this).find(".firstSec").length)
            return;

        var allstr = $(this).text();
        if (allstr.length > carLmt) {
            var firstSet = allstr.substring(0, carLmt);
            var secdHalf = allstr.substring(carLmt, allstr.length);
            var strtoadd = firstSet + "<span class='SecSec'>" + secdHalf + "</span><span class='readMore'  title='Click to Show More'>" + readMoreTxt + "</span>";
            $(this).html(strtoadd);
        }

    });
    //Read More and Read Less Click Event binding
    $(document).on("click", ".readMore,.readLess", function() {
        $(this).closest(".addReadMore").toggleClass("showlesscontent showmorecontent");
    });
}

$(function() {
    //Calling function after Page Load
    AddReadMore();
});


$(document).ready(function(){
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 300) {
      $(".go-to-top").css("display","flex");
    }
    else{
      $(".go-to-top").css("display","none");
    }
  })
})

function scrollToTop() {
              $(window).scrollTop(0);
          }