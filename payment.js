/* =========================
GET DATA FROM LOCAL STORAGE
========================= */

const campaignImage =
    localStorage.getItem("campaignImage");

const campaignTitle =
    localStorage.getItem("campaignTitle");

const campaignCategory =
    localStorage.getItem("campaignCategory");

const campaignProgress =
    localStorage.getItem("campaignProgress");

const campaignCollected =
    localStorage.getItem("campaignCollected");

/* =========================
SET CAMPAIGN DATA
========================= */

const paymentImage =
    document.getElementById("paymentImage");

const paymentTitle =
    document.getElementById("paymentTitle");

const paymentCategoryEl =
    document.getElementById("paymentCategory");

const paymentCollectedEl =
    document.getElementById("paymentCollected");

const paymentProgressEl =
    document.getElementById("paymentProgress");

/* IMAGE */

if(paymentImage && campaignImage){

    paymentImage.src =
        campaignImage;

}

/* TITLE */

if(paymentTitle && campaignTitle){

    paymentTitle.innerText =
        campaignTitle;

}

/* CATEGORY */

if(paymentCategoryEl && campaignCategory){

    paymentCategoryEl.innerText =
        campaignCategory;

}

/* COLLECTED */

if(paymentCollectedEl && campaignCollected){

    paymentCollectedEl.innerText =
        campaignCollected;

}

/* PROGRESS */

if(paymentProgressEl && campaignProgress){

    paymentProgressEl.style.width =
        campaignProgress;

}

/* =========================
PAYMENT METHOD
========================= */

const paymentMethods =
    document.querySelectorAll(".payment-method");

paymentMethods.forEach(method => {

    method.addEventListener("click", () => {

        paymentMethods.forEach(item => {

            item.classList.remove("active");

        });

        method.classList.add("active");

    });

});

/* =========================
QUICK BUTTON
========================= */

const quickButtons =
    document.querySelectorAll(".quick-btn");

const paymentInput =
    document.getElementById("paymentInput");

quickButtons.forEach(button => {

    button.addEventListener("click", () => {

        quickButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

        const amount =
            button.dataset.amount;

        paymentInput.value =
            amount;

        updatePayment();

    });

});

/* =========================
SUMMARY
========================= */

const summaryNominal =
    document.getElementById("summaryNominal");

const summaryTotal =
    document.getElementById("summaryTotal");

/* =========================
INPUT EVENT
========================= */

if(paymentInput){

    paymentInput.addEventListener(
        "input",
        updatePayment
    );

}

/* =========================
UPDATE PAYMENT
========================= */

function updatePayment(){

    let amount =
        parseInt(paymentInput.value) || 0;

    let admin =
        1000;

    let total =
        amount + admin;

    summaryNominal.innerText =
        "Rp " +
        amount.toLocaleString("id-ID");

    summaryTotal.innerText =
        "Rp " +
        total.toLocaleString("id-ID");

}

/* =========================
PAY BUTTON
========================= */

const payButton =
    document.querySelector(".pay-btn");

if(payButton){

    payButton.addEventListener("click", () => {

        const amount =
            parseInt(paymentInput.value);

        if(!amount || amount <= 0){

            alert(
                "Masukkan nominal donasi!"
            );

            return;

        }

        const activeMethod =
            document.querySelector(
                ".payment-method.active"
            );

        let methodName =
            "Belum dipilih";

        if(activeMethod){

            methodName =
                activeMethod.innerText.trim();

        }

        alert(
            "Pembayaran berhasil 🎉\n\n" +
            "Campaign : " +
            campaignTitle +
            "\n" +
            "Nominal : Rp " +
            amount.toLocaleString("id-ID") +
            "\n" +
            "Metode : " +
            methodName
        );

    });

}

/* =========================
PROFILE MENU
========================= */

const profile =
    document.querySelector(".profile");

if(profile){

    profile.addEventListener("click", () => {

        alert(
            "Menu profile dibuka"
        );

    });

}

/* =========================
NOTIFICATION
========================= */

const notif =
    document.querySelector(".notif");

if(notif){

    notif.addEventListener("click", () => {

        alert(
            "Notifikasi dibuka"
        );

    });

}

/* =========================
SEARCH
========================= */

const searchInput =
    document.querySelector(".search-box input");

if(searchInput){

    searchInput.addEventListener("keyup", () => {

        console.log(
            "Mencari:",
            searchInput.value
        );

    });

}

/* =========================
DONATE BUTTON
========================= */

const donateButtons =
    document.querySelectorAll(".donate-btn");

donateButtons.forEach(button => {

    button.addEventListener("click", () => {

        /* CARD */

        const card =
            button.closest(".campaign-link");

        /* IMAGE */

        const image =
            card.querySelector("img").src;

        /* TITLE */

        let title = "";

        if(card.querySelector("h2")){

            title =
                card.querySelector("h2").innerText;

        }else{

            title =
                card.querySelector("h3").innerText;

        }

        /* CATEGORY */

        let category = "";

        if(card.querySelector(".hero-badge")){

            category =
                card.querySelector(".hero-badge").innerText;

        }else{

            category =
                card.querySelector(".card-badge").innerText;

        }

        /* PROGRESS */

        const progress =
            card.querySelector(".progress").style.width;

        /* COLLECTED */

        let collected = "";

        if(card.querySelector(".hero-amount h3")){

            collected =
                card.querySelector(".hero-amount h3").innerText;

        }else{

            collected =
                card.querySelector(".card-amount h4").innerText;

        }

        /* SAVE TO LOCAL STORAGE */

        localStorage.setItem(
            "campaignImage",
            image
        );

        localStorage.setItem(
            "campaignTitle",
            title
        );

        localStorage.setItem(
            "campaignCategory",
            category
        );

        localStorage.setItem(
            "campaignProgress",
            progress
        );

        localStorage.setItem(
            "campaignCollected",
            collected
        );

        /* REDIRECT */

        window.location.href =
            "payment.html";

    });

});