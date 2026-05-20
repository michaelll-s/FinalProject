// =========================
// THEME BUTTON
// =========================

const themeButtons = document.querySelectorAll(".theme-btn");

themeButtons.forEach(button => {

    button.addEventListener("click", () => {

        themeButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

    });

});

// =========================
// SAVE PROFILE
// =========================

const saveBtn = document.querySelector(".save-btn");

saveBtn.addEventListener("click", () => {

    alert("Profil berhasil disimpan!");

});

// =========================
// DELETE ACCOUNT
// =========================

const deleteBtn = document.querySelector(".delete-btn");

deleteBtn.addEventListener("click", () => {

    const confirmDelete = confirm(
        "Apakah Anda yakin ingin menghapus akun?"
    );

    if(confirmDelete){

        alert("Akun berhasil dihapus!");

    }

});

// =========================
// SWITCH TOGGLE
// =========================

const switches = document.querySelectorAll(".switch input");

switches.forEach(toggle => {

    toggle.addEventListener("change", () => {

        if(toggle.checked){

            console.log("Aktif");

        }else{

            console.log("Nonaktif");

        }

    });

});

// =========================
// SEARCH
// =========================

const searchInput = document.querySelector(".search-box input");

searchInput.addEventListener("keyup", () => {

    console.log("Mencari :", searchInput.value);

});

// =========================
// EDIT PHOTO
// =========================

const editPhotoBtn = document.querySelector(".edit-photo");

editPhotoBtn.addEventListener("click", () => {

    alert("Fitur ganti foto profile");

});

// =========================
// NOTIFICATION CLICK
// =========================

const notif = document.querySelector(".notif");

notif.addEventListener("click", () => {

    alert("Notifikasi dibuka");

});

// =========================
// PROFILE DROPDOWN
// =========================

const profile = document.querySelector(".profile");

profile.addEventListener("click", () => {

    alert("Menu profile dibuka");

});

// =========================
// BUTTON HOVER EFFECT
// =========================

const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "scale(1.03)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "scale(1)";

    });

});