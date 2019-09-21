function draw() {
    $('.at-sidebar .at-sidebar-content').css({
        'max-height': (window.innerHeight - $('.at-sidebar .at-sidebar-header')[0].offsetHeight) + "px"
    });

    if( window.innerWidth < 768 ) {
        if( $('.at-sidebar').hasClass('show') ) {
            $('.at-sidebar').removeClass('show')
        }
    }
    else {
        if( !$('.at-sidebar').hasClass('show') ) {
            $('.at-sidebar').addClass('show')
        }
    }
}

function local_events() {
    $('.at-sidebar .at-sidebar-group').click( function() {
        if( $(this).hasClass('at-sidebar-group-open') ) {
            $(this).removeClass('at-sidebar-group-open');
            $(this).find('.at-sidebar--item').addClass('d-none');
        }
        else {
            $(this).addClass('at-sidebar-group-open');
            $(this).find('.at-sidebar--item').removeClass('d-none');
        }
    });
}

function global_events() {
    $(window).resize( function() {
        draw();
    });
}

function init_ui() {
    draw();
    local_events();
}

$(document).ready( function() {
    init_ui();
    global_events();
});
