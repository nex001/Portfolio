$(window).scroll(function () {
    console.log($(window).scrollTop());
    if($(window).scrollTop() > 150) {
        // $('#nav-pan').addClass('fixed-top');
    } else {
        // $('#nav-pan').css('position', 'relative');
    }
});