function app() {
    let navLinks = $('header nav .navbar-nav .nav-link ');
    navLinks.on('click', function () {
        navLinks.removeClass('active');
        $(this).addClass('active')
    });

    navLinks.on('click', accessSection);
    $('#logo').on('click', accessSection);

    function accessSection (event) {
        event.preventDefault();
        let $section = $($(this).attr('href'));
        $('html, body').animate({
            scrollTop: $section.offset().top
        }, 800)
    }

    $('.up').on('click', function(event) {
        event.preventDefault();
        $('body, html').animate({scrollTop: 0}, 600);
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.up').fadeIn(300)
        } else {
            $('.up').fadeOut(300)
        }
    });


    let submit = $('#submit');
    submit.on('click', validateForm);

    function validateForm() {
        let name = $('#name').val();
        let email = $('#email').val();
        let password = $('#password').val();
        let notificationBox = $('.notification');
        let emailRegex = /[a-z0-9.]+@[a-z]+\.[a-z]{2,}/;
        let selectedOptionValue = $('#favorite').val();

        if (name.length === 0 || name.length > 24) {
            notificationBox
                .text('Please enter a valid name up to 24 characters')
                .fadeIn(100);

            setTimeout(function () {
                notificationBox.fadeOut()
            }, 2500);
        } else if (!emailRegex.test(email)) {
            notificationBox
                .text('Please enter a valid email address')
                .fadeIn(100);

            setTimeout(function () {
                notificationBox.fadeOut()
            }, 2500);
        } else if (password.length <= 12 || !/[0-9]+/.test(password) || !/[A-Za-z]+/.test(password)) {
            notificationBox
                .text('Password should be at least 13 characters and contain letters and numbers')
                .fadeIn(100);

            setTimeout(function () {
                notificationBox.fadeOut()
            }, 2500);

        } else if (selectedOptionValue === '0') {
            notificationBox
                .text('Please choose an option from the list')
                .fadeIn(100);

            setTimeout(function () {
                notificationBox.fadeOut()
            }, 2500);
        }
    }
}
