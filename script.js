// ================================
// SEARCH INPUT
// ================================

const searchInput =
    document.querySelector('.search-box input');

if (searchInput) {

    searchInput.addEventListener('focus', () => {

        searchInput.style.border =
            '1px solid #19a34a';

    });

    searchInput.addEventListener('blur', () => {

        searchInput.style.border =
            '1px solid #ddd';

    });

}

// ================================
// DONATE BUTTON
// ================================

const donateButtons =
    document.querySelectorAll('.donate-btn');

donateButtons.forEach(button => {

    button.addEventListener('click', () => {

        alert('Terima kasih telah berdonasi ❤️');

    });

});

// ================================
// LOGIN PASSWORD TOGGLE
// ================================

const togglePassword =
    document.getElementById('togglePassword');

const password =
    document.getElementById('password');

if (togglePassword && password) {

    togglePassword.addEventListener('click', () => {

        if (password.type === 'password') {

            password.type = 'text';

            togglePassword.innerHTML =
                '<i class="fa-regular fa-eye-slash"></i>';

        } else {

            password.type = 'password';

            togglePassword.innerHTML =
                '<i class="fa-regular fa-eye"></i>';

        }

    });

}

// ================================
// LOGIN FORM
// ================================

const loginForm =
    document.getElementById('loginForm');

if (loginForm) {

    loginForm.addEventListener('submit', function (e) {

        e.preventDefault();

        const email =
            document.getElementById('email').value;

        const pass = password.value;

        if (email === '' || pass === '') {

            alert('Semua field wajib diisi!');
            return;

        }

        alert('Login berhasil!');

    });

}

// ================================
// FORGOT PASSWORD TOGGLE
// ================================

const toggleOtp =
    document.getElementById('toggleOtp');

const otpInput =
    document.getElementById('otp');

if (toggleOtp && otpInput) {

    toggleOtp.addEventListener('click', () => {

        if (otpInput.type === 'password') {

            otpInput.type = 'text';

            toggleOtp.innerHTML =
                '<i class="fa-regular fa-eye-slash"></i>';

        } else {

            otpInput.type = 'password';

            toggleOtp.innerHTML =
                '<i class="fa-regular fa-eye"></i>';

        }

    });

}

// ================================
// FORGOT PASSWORD FORM
// ================================

const forgotForm =
    document.getElementById('forgotForm');

if (forgotForm) {

    forgotForm.addEventListener('submit', function (e) {

        e.preventDefault();

        const email =
            document.getElementById('email').value;

        const otp = otpInput.value;

        if (email === '' || otp === '') {

            alert('Semua field wajib diisi!');
            return;

        }

        alert('Password berhasil direset!');

    });

}

