(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    // Initiate the wowjs
    new WOW().init();

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-150px');
        }
    });
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    // Header carousel
    $(".header-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        dots: false,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ]
    });

    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });

    // Testimonials carousel (لو محذوف، مش مشكلة)
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{ items:1 },
            768:{ items:2 },
            992:{ items:3 }
        }
    });

    // === الجزء الجديد: Zoom Modal للفيديوهات ===
    $('.tv-item').on('click', function () {
        const videoId = $(this).data('video-id');
        const embedCode = `
            <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@mokhtarismailcentre/video/${videoId}" data-video-id="${videoId}" style="width: 100%; height: 100%;">
                <section>
                    <a target="_blank" href="https://www.tiktok.com/@mokhtarismailcentre">@mokhtarismailcentre</a>
                </section>
            </blockquote>
            <script async src="https://www.tiktok.com/embed.js"></script>
        `;
        $('#modalTikTokEmbed').html(embedCode);
        $('#videoModal').modal('show');
    });

    // لما يقفل الـ modal، ننضف المحتوى عشان ميتعطلش الفيديو
    $('#videoModal').on('hidden.bs.modal', function () {
        $('#modalTikTokEmbed').html('');
    });

})(jQuery);