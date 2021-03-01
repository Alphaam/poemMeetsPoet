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



// function nextMsg2() {
// 	var messages2 = [
//     "22!",
//     "This is a website!",
//     "You are now going to be redirected.",
//     "Are you ready?",
// 	].reverse();

// // initially hide the message
// $('#message2').hide();
//     if (messages2.length == 0) {
//         // once there is no more message, do whatever you want
//         // alert("redirecting");

//     } else {
//         // change content of message, fade in, wait, fade out and continue with next message
//         $('#message2').html(messages2.pop()).fadeIn(500).delay(1000).fadeOut(500, nextMsg2);
//     }
// };
// // list of messages to display

// nextMsg2();
// function nextMsg3() {
//     if (messages.length == 0) {
//         // once there is no more message, do whatever you want
//         // alert("redirecting");
//     } else {
//         // change content of message, fade in, wait, fade out and continue with next message
//         $('#message3').html(messages.pop()).fadeIn(500).delay(1000).fadeOut(500, nextMsg3);
//     }
// };
// // list of messages to display
// var messages = [
//     "Hello!",
//     "This is a website!",
//     "You are now going to be redirected.",
//     "Are you ready?",
// ].reverse();

// // initially hide the message
// $('#message3').hide();

// function nextMsg4() {
//     if (messages.length == 0) {
//         // once there is no more message, do whatever you want
//         // alert("redirecting");
//     } else {
//         // change content of message, fade in, wait, fade out and continue with next message
//         $('#message4').html(messages.pop()).fadeIn(500).delay(1000).fadeOut(500, nextMsg4);
//     }
// };
// // list of messages to display
// var messages = [
//     "Hello!",
//     "This is a website!",
//     "You are now going to be redirected.",
//     "Are you ready?",
// ].reverse();

// // initially hide the message
// $('#message4').hide();

// function nextMsg5() {
//     if (messages.length == 0) {
//         // once there is no more message, do whatever you want
//         // alert("redirecting");
//     } else {
//         // change content of message, fade in, wait, fade out and continue with next message
//         $('#message5').html(messages.pop()).fadeIn(500).delay(1000).fadeOut(500, nextMsg5);
//     }
// };
// // list of messages to display
// var messages = [
//     "Hello!",
//     "This is a website!",
//     "You are now going to be redirected.",
//     "Are you ready?",
// ].reverse();

// // initially hide the message
// $('#message5').hide();

// function nextMsg6() {
//     if (messages.length == 0) {
//         // once there is no more message, do whatever you want
//         // alert("redirecting");
//     } else {
//         // change content of message, fade in, wait, fade out and continue with next message
//         $('#message6').html(messages.pop()).fadeIn(500).delay(1000).fadeOut(500, nextMsg6);
//     }
// };
// // list of messages to display
// var messages = [
//     "Hello!",
//     "This is a website!",
//     "You are now going to be redirected.",
//     "Are you ready?",
// ].reverse();

// // initially hide the message
// $('#message6').hide();

// function nextMsg7() {
//     if (messages.length == 0) {
//         // once there is no more message, do whatever you want
//         // alert("redirecting");
//     } else {
//         // change content of message, fade in, wait, fade out and continue with next message
//         $('#message7').html(messages.pop()).fadeIn(500).delay(1000).fadeOut(500, nextMsg7);
//     }
// };
// // list of messages to display
// var messages = [
//     "Hello!",
//     "This is a website!",
//     "You are now going to be redirected.",
//     "Are you ready?",
// ].reverse();

// // initially hide the message
// $('#message7').hide();

// function nextMsg() {
//     if (messages.length == 0) {
//         // once there is no more message, do whatever you want
//         // alert("redirecting");
//     } else {
//         // change content of message, fade in, wait, fade out and continue with next message
//         $('#message').html(messages.pop()).fadeIn(500).delay(1000).fadeOut(500, nextMsg8);
//     }
// };
// // list of messages to display
// var messages = [
//     "Hello!",
//     "This is a website!",
//     "You are now going to be redirected.",
//     "Are you ready?",
// ].reverse();

// // initially hide the message
// $('#message').hide();

// function nextMsg() {
//     if (messages.length == 0) {
//         // once there is no more message, do whatever you want
//         // alert("redirecting");
//     } else {
//         // change content of message, fade in, wait, fade out and continue with next message
//         $('#message').html(messages.pop()).fadeIn(500).delay(1000).fadeOut(500, nextMsg9);
//     }
// };
// // list of messages to display
// var messages = [
//     "Hello!",
//     "This is a website!",
//     "You are now going to be redirected.",
//     "Are you ready?",
// ].reverse();

// // initially hide the message
// $('#message').hide();

// function nextMsg() {
//     if (messages.length == 0) {
//         // once there is no more message, do whatever you want
//         // alert("redirecting");
//     } else {
//         // change content of message, fade in, wait, fade out and continue with next message
//         $('#message').html(messages.pop()).fadeIn(500).delay(1000).fadeOut(500, nextMsg10);
//     }
// };
// // list of messages to display
// var messages = [
//     "Hello!",
//     "This is a website!",
//     "You are now going to be redirected.",
//     "Are you ready?",
// ].reverse();

// // initially hide the message
// $('#message').hide();

// function nextMsg() {
//     if (messages.length == 0) {
//         // once there is no more message, do whatever you want
//         // alert("redirecting");
//     } else {
//         // change content of message, fade in, wait, fade out and continue with next message
//         $('#message').html(messages.pop()).fadeIn(500).delay(1000).fadeOut(500, nextMsg);
//     }
// };
// // list of messages to display
// var messages = [
//     "Hello!",
//     "This is a website!",
//     "You are now going to be redirected.",
//     "Are you ready?",
// ].reverse();

// // initially hide the message
// $('#message').hide();

// function nextMsg() {
//     if (messages.length == 0) {
//         // once there is no more message, do whatever you want
//         // alert("redirecting");
//     } else {
//         // change content of message, fade in, wait, fade out and continue with next message
//         $('#message').html(messages.pop()).fadeIn(500).delay(1000).fadeOut(500, nextMsg);
//     }
// };
// // list of messages to display
// var messages = [
//     "Hello!",
//     "This is a website!",
//     "You are now going to be redirected.",
//     "Are you ready?",
// ].reverse();

// // initially hide the message
// $('#message').hide();

// function nextMsg() {
//     if (messages.length == 0) {
//         // once there is no more message, do whatever you want
//         // alert("redirecting");
//     } else {
//         // change content of message, fade in, wait, fade out and continue with next message
//         $('#message').html(messages.pop()).fadeIn(500).delay(1000).fadeOut(500, nextMsg);
//     }
// };
// // list of messages to display
// var messages = [
//     "Hello!",
//     "This is a website!",
//     "You are now going to be redirected.",
//     "Are you ready?",
// ].reverse();

// // initially hide the message
// $('#message').hide();

// function nextMsg() {
//     if (messages.length == 0) {
//         // once there is no more message, do whatever you want
//         // alert("redirecting");
//     } else {
//         // change content of message, fade in, wait, fade out and continue with next message
//         $('#message').html(messages.pop()).fadeIn(500).delay(1000).fadeOut(500, nextMsg);
//     }
// };
// // list of messages to display
// var messages = [
//     "Hello!",
//     "This is a website!",
//     "You are now going to be redirected.",
//     "Are you ready?",
// ].reverse();

// // initially hide the message
// $('#message').hide();

// function nextMsg() {
//     if (messages.length == 0) {
//         // once there is no more message, do whatever you want
//         // alert("redirecting");
//     } else {
//         // change content of message, fade in, wait, fade out and continue with next message
//         $('#message').html(messages.pop()).fadeIn(500).delay(1000).fadeOut(500, nextMsg);
//     }
// };
// // list of messages to display
// var messages = [
//     "Hello!",
//     "This is a website!",
//     "You are now going to be redirected.",
//     "Are you ready?",
// ].reverse();

// // initially hide the message
// $('#message').hide();

// function nextMsg() {
//     if (messages.length == 0) {
//         // once there is no more message, do whatever you want
//         // alert("redirecting");
//     } else {
//         // change content of message, fade in, wait, fade out and continue with next message
//         $('#message').html(messages.pop()).fadeIn(500).delay(1000).fadeOut(500, nextMsg);
//     }
// };
// // list of messages to display
// var messages = [
//     "Hello!",
//     "This is a website!",
//     "You are now going to be redirected.",
//     "Are you ready?",
// ].reverse();

// // initially hide the message
// $('#message').hide();

// function nextMsg() {
//     if (messages.length == 0) {
//         // once there is no more message, do whatever you want
//         // alert("redirecting");
//     } else {
//         // change content of message, fade in, wait, fade out and continue with next message
//         $('#message').html(messages.pop()).fadeIn(500).delay(1000).fadeOut(500, nextMsg);
//     }
// };
// // list of messages to display
// var messages = [
//     "Hello!",
//     "This is a website!",
//     "You are now going to be redirected.",
//     "Are you ready?",
// ].reverse();

// // initially hide the message
// $('#message').hide();

// function nextMsg() {
//     if (messages.length == 0) {
//         // once there is no more message, do whatever you want
//         // alert("redirecting");
//     } else {
//         // change content of message, fade in, wait, fade out and continue with next message
//         $('#message').html(messages.pop()).fadeIn(500).delay(1000).fadeOut(500, nextMsg);
//     }
// };
// // list of messages to display
// var messages = [
//     "Hello!",
//     "This is a website!",
//     "You are now going to be redirected.",
//     "Are you ready?",
// ].reverse();

// // initially hide the message
// $('#message').hide();

// function nextMsg() {
//     if (messages.length == 0) {
//         // once there is no more message, do whatever you want
//         // alert("redirecting");
//     } else {
//         // change content of message, fade in, wait, fade out and continue with next message
//         $('#message').html(messages.pop()).fadeIn(500).delay(1000).fadeOut(500, nextMsg);
//     }
// };
// // list of messages to display
// var messages = [
//     "Hello!",
//     "This is a website!",
//     "You are now going to be redirected.",
//     "Are you ready?",
// ].reverse();

// // initially hide the message
// $('#message').hide();

// function nextMsg() {
//     if (messages.length == 0) {
//         // once there is no more message, do whatever you want
//         // alert("redirecting");
//     } else {
//         // change content of message, fade in, wait, fade out and continue with next message
//         $('#message').html(messages.pop()).fadeIn(500).delay(1000).fadeOut(500, nextMsg);
//     }
// };
// // list of messages to display
// var messages = [
//     "Hello!",
//     "This is a website!",
//     "You are now going to be redirected.",
//     "Are you ready?",
// ].reverse();

// // initially hide the message
// $('#message').hide();

// function nextMsg() {
//     if (messages.length == 0) {
//         // once there is no more message, do whatever you want
//         // alert("redirecting");
//     } else {
//         // change content of message, fade in, wait, fade out and continue with next message
//         $('#message').html(messages.pop()).fadeIn(500).delay(1000).fadeOut(500, nextMsg);
//     }
// };
// // list of messages to display
// var messages = [
//     "Hello!",
//     "This is a website!",
//     "You are now going to be redirected.",
//     "Are you ready?",
// ].reverse();

// // initially hide the message
// $('#message').hide();

// function nextMsg() {
//     if (messages.length == 0) {
//         // once there is no more message, do whatever you want
//         // alert("redirecting");
//     } else {
//         // change content of message, fade in, wait, fade out and continue with next message
//         $('#message').html(messages.pop()).fadeIn(500).delay(1000).fadeOut(500, nextMsg);
//     }
// };
// // list of messages to display
// var messages = [
//     "Hello!",
//     "This is a website!",
//     "You are now going to be redirected.",
//     "Are you ready?",
// ].reverse();

// // initially hide the message
// $('#message').hide();

// function nextMsg() {
//     if (messages.length == 0) {
//         // once there is no more message, do whatever you want
//         // alert("redirecting");
//     } else {
//         // change content of message, fade in, wait, fade out and continue with next message
//         $('#message').html(messages.pop()).fadeIn(500).delay(1000).fadeOut(500, nextMsg);
//     }
// };
// // list of messages to display
// var messages = [
//     "Hello!",
//     "This is a website!",
//     "You are now going to be redirected.",
//     "Are you ready?",
// ].reverse();

// // initially hide the message
// $('#message').hide();

// function nextMsg() {
//     if (messages.length == 0) {
//         // once there is no more message, do whatever you want
//         // alert("redirecting");
//     } else {
//         // change content of message, fade in, wait, fade out and continue with next message
//         $('#message').html(messages.pop()).fadeIn(500).delay(1000).fadeOut(500, nextMsg);
//     }
// };
// // list of messages to display
// var messages = [
//     "Hello!",
//     "This is a website!",
//     "You are now going to be redirected.",
//     "Are you ready?",
// ].reverse();

// // initially hide the message
// $('#message').hide();

// function nextMsg() {
//     if (messages.length == 0) {
//         // once there is no more message, do whatever you want
//         // alert("redirecting");
//     } else {
//         // change content of message, fade in, wait, fade out and continue with next message
//         $('#message').html(messages.pop()).fadeIn(500).delay(1000).fadeOut(500, nextMsg);
//     }
// };
// // list of messages to display
// var messages = [
//     "Hello!",
//     "This is a website!",
//     "You are now going to be redirected.",
//     "Are you ready?",
// ].reverse();

// // initially hide the message
// $('#message').hide();

// function nextMsg() {
//     if (messages.length == 0) {
//         // once there is no more message, do whatever you want
//         // alert("redirecting");
//     } else {
//         // change content of message, fade in, wait, fade out and continue with next message
//         $('#message').html(messages.pop()).fadeIn(500).delay(1000).fadeOut(500, nextMsg);
//     }
// };
// // list of messages to display
// var messages = [
//     "Hello!",
//     "This is a website!",
//     "You are now going to be redirected.",
//     "Are you ready?",
// ].reverse();

// // initially hide the message
// $('#message').hide();

// function nextMsg() {
//     if (messages.length == 0) {
//         // once there is no more message, do whatever you want
//         // alert("redirecting");
//     } else {
//         // change content of message, fade in, wait, fade out and continue with next message
//         $('#message').html(messages.pop()).fadeIn(500).delay(1000).fadeOut(500, nextMsg);
//     }
// };
// // list of messages to display
// var messages = [
//     "Hello!",
//     "This is a website!",
//     "You are now going to be redirected.",
//     "Are you ready?",
// ].reverse();

// // initially hide the message
// $('#message').hide();

// function nextMsg() {
//     if (messages.length == 0) {
//         // once there is no more message, do whatever you want
//         // alert("redirecting");
//     } else {
//         // change content of message, fade in, wait, fade out and continue with next message
//         $('#message').html(messages.pop()).fadeIn(500).delay(1000).fadeOut(500, nextMsg);
//     }
// };
// // list of messages to display
// var messages = [
//     "Hello!",
//     "This is a website!",
//     "You are now going to be redirected.",
//     "Are you ready?",
// ].reverse();

// // initially hide the message
// $('#message').hide();

// function nextMsg() {
//     if (messages.length == 0) {
//         // once there is no more message, do whatever you want
//         // alert("redirecting");
//     } else {
//         // change content of message, fade in, wait, fade out and continue with next message
//         $('#message').html(messages.pop()).fadeIn(500).delay(1000).fadeOut(500, nextMsg);
//     }
// };
// // list of messages to display
// var messages = [
//     "Hello!",
//     "This is a website!",
//     "You are now going to be redirected.",
//     "Are you ready?",
// ].reverse();

// // initially hide the message
// $('#message').hide();

// function nextMsg() {
//     if (messages.length == 0) {
//         // once there is no more message, do whatever you want
//         // alert("redirecting");
//     } else {
//         // change content of message, fade in, wait, fade out and continue with next message
//         $('#message').html(messages.pop()).fadeIn(500).delay(1000).fadeOut(500, nextMsg);
//     }
// };
// // list of messages to display
// var messages = [
//     "Hello!",
//     "This is a website!",
//     "You are now going to be redirected.",
//     "Are you ready?",
// ].reverse();

// // initially hide the message
// $('#message').hide();

// // start animation
// nextMsg1();
// nextMsg2();
// nextMsg3();
// nextMsg4();
// nextMsg5();
// nextMsg6();
// nextMsg7();
// nextMsg8();
// nextMsg9();
// nextMsg10();
// nextMsg11();
// nextMsg12();
// nextMsg13();
// nextMsg14();
// nextMsg15();
// nextMsg16();
// nextMsg17();
// nextMsg18();
// nextMsg19();
// nextMsg20();
// nextMsg21();
// nextMsg22();
// nextMsg23();
// nextMsg24();
// nextMsg25();
// nextMsg26();
// nextMsg27();
// nextMsg28();
// nextMsg29();


