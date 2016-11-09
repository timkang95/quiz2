// write jQuery or vanilla javascript to do the following:
//  - loop through the list items in the <ol> and change their text and color to be different from what it is now check
//  - use js and html to create at least one custom accordion (by yourself, no copy paste) check
//  - create a button in the html that, once clicked, will fire off the function described in the next bullet point check
//  - write a function that will fade out all of the html inside the body tag and replace it with a custom goodbye message when you click the button check
//  - finally, write a function that makes you happy :D (as in, have some fun a write something cool, it's up to you!) check

$(document).ready(function(){
	$('.links li a').on('click', function(e) {
		e.preventDefault()
		alert('you clicked a link, good for you');
	});

  $('.ol li').each(function(){
    this.style.color = "red";
  });

	console.log("this is a message for you!!!");

	$(".fader").click(function(){
    $("body").fadeOut();
    $("html").html("<img src='images/goodbye.gif'>");
  });
});

var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function(){
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("show");
  }
}

function outOfTime(){
  console.log("Sorry no time to create a badass function but this makes me happy!!! being done the quiz that is");

  console.log("Sorry that was a lie because, The Great Professor Matt Bowytz gave us extra time");

  $("body").fadeOut();
  $("html").html("<img src='images/kingMatt.jpg'>");
}
