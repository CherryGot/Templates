
$('#loginform-toggler').on('click', function(){
  $('.login-form-wrap').fadeToggle('slow');
});

$(document).ready(function() {    
  $('.bxslider').bxSlider ({
    buildPager: function (_) {
     return '<div class="bullets"></div>';
    }
  });
});