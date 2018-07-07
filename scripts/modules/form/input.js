import app from '../../app';

function resetValidationErrors(el) {
    const wrap = el.parents('.item-input');

    wrap.removeClass('item-input-invalid item-input-with-error-message');
    el.removeClass('input-invalid');
}

function isValid(el) {
    return !el.hasClass('input-invalid');
}

function setValidation(el, validationSet) {
    el.attr(validationSet);
}

function removeValidation(el) {
    el
        .removeAttr('required')
        .removeAttr('maxlength')
        .removeAttr('minlength')
        .removeAttr('pattern')
        .removeAttr('data-error-message')
}

function markInvalid(el) {
    const wrap = el.parents('.item-input');

    wrap.addClass('item-input-invalid item-input-with-error-message');
    el.addClass('input-invalid');
}

function addErrorMessage(el, message) {
    const messageWrap = el.siblings('.item-input-error-message')

    if (messageWrap.length) {
        messageWrap.text(message);
    }
    else {
        app.$('<div class="item-input-error-message">' + message + '</div>').insertAfter(el);
    }
}

function validate(el, condition, message) {
    resetValidationErrors(el);

    if (condition) {
        markInvalid(el);
        addErrorMessage(el, message)
    }
}

export default {
    resetValidationErrors: resetValidationErrors,
    isValid: isValid,
    setValidation: setValidation,
    removeValidation: removeValidation,
    markInvalid: markInvalid,
    validate: validate
};
