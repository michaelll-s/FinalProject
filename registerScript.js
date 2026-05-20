const registerForm = document.getElementById('registerForm');
const email = document.getElementById('email');
const namaLengkap = document.getElementById('namaLengkap')
const pass = document.getElementById('password')
const confirmedPass = document.getElementById('confirmed-password')
const checkboxAgreement = document.getElementById('checkboxAgreement')

if (registerForm) {
    registerForm.addEventListener('submit', function (e) {

        e.preventDefault();

        if (formEmptyScan()) {
            alert('Semua field wajib diisi!');
            return;
            
        }

        if(passwordChecking()){
            alert('Isi Password dan Konfirmasi Password harus sama!')
            return
        }

        if(!checkboxScan()){
            alert('Syarat dan Ketentuan Harus di setujui!')
            return;
        }


        alert('Pendaftaran berhasil!');

    });
}

function formEmptyScan(){
        return (email.value === '' || pass.value === '' || namaLengkap.value === '' || confirmedPass.value === '')
}

function checkboxScan(){
    return checkboxAgreement.checked
}

function passwordChecking(){
    const passLength = pass.value.length
    const confirmedLength = confirmedPass.value.length
    return !(pass.value === confirmedPass.value && (passLength >= 8 && confirmedLength >= 8))
}

const toggleConfirmed = document.getElementById('toggleConfirmedPw');
if (toggleConfirmed && confirmedPass) {

    toggleConfirmed.addEventListener('click', () => {

        if (confirmedPass.type === 'password') {

            confirmedPass.type = 'text';

            toggleConfirmed.innerHTML =
                '<i class="fa-regular fa-eye"></i>';

        } else {

            confirmedPass.type = 'password';

            toggleConfirmed.innerHTML =
                '<i class="fa-regular fa-eye-slash"></i>';

        }
    });
}