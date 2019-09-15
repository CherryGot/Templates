function render_particles() {
    var options = {
        "particles":{
            "number":{
                "value":33,
                "density":{
                    "enable":true,
                    "value_area":552.4033491425909
                }
            },
            "color":{
                "value":"#555555"
            },
            "shape":{
                "type":"circle",
                "stroke":{
                    "width":0,
                    "color":"#000000"
                },
                "polygon":{
                    "nb_sides":3
                },
                "image":{
                    "src":"img/github.svg",
                    "width":70,
                    "height":100
                }
            },
            "opacity":{
                "value":1,
                "random":true,
                "anim":{
                    "enable":false,
                    "speed":1,
                    "opacity_min":0.1,
                    "sync":false
                }
            },
            "size":{
                "value":1.2,
                "random":true,
                "anim":{
                    "enable":false,
                    "speed":40,
                    "size_min":0.1,
                    "sync":false
                }
            },
            "line_linked":{
                "enable":false,
                "distance":150,
                "color":"#ffffff",
                "opacity":0.4,
                "width":1
            },
            "move":{
                "enable":true,
                "speed":1.5782952832645452,
                "direction":"none",
                "random":true,
                "straight":false,
                "out_mode":"out",
                "bounce":false,
                "attract":{
                    "enable":false,
                    "rotateX":600,
                    "rotateY":1200
                }
            }
        },
        "interactivity":{
            "detect_on":"canvas",
            "events":{
                "onhover":{
                    "enable":false,
                    "mode":"repulse"
                },
                "onclick":{
                    "enable":true,
                    "mode":"repulse"
                },
                "resize":true
            },
            "modes":{
                "grab":{
                    "distance":400,
                    "line_linked":{
                        "opacity":1
                    }
                },
                "bubble":{
                    "distance":400,
                    "size":40,
                    "duration":2,
                    "opacity":8,
                    "speed":3
                },
                "repulse":{
                    "distance":200,
                    "duration":0.4},
                    "push":{
                        "particles_nb":4
                    },
                    "remove":{
                        "particles_nb":2
                    }
                }
            },
            "retina_detect":false
        };
    particlesJS( "particles", options );
}

function init_ui() {
    render_particles();
}

function init_events() {
    $('header.header').mouseenter( function() {
        if( !window.pJSDom[0].pJS.particles.move.enable ) {
            window.pJSDom[0].pJS.particles.move.enable = true;
            window.pJSDom[0].pJS.fn.particlesRefresh();
        }
    });

    $('header.header').mouseleave( function() {
        if( window.pJSDom[0].pJS.particles.move.enable ) {
            window.pJSDom[0].pJS.particles.move.enable = false;
        }
    });
}
 
$(document).ready( function() {
    AOS.init();
    init_ui();

    init_events();
});