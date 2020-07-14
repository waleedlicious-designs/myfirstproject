    jQuery(document).ready(function ($) {

        $('.testimonial-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            autoplay: 1000,
            responsive: {

                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 5
                }
            }
        })

        checkClasses();
        carousel.on('translated.owl.carousel', function (event) {
            checkClasses();
        });

        function checkClasses() {
            var total = $('.testimonial-carousel .owl-stage .owl-item.active').length;

            $('.testimonial-carousel .owl-stage .owl-item').removeClass('firstActiveItem lastActiveItem');

            $('.testimonial-carousel .owl-stage .owl-item.active').each(function (index) {
                if (index === 0) {
                    // this is the first one
                    $(this).addClass('firstActiveItem');
                }
                if (index === total - 1 && total > 1) {
                    // this is the last one
                    $(this).addClass('lastActiveItem');
                }
            });
        }


    });
