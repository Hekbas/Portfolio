(function ($) {
    "use strict";
    
    // loader
    var loader = function () {
        setTimeout(function () {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
            }
        }, 1);
    };
    loader();
    
    
    // Initiate the wowjs
    new WOW().init();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });
    
    
    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    
    
    // Typed Initiate
    if ($('.hero .hero-text h2').length == 1) {
        var typed_strings = $('.hero .hero-text .typed-text').text();
        var typed = new Typed('.hero .hero-text h2', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }


    //Hello there!
    document.addEventListener('DOMContentLoaded', function() {
        const hoverText = document.getElementById('hover-text');
    
        hoverText.addEventListener('mouseenter', function() {
            hoverText.textContent = 'General Kenobi!';
        });
    
        hoverText.addEventListener('mouseleave', function() {
            hoverText.textContent = 'Hello there!';
        });
    });
    
    
    // Skills
    $('.skills').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        center: true,
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            }
        }
    });
    
    
    //Portfolio featured
    document.addEventListener('DOMContentLoaded', function() {
        const contentWrapper = document.querySelector('.content-wrapper');
        const items = document.querySelectorAll('.content-item');
        const totalItems = items.length;
        const dotsContainer = document.querySelector('.dots');
        let currentIndex = 0;
    
        // Create dots based on the number of items
        function createDots() {
            for (let i = 0; i < totalItems; i++) {
                const dot = document.createElement('div');
                dot.classList.add('dot');
                dot.addEventListener('click', function() {
                    currentIndex = i;
                    updateContentPosition();
                    updateDots();
                });
                dotsContainer.appendChild(dot);
            }
        }
    
        // Update the active dot
        function updateDots() {
            const dots = document.querySelectorAll('.dot');
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }
    
        // Function to update the position of the content wrapper
        function updateContentPosition() {
            const offset = -currentIndex * 100; // Move the wrapper based on current index
            contentWrapper.style.transform = `translateX(${offset}%)`;
            updateDots();
        }
    
        // Event listener for left arrow
        document.querySelector('.left-arrow').addEventListener('click', function() {
            moveSlide(-1);
        });
    
        // Event listener for right arrow
        document.querySelector('.right-arrow').addEventListener('click', function() {
            moveSlide(1);
        });
    
        // Function to move the slide and wrap around if necessary
        function moveSlide(direction) {
            currentIndex += direction;
            if (currentIndex < 0) {
                currentIndex = totalItems - 1; // Wrap to last item
            } else if (currentIndex >= totalItems) {
                currentIndex = 0; // Wrap to first item
            }
            updateContentPosition();
        }
    
        // Initialize the slider
        createDots();
        updateDots();
    });
    

    // Portfolio filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-filter li').on('click', function () {
        $("#portfolio-filter li").removeClass('filter-active');
        $(this).addClass('filter-active');
        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);

