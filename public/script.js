$(document).ready(function () {
    // Add an event listener for scroll
    $(window).scroll(function () {
        // Check if the user has scrolled down by comparing the scroll position
        if ($(this).scrollTop() > 50) {
            $('.navbar').css('background-color', 'rgba(0, 1, 3, 0.85)');
        } else {
            $('.navbar').css('background-color', 'transparent');
        }
    });
});

var countDownDate = new Date("feb 22, 2024 00:00:00").getTime();
var x=setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / (1000));

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

},1000);
for (var i = 0; i < 100; i++) {
    var star = '<div class="star" style="animation: twinkle '+((Math.random()*5) + 5)+'s linear '+((Math.random()*5) + 5)+'s infinite; top: '+Math.random()*$(window).height()+'px; left: '+Math.random()*$(window).width()+'px;"></div>';
    $('body').append(star);
  }