$(document).ready(function () {
    function checkHeader() {
        let scrollSize = $(window).scrollTop();
        if (scrollSize > 100) {
            $('header').addClass('scaled');
        } else {
            $('header').removeClass('scaled');
        }
    }
    checkHeader();
    $(window).scroll(function () {
        checkHeader();
        animation();
    });

// animation start
    function animation() {
        var windowHight = $(window).height();
        var scroll = $(window).scrollTop();
        $('.animation').each(function () {
            var pozicija = $(this).offset().top;
            var animacija = $(this).attr('data-animation');
            var delay = $(this).attr('data-delay');
            if (pozicija < scroll + windowHight - 50) {
                $(this).css('animation-delay', delay);
                $(this).addClass(animacija);
            }
        });

    }



    animation();

// animation end


    if ($('.team-slider').length > 0) {
        $('.team-slider').owlCarousel({
            autoplay: true,
            loop: true,
            responsive: {
                0: {
                    items: 1
                },
                500: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                }
            }


        });
    }


    if ($('.portfolio-slider').length > 0) {
        $('.portfolio-slider').owlCarousel({

            responsive: {
                0: {
                    items: 1
                },
                500: {
                    items: 2,
                    margin: 10
                },
                768: {
                    items: 3,
                    margin: 10
                },
                992: {
                    items: 4,
                    margin: 20
                }
            }


        });
    }





    if ($('.contact-form').length > 0) {
        $(function () {
            $(".contact-form").validate({
                highlight: function (element) {
                    $(element).addClass("is-invalid").removeClass("is-valid");
                    $(element).closest('.form-group').addClass("is-invalid").removeClass("is-valid");
                },
                unhighlight: function (element) {
                    $(element).removeClass('is-invalid').addClass('is-valid');
                    $(element).closest('.form-group').addClass("is-valid").removeClass("is-invalid");
                },
                rules: {
                    name: {
                        required: true
                    },
                    email: {
                        required: true,
                        email: true
                    }
                },
                errorElement: 'p',
                errorPlacement: function (error, element) {
                    error.appendTo($(element).closest('.form-group').find('.invalid-feedback'));
                }

            });
        });//Form Validation 
    }


    Fancybox.bind("[data-fancybox]", {
        // Your custom options
    });


});