export function initSwiper() {
    const swiper = new Swiper('.cases__slider', {
        loop: true,
        slidesPerView: 1,
        navigation: {
            nextEl: '.cases__slider-control--next',
            prevEl: '.cases__slider-control--prev',
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
                spaceBetween: 14,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 14,
            },
            1140: {
                slidesPerView: 4,
                spaceBetween: 24,
            }
        },
    });

    return swiper;
}
