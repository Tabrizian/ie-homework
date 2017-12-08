var swiper = new Swiper('.swiper-container', {
    slidesPerView: 6,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
});