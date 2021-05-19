let swiper = new Swiper(".index-top-swiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: true
});
let swiper_product_items = new Swiper(".swiper-product-items", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next1",
        prevEl: ".swiper-button-prev1",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        892: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1400: {
            slidesPerView: 6,
            spaceBetween: 10,
        },
    },
});

let swiper_product_items2 = new Swiper(".swiper-product-items2", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next2",
        prevEl: ".swiper-button-prev2",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        892: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1400: {
            slidesPerView: 6,
            spaceBetween: 10,
        },
    },
});

let swiper_blog_items = new Swiper(".swiper-blog-items", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: true,
    loop: true,
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1400: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
});
let thumb_swiper_1 = new Swiper(".thumb-swiper-1", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});
let thumb_swiper_2 = new Swiper(".thumb-swiper-2", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: thumb_swiper_1,
    },
});

// Add comma to numbers every three digits
$.fn.digits = function(){
    return this.each(function(){
        $(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") );
    })
}

$(".dv-item-price").digits();
$(".dv-discount").digits();
$(".dv-price").digits();

$('#go-to-top').each(function(){

    $(this).click(function(){
        $("html, body").animate({scrollTop: 0}, 1000);
        return false;
    });
});

$('#go-to-top2').each(function(){

    $(this).click(function(){
        $("html, body").animate({scrollTop: 0}, 1000);
        return false;
    });
});

// range slider
//-----JS for Price Range slider-----
$(function() {
    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 100000,
        values: [ 1, 100000 ],
        slide: function( event, ui ) {
            $( "#amount" ).val( "تومان" + ui.values[ 1 ] + " - تومان" + ui.values[ 0 ] );
        }
    });
    $( "#amount" ).val( "تومان" + $( "#slider-range" ).slider( "values", 1 ) +
        " - تومان" + $( "#slider-range" ).slider( "values", 0 ) );
});

