function resize_form() {
    $('.search-form-wrapper .card-body').css({
        'height': $('.search-form-wrapper .form.active').height() + 28
    });
}

function re_render() {
    resize_form();
}

$(document).ready( function() {
    re_render();

    $(window).resize( function() {
        re_render();
    });

    $('.search-form-wrapper .rev-search-btn').click( function() {
        $('.search-form-wrapper .form-1').removeClass('active');
        $('.search-form-wrapper .form-2').addClass('active');

        $('.search-forms').css({
            'transform': 'translateX(-50%)'
        });

        $('.std-search-btn').removeClass('d-none');
        $(this).addClass('d-none');

        resize_form();
    });


    $('.search-form-wrapper .std-search-btn').click( function() {
        $('.search-form-wrapper .form-2').removeClass('active');
        $('.search-form-wrapper .form-1').addClass('active');
        
        $('.search-forms').css({
            'transform': 'translateX(0)'
        });

        $('.rev-search-btn').removeClass('d-none');
        $(this).addClass('d-none');
        
        resize_form();
    });

    $('.counter').each(function() {
        let $this = $(this);
        let countTo = $this.attr('data-count');
        
        $({ countNum: $this.text()}).animate({
          countNum: countTo
        },
      
        {
          duration: 3000,
          easing:'linear',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
          }
        });  
    });
});
