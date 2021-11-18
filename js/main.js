document.addEventListener('DOMContentLoaded', function() {
    // const burger = document.querySelector('.burger--js');
    // const navMenu = document.querySelector('.nav__menu--js');

    // burger.addEventListener('click', function() {
    //     navMenu.classList.toggle('active');
    // })

    //href scroll
    document.querySelectorAll('.scroll-link--js').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // tabs
    const tabsBtn = document.querySelectorAll(".about-us__tab-btn--js")
    const tabsItems = document.querySelectorAll(".about-us__content-item--js")
    tabsBtn.forEach(onTabClick)

    function onTabClick(item) {
        item.addEventListener("click", function() {
            let currentBtn = item;
            let tabId = currentBtn.getAttribute("data-tab");
            let currentTab = document.querySelector(tabId)

            if (!currentBtn.classList.contains("active")) {
                tabsBtn.forEach(function(item) {
                    item.classList.remove("active")
                });
                tabsItems.forEach(function(item) {
                    item.classList.remove("active")
                });
                currentBtn.classList.add("active")
                currentTab.classList.add("active")
            }
        });
    }
    //accordion
    $(function() {
        const accordionItem = $('.accordion__item--js');
        accordionItem.on('click', function() {
            const item = $(this);
            const content = $(this).find('.accordion__content--js');

            $('.accordion__item--js').not(item).removeClass('active');
            $('.accordion__content--js').not(content).slideUp(700).removeClass('active');

            if (content.hasClass('active')) {
                item.removeClass('active');
                content.removeClass('active');
                content.slideUp(700);
            } else {
                item.addClass('active');
                content.addClass('active');
                content.slideDown(700);
            }
        });
    });

    //slider products
    $('.products__slider--js').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        speed: 300,
        arrows: true,
        prevArrow: '<div class="products__arrow-prev products__arrow"><img src="./image/arrow-green-left.svg" alt="arrow"></div>',
        nextArrow: '<div class="products__arrow-next products__arrow"><img src="./image/arrow-green-right.svg" alt="arrow"></div>',

        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    //slider reviews
    $('.reviews__slider--js').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        speed: 300,
        arrows: true,
        prevArrow: '<div class="reviews__arrow-prev reviews__arrow"><img src="./image/arrow-white-left.svg" alt="arrow"></div>',
        nextArrow: '<div class="reviews__arrow-next reviews__arrow"><img src="./image/arrow-white-right.svg" alt="arrow"></div>',
    });
});