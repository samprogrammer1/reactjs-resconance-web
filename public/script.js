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


for (var i = 0; i < 100; i++) {
    var star = '<div class="star" style="animation: twinkle '+((Math.random()*5) + 5)+'s linear '+((Math.random()*5) + 5)+'s infinite; top: '+Math.random()*$(window).height()+'px; left: '+Math.random()*$(window).width()+'px;"></div>';
    $('body').append(star);
  }