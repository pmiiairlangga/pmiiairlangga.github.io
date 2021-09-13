$(window).scroll(function() {
    if($(this).scrollTop() > 300) {
        $('#topBtn').fadeIn();
    } else {
        $('#topBtn').fadeOut();
    }
});

$('#topBtn').hide().click(function() {
    $('html, body').animate({scrollTop:0}, 900);
    return false;
});