// ================================
// SEARCH INPUT
// ================================

const searchInput =
    document.querySelector('.search-box input');

if(searchInput){

    searchInput.addEventListener('focus',()=>{

        searchInput.style.border =
            '1px solid #19a34a';

    });

    searchInput.addEventListener('blur',()=>{

        searchInput.style.border =
            '1px solid #ddd';

    });

}

// ================================
// DONATE BUTTON
// ================================

const donateButtons =
    document.querySelectorAll('.donate-btn');

donateButtons.forEach(button=>{

    button.addEventListener('click',()=>{

        alert('Terima kasih telah berdonasi ❤️');

    });

});

const slider =
    document.querySelector('.hero-slider');

const dots =
    document.querySelectorAll('.dot');

const slides =
    document.querySelectorAll('.hero-slide');

let currentSlide = 0;

function updateSlider(){

    slider.style.transform =
        `translateX(-${currentSlide * 100}%)`;

    dots.forEach(dot=>{

        dot.classList.remove('active-dot');

    });

    dots[currentSlide]
        .classList.add('active-dot');

}

setInterval(()=>{

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;

    }

    updateSlider();

},3000);