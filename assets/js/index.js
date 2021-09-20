let swiper = new Swiper(".menuSwiper", {
    autoplay : true,
    effect: "flip",
    spaceBetween : 50,
    grabCursor: true,
    // pagination: {
    //     el: ".swiper-pagination",
    // },
});

let BannerSwiper = new Swiper(".BannerSwiper", {
    spaceBetween: 30,
    autoplay : true,
    effect: "fade",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

let samsungSlider = new Swiper(".samsungSlider", {
    spaceBetween: 30,
    autoplay : true,
    effect: "fade",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

let offerSlider = new Swiper(".offerSlider", {
    slidesPerView: 2,
    spaceBetween: 50,
    slidesPerGroup: 2,
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        1268: {
            slidesPerView: 2,
            spaceBetween: 120,
        }
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});