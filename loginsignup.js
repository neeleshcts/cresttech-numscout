document.addEventListener('DOMContentLoaded', () => {

    // ========================================
    // STEP 1: Assign IDs to Sign Up form
    // ========================================
    const signUpForm = document.querySelectorAll('.modal-form')[0];
    signUpForm.setAttribute('id', 'signUpForm');

    const signUpInputs = signUpForm.querySelectorAll('input, select');
    const signUpIds = [
        'companyName',
        'gender',
        'firstName',
        'lastName',
        'email',
        'password',
        'confirmPassword',
        'tandC',
        'subscribe'
    ];

    signUpInputs.forEach((el, i) => {
        if (signUpIds[i]) el.setAttribute('id', signUpIds[i]);
    });

    signUpForm.querySelector('input[type="submit"]').setAttribute('id', 'signUpSubmitBtn');

    ['firstName', 'lastName', 'email', 'password', 'confirmPassword', 'tandC'].forEach((id) => {
        document.getElementById(id).setAttribute('required', '');
    });


    // ========================================
    // STEP 2: Assign IDs to Sign In form
    // ========================================
    const signInForm = document.querySelectorAll('.modal-form')[1];
    signInForm.setAttribute('id', 'signInForm');

    const signInInputs = signInForm.querySelectorAll('input');
    signInInputs[0].setAttribute('id', 'signInEmail');
    signInInputs[1].setAttribute('id', 'signInPassword');
    signInInputs[2].setAttribute('id', 'signInSubmitBtn');

    ['signInEmail', 'signInPassword'].forEach((id) => {
        document.getElementById(id).setAttribute('required', '');
    });


    // ========================================
    // STEP 3: Validation on blur only
    // ========================================
function attachBlurValidation(formSelector) {
    const form = document.querySelector(formSelector);
    const requiredFields = form.querySelectorAll('[required]');

    requiredFields.forEach((field) => {
        const eventType = field.type === 'checkbox' ? 'change' : 'blur';

        field.addEventListener(eventType, () => {
            const isEmpty = field.type === 'checkbox'
                ? !field.checked
                : field.value.trim() === '';

            if (isEmpty) {
                field.classList.add('error');
                console.log("Blur activation");
            } else {
                field.classList.remove('error');
            }
        });
    });
}

attachBlurValidation('#signUpForm');
attachBlurValidation('#signInForm');

});