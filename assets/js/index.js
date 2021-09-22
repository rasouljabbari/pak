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

let dvBlogPostSlider = new Swiper(".dvBlogPostSlider", {
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

$(function () {
    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 1000000,
        values: [15000, 500000],
        slide: function (event, ui) {
            $("#amount").val("از " + ui.values[0] + " ریال تا " + ui.values[1] + " ریال ");
        }
    });
    $("#amount").val("" + $("#slider-range").slider("values", 0) +
        " - " + $("#slider-range").slider("values", 1));
});

$('.panel-collapse').on('show.bs.collapse', function () {
    $(this).siblings('.panel-heading').addClass('active');
});

$('.panel-collapse').on('hide.bs.collapse', function () {
    $(this).siblings('.panel-heading').removeClass('active');
});

var miniSlider = new Swiper(".miniSlider", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
var largeSlider = new Swiper(".largeSlider", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: miniSlider,
    },
});

$.fn.digits = function(){
    return this.each(function(){
        $(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") );
    })
}

$(document).ready(function () {
    let price = $('.js-variant-selector').data('price')
    let discount_price = $('.js-variant-selector').data('discount-price')
    $('.dv-discount-price-value').text(discount_price)
    $('.dv-discount-price-value').data('discount-unit-price', discount_price)
    $('.dv-price-value').text(price)
    $('.dv-price-value').data('unit-price' , price)
    $(".dv-discount-price-value , .dv-price-value").digits();
})

$('.js-variant-selector').on('change' , function () {
    let value = $(this).val()
    let price = $(this).data('price')
    let discount_price = $(this).data('discount-price')
    $('.dv-color-name').text(value)
    $('.dv-discount-price-value').text(discount_price)
    $('.dv-price-value').text(price)

    $('.dv-discount-price-value').data('discount-unit-price', discount_price)
    $('.dv-price-value').data('unit-price' , price)
    $('.dv-product-count').text(1)
    $(".dv-discount-price-value , .dv-price-value").digits();
})

$('.fa-number-plus').on('click' , function () {
    let count = $('.dv-product-count').text()
    let price_unit = $('.dv-price-value').data('unit-price')

    $('.dv-product-count').text(parseInt(count) + 1)
    $('.dv-price-value').text((parseInt(count) + 1) * parseInt(price_unit))
    $(".dv-discount-price-value , .dv-price-value").digits();
})

$('.fa-number-minus').on('click' , function () {
    let count = $('.dv-product-count').text()
    let price_unit = $('.dv-price-value').data('unit-price')

    if(count > 1){
        $('.dv-product-count').text(parseInt(count) - 1)
        $('.dv-price-value').text((parseInt(count) - 1) * parseInt(price_unit))
        $(".dv-discount-price-value , .dv-price-value").digits();
    }
})