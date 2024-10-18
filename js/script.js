$(document).ready(function () {
    // Toggle the navigation when the toggler is clicked
    $('.nav-toggler').click(function () {
        $('.aside').toggleClass('active');
    });

    // Highlight the active section on scroll
    $(window).on('scroll', function () {
        let scrollPosition = $(this).scrollTop();

        $('section').each(function () {
            let sectionTop = $(this).offset().top - 100; // Offset for smoothness
            let sectionHeight = $(this).outerHeight();
            let sectionId = $(this).attr('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                $('.nav a').removeClass('active');
                $('.nav a[href="#' + sectionId + '"]').addClass('active');
            }
        });
    });

    // Smooth scrolling to sections
    $('.nav a').on('click', function (e) {
        e.preventDefault(); // Prevent the default anchor behavior

        // Remove active class from all links
        $('.nav a').removeClass('active');
        $(this).addClass('active'); // Add active class to the clicked link

        // Animate scroll to the target section
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 50 // Adjust scroll position
        }, 800);
    });
});
