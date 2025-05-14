import { initSwiper } from "./modules/swiper-cases.js";
import { initWSwiper } from "./modules/swiper-work.js";
import Menu from "./plugins/responsive-menu.js";
document.addEventListener("DOMContentLoaded", () => {
    initSwiper();
});
document.addEventListener("DOMContentLoaded", () => {
    const menu = new Menu({
        buttonSelector: '[data-menu-toggler]',
        menuSelector: '[data-menu-overlay]',
        htmlElementSelector: 'html',
        animationDuration: 500,
        breakpoint: 769,

    })
    initWSwiper();
});

