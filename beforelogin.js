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
// TESTIMONIAL HOVER EFFECT
// ================================

const testimonials =
    document.querySelectorAll('.testimonial');

testimonials.forEach(card => {

    card.addEventListener('mouseenter', () => {

        card.style.transform =
            'translateY(-15px)';

        card.style.boxShadow =
            '0 15px 30px rgba(0,0,0,0.08)';

    });

    card.addEventListener('mouseleave', () => {

        card.style.transform =
            'translateY(0)';

        card.style.boxShadow =
            'none';

    });

});

// ================================
// CARD HOVER EFFECT
// ================================

const cards =
    document.querySelectorAll('.card');

cards.forEach(card => {

    card.addEventListener('mouseenter', () => {

        card.style.transform =
            'translateY(-10px)';

    });

    card.addEventListener('mouseleave', () => {

        card.style.transform =
            'translateY(0)';

    });

});

// ================================
// TEAM CARD HOVER
// ================================

const teamCards =
    document.querySelectorAll('.team-card');

teamCards.forEach(card => {

    card.addEventListener('mouseenter', () => {

        card.style.transform =
            'translateY(-12px)';

    });

    card.addEventListener('mouseleave', () => {

        card.style.transform =
            'translateY(0)';

    });

});