let swiper = new Swiper(".menuSwiper", {
    autoplay: true,
    effect: "flip",
    spaceBetween: 50,
    grabCursor: true,
    // pagination: {
    //     el: ".swiper-pagination",
    // },
});

let BannerSwiper = new Swiper(".BannerSwiper", {
    spaceBetween: 30,
    autoplay: true,
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
    autoplay: true,
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
    autoplay: true,
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

$.fn.digits = function () {
    return this.each(function () {
        $(this).text($(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
}

$(document).ready(function () {
    let price = $('.js-variant-selector').data('price')
    let discount_price = $('.js-variant-selector').data('discount-price')
    $('.dv-discount-price-value').text(discount_price)
    $('.dv-discount-price-value').data('discount-unit-price', discount_price)
    $('.dv-price-value').text(price)
    $('.dv-price-value').data('unit-price', price)
    $(".dv-discount-price-value , .dv-price-value").digits();
})

$('.js-variant-selector').on('change', function () {
    let value = $(this).val()
    let price = $(this).data('price')
    let discount_price = $(this).data('discount-price')
    $('.dv-color-name').text(value)
    $('.dv-discount-price-value').text(discount_price)
    $('.dv-price-value').text(price)

    $('.dv-discount-price-value').data('discount-unit-price', discount_price)
    $('.dv-price-value').data('unit-price', price)
    $('.dv-product-count').text(1)
    $(".dv-discount-price-value , .dv-price-value").digits();
})

$('.fa-number-plus').on('click', function () {
    let count = $('.dv-product-count').text()
    let price_unit = $('.dv-price-value').data('unit-price')

    $('.dv-product-count').text(parseInt(count) + 1)
    $('.dv-price-value').text((parseInt(count) + 1) * parseInt(price_unit))
    $(".dv-discount-price-value , .dv-price-value").digits();
})

$('.fa-number-minus').on('click', function () {
    let count = $('.dv-product-count').text()
    let price_unit = $('.dv-price-value').data('unit-price')

    if (count > 1) {
        $('.dv-product-count').text(parseInt(count) - 1)
        $('.dv-price-value').text((parseInt(count) - 1) * parseInt(price_unit))
        $(".dv-discount-price-value , .dv-price-value").digits();
    }
})


$('.dv-add-number').on('click', function () {
    let count = $('.dv-cart-number').val()
    let price_unit = $('.dv-cart-price-value').data('price')

    $('.dv-cart-number').val(parseInt(count) + 1)
    $('.dv-cart-price-value').text((parseInt(count) + 1) * parseInt(price_unit))
    $(".dv-cart-price-value").digits();
})

$('.dv-minus-number').on('click', function () {
    let count = $('.dv-cart-number').val()
    let price_unit = $('.dv-cart-price-value').data('price')

    if (count > 1) {
        $('.dv-cart-number').val(parseInt(count) - 1)
        $('.dv-cart-price-value').text((parseInt(count) - 1) * parseInt(price_unit))
        $(".dv-cart-price-value").digits();
    }
})

$('input[name="payment_method"]').on('change', function (e) {
    if (e.target.value === 'online') {
        $('.dv-cart-to-cart').addClass('d-none')
        $('.dv-online').removeClass('d-none')
    }else{
        $('.dv-cart-to-cart').removeClass('d-none')
        $('.dv-online').addClass('d-none')
    }
})

const inputElements = [...document.querySelectorAll('input.code-input')]

inputElements.forEach((ele,index)=>{
    ele.addEventListener('keydown',(e)=>{
        if(e.keyCode === 8 && e.target.value==='') inputElements[Math.max(0,index-1)].focus()
    })
    ele.addEventListener('input',(e)=>{
        const [first,...rest] = e.target.value
        e.target.value = first ?? ''
        if(index!==inputElements.length-1 && first!==undefined) {
            inputElements[index+1].focus()
            inputElements[index+1].value = rest.join('')
            inputElements[index+1].dispatchEvent(new Event('input'))
        }
    })
})


function onSubmit(e){
    e.preventDefault()
    const code = [...document.getElementsByTagName('input')]
        .filter(({name})=>name)
        .map(({value})=>value)
        .join('')
    console.log(code)
}