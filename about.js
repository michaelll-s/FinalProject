// SEARCH
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
