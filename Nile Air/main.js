$(document).ready( function() {

    setTimeout( function() {
        $('#loader .plane').addClass( 'fly' );

        setTimeout( function() {
            $('.non-loader').removeClass( 'non-loader' );
            $('#loader').addClass( 'non-loader' );
        }, 1000);
    }, 500);

    $('.nav-toggler').click( function() {
        var nav = $(this).siblings( '.menu' );
        nav.toggleClass( 'd-none' );

        $(document).mouseup( function( e ) {
            // if the target of the click isn't the container nor a descendant of the container
            if ( !nav.is( e.target ) && nav.has( e.target ).length === 0 ) {
                nav.addClass( 'd-none' );;
            }
        });
    });

    $('#translate-btn').click( function() {
        $(this).find( 'small.arabic' ).toggleClass( 'd-none' );
        $(this).find( 'small.english' ).toggleClass( 'd-none' );

        $('.navbar').toggleClass( 'flex-row-reverse' );
        $('.navbar .top-menu').toggleClass( 'flex-row-reverse' );
        $('.navbar .top-menu .menu-item').toggleClass( 'ml-4 mr-4' );

        $('#booking-window .tab-pane .tab-bar').find( '.row' ).toggleClass( 'flex-row-reverse' );
        $('#booking-window .tab-pane .tab-bar .tab-item-1, \
            #booking-window .tab-pane .tab-bar .tab-item-3').toggleClass( 'tab-item-1 tab-item-3' );
        $('#booking-window .form-group').toggleClass( 'text-right' );
        $('#booking-window .form-group .input-group').toggleClass( 'flex-row-reverse' );
        $('#booking-window .form-group i.fa').toggleClass( 'rtl' );
        $('#booking-window .tabs .sub-tab-menu .nav-tabs').toggleClass( 'flex-row-reverse' );
        $('#booking-window .tab-pane .tab .sub-tabs .tab .row').toggleClass( 'flex-row-reverse' );
        $('#site-footer .row').toggleClass( 'flex-row-reverse' );

        $('span.arabic, .form-control.arabic').toggleClass( 'd-none' );
        $('span.english, .form-control.english').toggleClass( 'd-none' );
    });

    $(document).scroll( function() {
        var header = $('#site-header');

        if ( $(document).scrollTop() >= header.height() ) {
            $('#sticky-nav').addClass( 'active' );
        }
        else {
            $('#sticky-nav').removeClass( 'active' );
        }
    });

    $('#booking-window .tab-pane .tab-bar .tab-item').click( function() {
        $('#booking-window .tab-pane .tab-bar .tab-item').removeClass( 'active' );
        $(this).addClass( 'active' );

        var this_html = $(this).find( '.heading' ).html();
        $('#booking-window .tab-pane .tab-bar .curr-heading').html( this_html );
    });

    $('#booking-window .tab-pane .tab-bar .tab-item-1').click( function() {
        $('#booking-window .tab-pane .tabs').css({ 
            'transform': 'translateX(0%)'
        });
    });

    $('#booking-window .tab-pane .tab-bar .tab-item-2').click( function() {
        $('#booking-window .tab-pane .tabs').css({ 
            'transform': 'translateX(-33.3333%)'
        });
    });

    $('#booking-window .tab-pane .tab-bar .tab-item-3').click( function() {
        $('#booking-window .tab-pane .tabs').css({ 
            'transform': 'translate(-66.6666%)'
        });
    });

    $('#booking-window .tab-pane .tab .sub-tab-menu .nav-link').click( function() {
        $('#booking-window .tab-pane .tab .sub-tab-menu .nav-link').removeClass( 'active' );
        $(this).addClass( 'active' );
    });

    $('#booking-window .tab-pane .tab .sub-tab-menu .nav-link-1').click( function() {
        $('#booking-window .tab-pane .tab .sub-tabs .tab').removeClass( 'active' );
        $('#booking-window .tab-pane .tab .sub-tabs .tab-1').addClass( 'active' );
    });

    $('#booking-window .tab-pane .tab .sub-tab-menu .nav-link-2').click( function() {
        $('#booking-window .tab-pane .tab .sub-tabs .tab').removeClass( 'active' );
        $('#booking-window .tab-pane .tab .sub-tabs .tab-2').addClass( 'active' );
    });

    $('#booking-window .tab-pane .tab .sub-tab-menu .nav-link-3').click( function() {
        $('#booking-window .tab-pane .tab .sub-tabs .tab').removeClass( 'active' );
        $('#booking-window .tab-pane .tab .sub-tabs .tab-3').addClass( 'active' );
    });
    
});