function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 7000); // Change image every 2 seconds
}

function nextMsg1() {
    if (messages.length == 0) {
        // once there is no more message, do whatever you want
        // alert("redirecting");
    } else {
        // change content of message, fade in, wait, fade out and continue with next message
        $('#message').html(messages.pop()).fadeIn(500).delay(1000).fadeOut(500, nextMsg1);
        
    }
};
// list of messages to display
var messages = [
    "Hello!",
    "This is a website!",
    "You are now going to be redirected.",
    "Are you ready?",
].reverse();

// initially hide the message
$('#message').hide();
nextMsg1();

















