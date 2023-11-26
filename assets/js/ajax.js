(function ($) {
    'use strict';
    var form = $('.d-flex.flex-column.col-md-6'),
        message = $('.messenger-box-contact__msg'),
        form_data;

    function done_func(response) {
        message.fadeIn().removeClass('alert-danger').addClass('alert-success');
        message.text(response);
        setTimeout(function () {
            message.fadeOut();
        }, 3000);
        form.find('input:not([type="submit"]), textarea').val('');
    }

    // fail function
    function fail_func(data) {
        message.fadeIn().removeClass('alert-success').addClass('alert-danger');
        message.text(data.responseText);
        setTimeout(function () {
            message.fadeOut();
        }, 3000);
    }

    form.submit(function (e) {
        e.preventDefault();
        var fullName = document.getElementById("full-name");
        var email = document.getElementById("email");

        if (!fullName.value || !email.value) {
            fullName.classList.add("invalid");
            console.log('false');
            return false;
        }

        form_data = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: form.attr('action'),
            data: form_data
        })
        .done(done_func)
        .fail(fail_func);
    });
})(jQuery);