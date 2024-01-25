// Swiper
document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    // Contact us Pop up
});

function openContactPopup() {
    document.getElementById('contactPopup').style.display = 'flex';
}

function closeContactPopup() {
    document.getElementById('contactPopup').style.display = 'none';
}

function submitContactForm() {
    // Add your logic for handling the form submission here
    alert('Form submitted!');
    closeContactPopup();
}
