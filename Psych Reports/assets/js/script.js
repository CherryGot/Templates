function render_home_carousel() {
    if( window.innerHeight <= 991 ) {
        let height = $('#home-carousel .carousel-item.active .col.col-12')[1].offsetHeight;
        $('#home-carousel .carousel-item .content').css({
            'top': ( height / 2 ) + "px"
        });
    }
}

function init_ui() {
    if( $('#home-carousel').lenght > 0 )
        render_home_carousel();
}

$(document).ready( function() {
    init_ui();
});

$(window).resize( function() {
    init_ui();
})

$('#home-carousel').on('slide.bs.carousel', function () {
    render_home_carousel();
})

$('#contact-form').submit( function() {
    let name = $('#contact-name').val();
    let email = $('#contact-email').val();
    let message = $('#contact-message').val();

    let url = 'mailto:girishvaidya@psychreports.co.uk?';
    url += 'subject=New message from ' + name;
    url += '&body=' + message + '%0D%0A%0D%0A' + email;

    window.open(url, '_blank');
});

