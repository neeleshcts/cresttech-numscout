    $('#gender').select2({
        placeholder: 'Geschlecht wählen',
        allowClear: true,
        width: '100%',
        dropdownParent: $('#gender').parent()
    });

document.addEventListener('DOMContentLoaded', function () {

    // ===========================
    // Sign Up - Password
    // ===========================
    const signUpPassword = document.querySelector('#password');
    const showSignUpPassword = document.querySelector('#showSignUpPassword');
    const hideSignUpPassword = document.querySelector('#hideSignUpPassword');

    // hide eye-slash initially
    hideSignUpPassword.style.display = 'none';

    showSignUpPassword.addEventListener('click', function () {
        signUpPassword.type = 'text';
        showSignUpPassword.style.display = 'none';
        hideSignUpPassword.style.display = 'inline';
    });

    hideSignUpPassword.addEventListener('click', function () {
        signUpPassword.type = 'password';
        hideSignUpPassword.style.display = 'none';
        showSignUpPassword.style.display = 'inline';
    });

    // ===========================
    // Sign Up - Confirm Password
    // ===========================
    const confirmPassword = document.querySelector('#confirmPassword');
    const showSignUpConfirmPassword = document.querySelector('#showSignUpConfirmPassword');
    const hideSignUpConfirmPassword = document.querySelector('#hideSignUpConfirmPassword');

    // hide eye-slash initially
    hideSignUpConfirmPassword.style.display = 'none';

    showSignUpConfirmPassword.addEventListener('click', function () {
        confirmPassword.type = 'text';
        showSignUpConfirmPassword.style.display = 'none';
        hideSignUpConfirmPassword.style.display = 'inline';
    });

    hideSignUpConfirmPassword.addEventListener('click', function () {
        confirmPassword.type = 'password';
        hideSignUpConfirmPassword.style.display = 'none';
        showSignUpConfirmPassword.style.display = 'inline';
    });

    // ===========================
    // Sign In - Password
    // ===========================
    const signinPassword = document.querySelector('#signin input[type="password"]');
    const showSigninPassword = document.querySelector('#showSigninPassword');
    const hideSigninPassword = document.querySelector('#hideSigninPassword');

    // hide eye-slash initially
    hideSigninPassword.style.display = 'none';

    showSigninPassword.addEventListener('click', function () {
        signinPassword.type = 'text';
        showSigninPassword.style.display = 'none';
        hideSigninPassword.style.display = 'inline';
    });

    hideSigninPassword.addEventListener('click', function () {
        signinPassword.type = 'password';
        hideSigninPassword.style.display = 'none';
        showSigninPassword.style.display = 'inline';
    });

});

document.querySelector('#modal-title').textContent = 'Ich bin neu hier';

// Update title on tab change
document.querySelector('#modal-title').textContent = 'Ich bin neu hier';

// Listen for clicks on nav links
document.querySelectorAll('.form-navigation .nav-link').forEach(function(tab) {
    tab.addEventListener('click', function () {
        const target = this.getAttribute('href');

        if (target === '#signup') {
            document.querySelector('#modal-title').textContent = 'Ich bin neu hier';
        } else if (target === '#signin') {
            document.querySelector('#modal-title').textContent = 'Willkommen zurück';
        }
    });
});





// using links and close button to close canvas

// console.log('close btn:', document.querySelector('#offcanvasNavbar .btn-close'));
// console.log('nav links:', document.querySelectorAll('#offcanvasNavbar .nav-item a'));

// const offcanvasEl = document.getElementById('offcanvasNavbar');
// console.log('offcanvasEl:', offcanvasEl);





// button closing the offcanvas
const offcanvasEl = document.getElementById('offcanvasNavbar');
const hamburger = document.getElementById('hamburger');

document.querySelector('#offcanvasNavbar .btn-close').addEventListener('click', () => {
  bootstrap.Offcanvas.getInstance(offcanvasEl).hide();
});


document.querySelectorAll('#offcanvasNavbar .nav-item a').forEach(link => {
  link.addEventListener('click', () => {
    bootstrap.Offcanvas.getInstance(offcanvasEl).hide();
  });
});

let videoModal = document.getElementById('videoPrivatePopup'); // the modal ID
let videoFrame = document.getElementById('videoFrame'); // the iframe ID
let videoSrc; // to store the original src

videoModal.addEventListener('show.bs.modal', function () {
  videoSrc = videoFrame.getAttribute('data-src'); // store real URL in data-src on the iframe tag
  videoFrame.setAttribute('src', videoSrc);
});

videoModal.addEventListener('hide.bs.modal', function () {
  videoFrame.setAttribute('src', '');
});




document.addEventListener('DOMContentLoaded', () => {
    console.log("Testing purpose")
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