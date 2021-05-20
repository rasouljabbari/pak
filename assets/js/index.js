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
$.fn.digits = function () {
    return this.each(function () {
        $(this).text($(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
}

$(".dv-item-price").digits();
$(".dv-discount").digits();
$(".dv-price").digits();

$('#go-to-top').each(function () {

    $(this).click(function () {
        $("html, body").animate({scrollTop: 0}, 1000);
        return false;
    });
});

$('#go-to-top2').each(function () {

    $(this).click(function () {
        $("html, body").animate({scrollTop: 0}, 1000);
        return false;
    });
});

// range slider
//-----JS for Price Range slider-----
$(function () {
    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 100000,
        values: [1, 100000],
        slide: function (event, ui) {
            $("#amount").val("تومان" + ui.values[1] + " - تومان" + ui.values[0]);
        }
    });
    $("#amount").val("تومان" + $("#slider-range").slider("values", 1) +
        " - تومان" + $("#slider-range").slider("values", 0));
});

$('#dv-btn-submit').on('click', function () {
    let first_name = $('.dv-input[name=first_name]').val();
    let last_name = $('.dv-input[name=last_name]').val();
    let email = $('.dv-input[name=email]').val();
    let phone = $('.dv-input[name=mobile]').val();
    let code = $('.dv-input[name=code]').val();

    let checkArr = [];

    if (!first_name) {
        checkArr.push('فیلد نام الزامی است')
    }
    if (!last_name) {
        checkArr.push('فیلد نام خانوادگی الزامی است')
    }

    if (!phone) {
        checkArr.push('فیلد شماره همراه الزامی است')
    }
    if (!email) {
        checkArr.push('فیلد ایمیل الزامی است')
    }
    if (!code) {
        checkArr.push('فیلد کدملی الزامی است')
    }


    if(!code || !email || !phone || !last_name || !first_name){
        checkArr.map((row) => {
            toastr.error(row)
        })
        return false
    }


});

$('#dv-btn-submit-residential').on('click', function () {
    let province = $('.dv-input[name=province]').val();
    let city = $('.dv-input[name=city]').val();
    let address = $('.dv-input[name=address]').val();
    let postal_code = $('.dv-input[name=postal-code]').val();
    let phone = $('.dv-input[name=phone]').val();

    let checkArr = [];

    if (province == -1) {
        checkArr.push('فیلد استان الزامی است')
    }
    if (city == -1) {
        checkArr.push('فیلد شهر الزامی است')
    }
    if (!address) {
        checkArr.push('فیلد آدرس الزامی است')
    }

    if (!postal_code) {
        checkArr.push('فیلد کدپستی الزامی است')
    }
    if (!phone) {
        checkArr.push('فیلد شماره تلفن الزامی است')
    }


    if(province !== '-1' || city !== '-1' || !address || !postal_code || !phone){
        checkArr.map((row) => {
            toastr.error(row)
        })
        return false
    }


});

$('#dv-btn-submit-residential-register').on('click', function () {
    let first_name = $('.dv-input[name=first_name]').val();
    let last_name = $('.dv-input[name=last_name]').val();
    let email = $('.dv-input[name=email]').val();
    let mobile = $('.dv-input[name=mobile]').val();
    let code = $('.dv-input[name=code]').val();
    let password = $('.dv-input[name=password]').val();
    let confirm_password = $('.dv-input[name=confirm-password]').val();
    let province = $('.dv-input[name=province]').val();
    let city = $('.dv-input[name=city]').val();
    let address = $('.dv-input[name=address]').val();
    let postal_code = $('.dv-input[name=postal-code]').val();
    let phone = $('.dv-input[name=phone]').val();
    let checkArr = [];


    if (!first_name) {
        checkArr.push('فیلد نام الزامی است')
    }

    if (province == -1) {
        checkArr.push('فیلد استان الزامی است')
    }
    if (city == -1) {
        checkArr.push('فیلد شهر الزامی است')
    }
    if (!address) {
        checkArr.push('فیلد آدرس الزامی است')
    }

    if (!postal_code) {
        checkArr.push('فیلد کدپستی الزامی است')
    }
    if (!mobile) {
        checkArr.push('فیلد شماره تلفن الزامی است')
    }

    if (!last_name) {
        checkArr.push('فیلد نام خانوادگی الزامی است')
    }

    if (!phone) {
        checkArr.push('فیلد شماره همراه الزامی است')
    }
    if (!email) {
        checkArr.push('فیلد ایمیل الزامی است')
    }
    if (!code) {
        checkArr.push('فیلد کدملی الزامی است')
    }
    if (!password) {
        checkArr.push('فیلد رمزعبور الزامی است')
    }
    if (!confirm_password) {
        checkArr.push('فیلد تکرار رمز الزامی است')
    }

    console.log(first_name)

    if(province !== '-1' || city !== '-1' || !confirm_password || !password || !address || !postal_code || !mobile || !code || !email || !phone || !last_name || !first_name){
        checkArr.map((row) => {
            toastr.error(row)
        })
        return false
    }
});

$('#dv-input-send').on('click', function () {
    let full_name = $('.dv-input[name=full_name]').val();
    let email = $('.dv-input[name=email]').val();
    let message = $('.dv-input[name=message]').val();


    let checkArr = [];

    if (!full_name) {
        checkArr.push('فیلد نام الزامی است')
    }
    if (!message) {
        checkArr.push('فیلد پیام الزامی است')
    }
    if (!email) {
        checkArr.push('فیلد ایمیل الزامی است')
    }

    if(checkArr.length !== 0){
        checkArr?.map((row) => {
            toastr.error(row)
        })
        return false
    }
});

$('#dv-submit-btn-login').on('click', function (e) {
    let mobile = $('.dv-input[name=mobile]').val();
    let password = $('.dv-input[name=password]').val();
    let email = $('.dv-input[name=email]').val();
    let checkArr = [];

    if (!mobile) {
        checkArr.push('فیلد شماره تلفن الزامی است')
    }
    if (!password) {
        checkArr.push('فیلد رمزعبور الزامی است')
    }

    if(checkArr.length !== 0){
        checkArr?.map((row) => {
            toastr.error(row)
        })
        return false
    }else{
        e.preventDefault()
        window.location.replace('profile.html')
    }
});

$('#dv-submit-btn-email').on('click', function (e) {

    let email = $('.dv-input[name=email]').val();
    let checkArr = [];

    if (!email) {
        checkArr.push('فیلد ایمیل الزامی است')
    }

    if(checkArr.length !== 0){
        checkArr?.map((row) => {
            toastr.error(row)
        })
        return false
    }else{
        e.preventDefault()

        $('#dv-recovery-password').removeClass('d-flex');
        $('#dv-recovery-password').addClass('d-none');

        $('#dv-set-code').removeClass('d-none');
        $('#dv-set-code').addClass('d-flex');
    }
});

$('#dv-submit-btn-set-code').on('click', function (e) {

    let code = $('.dv-input[name=code]').val();
    let checkArr = [];

    if (!code) {
        checkArr.push('فیلد وارد کردن کد الزامی است')
    }

    if(checkArr.length !== 0){
        checkArr?.map((row) => {
            toastr.error(row)
        })
        return false
    }else{
        e.preventDefault()

        $('#dv-set-code').removeClass('d-flex');
        $('#dv-set-code').addClass('d-none');

        $('#dv-set-new-password').removeClass('d-none');
        $('#dv-set-new-password').addClass('d-flex');
    }
});

$('#dv-submit-btn-new-password').on('click', function (e) {

    let password = $('.dv-input[name=password]').val();
    let confirm_password = $('.dv-input[name=confirm-password]').val();
    let checkArr = [];

    if (!password) {
        checkArr.push('فیلد رمزعیور الزامی است')
    }
    if (!confirm_password) {
        checkArr.push('فیلد تکرار رمزعبور الزامی است')
    }

    if(checkArr.length !== 0){
        checkArr?.map((row) => {
            toastr.error(row)
        })
        return false
    }else{
        e.preventDefault()

        window.location.replace('profile.html')
    }
});

$('.dv-heart-icon').on('click' , function (){
    $(this).toggleClass('fas fal')
})
