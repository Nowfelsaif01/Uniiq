(function ($) {
    'use strict';
    var form = $('.d-flex.flex-column.col-md-6'),
        message = $('.messenger-box-contact__msg');

    function done_func(response) {
        message.fadeIn().removeClass('alert-danger').addClass('alert-success');
        message.text(response);
        setTimeout(function () {
            message.fadeOut();
        }, 3000);
        form.find('input:not([type="submit"]), textarea').val('');
    }

    function fail_func(data) {
        message.fadeIn().removeClass('alert-success').addClass('alert-danger');
        message.text(data.responseText);
        setTimeout(function () {
            message.fadeOut();
        }, 3000);
    }

    form.submit(function (e) {
        e.preventDefault();

        var fullName = $('#full-name');
        var email = $('#email');
        var fullNameVal = fullName.val().trim();
        var emailVal = email.val().trim();

        if (fullNameVal === '') {
            message.fadeIn().removeClass('alert-success').addClass('alert-danger');
            message.text("Please enter your name.");
            setTimeout(function () {
                message.fadeOut();
            }, 3000);
            fullName.addClass("invalid");
            return false;
        } else {
            fullName.removeClass("invalid");
        }

        if (emailVal === '') {
            message.fadeIn().removeClass('alert-success').addClass('alert-danger');
            message.text("Please enter your email.");
            setTimeout(function () {
                message.fadeOut();
            }, 3000);
            email.addClass("invalid");
            return false;
        } else if (!isValidEmail(emailVal)) {
            message.fadeIn().removeClass('alert-success').addClass('alert-danger');
            message.text("Please enter a valid email address.");
            setTimeout(function () {
                message.fadeOut();
            }, 3000);
            email.addClass("invalid");
            return false;
        } else {
            email.removeClass("invalid");
        }

        $.ajax({
            type: 'POST',
            url: form.attr('action'),
            data: form.serialize()
        })
        .done(done_func)
        .fail(fail_func);
    });

    function isValidEmail(email) {
        // Basic email validation using regex
        var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    }
})(jQuery);
