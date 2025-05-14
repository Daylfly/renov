export function initWSwiper() {
    const workswiper = new Swiper('.work__slider', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 24,
    });
    return workswiper;
}
