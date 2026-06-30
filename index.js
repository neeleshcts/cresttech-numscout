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

document.querySelector('#offcanvasNavbar .btn-close').addEventListener('click', () => {
  bootstrap.Offcanvas.getInstance(offcanvasEl).hide();
});

document.querySelectorAll('#offcanvasNavbar .nav-item a').forEach(link => {
  link.addEventListener('click', () => {
    bootstrap.Offcanvas.getInstance(offcanvasEl).hide();
  });
});
