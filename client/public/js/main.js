
//Hard Code : While user press up / down
// Indicate current page

$('.page-indicator ul li:nth-child(1)').css('font-weight', '700');
$('.page-indicator ul li:nth-child(3)').css('font-weight', '400');
$(document).keydown(function (e) {
    if (e.keyCode == 38) { // up arrow key
        $('.page-indicator ul li:nth-child(1)').css('font-weight', '700');
        $('.page-indicator ul li:nth-child(3)').css('font-weight', '400');
        $('.position-absolute,.bottom-0,.end-0 pe-3').text('01');
        $('.page-indicator-bar').animate({
            top: '50px'
        }, 'easeInOut');
    }
    else if (e.keyCode == 40) { // down arrow key
        $('.page-indicator ul li:nth-child(1)').css('font-weight', '400');
        $('.page-indicator ul li:nth-child(3)').css('font-weight', '700');
        $('.position-absolute,.bottom-0,.end-0 pe-3').text('02');
        $('.page-indicator-bar').css('height', '-50');
        $('.page-indicator-bar').animate({
            top: '-50px'
        }, 'easeInOut');
    }
});

