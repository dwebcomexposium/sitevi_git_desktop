let $window = $(window)
let $body = $('body')
let $header = $('.site-banner')
let $hero = $('.hero')
let heroHeight = $hero.outerHeight();
let scrollTop = $window.scrollTop()
let root = document.documentElement;

$('.js-body-bg').clone().prependTo( ".global-wrapper" );

$('.btn-bottom-wrapper').clone().prependTo( ".site-footer" );

function updateVariables() {
    heroHeight = $hero.outerHeight();
    root.style.setProperty('--hero-height', heroHeight + "px");
}

$('.main-navigation .mn-item-lvl-1 > a').on('click', (e) => {
    e.preventDefault();
    let $this = $(e.currentTarget);

    $this.siblings('.mn-menu-submenu').slideToggle().parent().toggleClass('is-menu-expanded').siblings().removeClass('is-menu-expanded').find('.mn-menu-submenu').slideUp();
})

$('.article  .article-title img').removeClass("at-illust").wrap( "<div class='main-animation at-illust'></div>" );

$('.nav-trigger-wrapper').on('click', (e) => {
    e.preventDefault();
    $body.toggleClass('is-mobile-menu-open')
})

$('.js-play').on('click', (e) =>  {
    e.preventDefault();
    let $this = $(e.currentTarget);
    $this.parents('.widget-video').addClass('is-played').find('iframe')[0].src += "?autoplay=1&rel=0&mute=1";
});

$('.js-scroll-top').on('click', (e) =>  {
    e.preventDefault();
    let $this = $(e.currentTarget);
    $("body, html").animate({
      scrollTop: 0
  }, 1000);
});

$(window).on('load', () => {
    const element = $('.news .grid-la-list');
    const mediaQuery = window.matchMedia('(max-width: 767px)');

    const handleSwitchSlick = ((e) => {
       if (e.matches) {
        element.slick({
           slidesToShow: 1,
           slidesToScroll: 1,
           infinite: true,
           arrows: true,
       });
    } else if (element.hasClass('slick-initialized')) {
        element.slick('unslick');
    }
});

 mediaQuery.addListener(handleSwitchSlick);
 handleSwitchSlick(mediaQuery);
});

let $animatedSections = $('.hero .inside h1, .hero .inside p, .intro .inside h2, .secteurs, .news .main-title, .news .main-title-with-link > a, .news .cxp-pagination, .block-add, .wish h2, .temoins, .partner, .animation .main-title-with-link, .animation .intro, .animation .la-slider, .userAccount-newsletter, .block-socs, .article-title .at-content, .article-intro, .article-content > *, .article_list .main-title-with-link, .article_list .intro, .article_list .list-articles .la-item, .article_list .gla-item, .article_list .pagination, .btn-bottom-wrapper')

$animatedSections.addClass('animate-fade-up')
$('.btn-bottom-wrapper').removeClass('animate-fade-up');

let $animateText = $('.hero .inside h1, .wish h2 ,.intro .inside h2, .news .main-title')

$animateText.each((index, element) => {
    let $element = $(element);
    let text = $element.html();
    let word = "";
    $element.html('').addClass('animate-text').removeClass('animate-fade-up').attr('aria-label', text) ;

    for (var i = 0; i < text.length; i++) {
        word+=`<span style="--index:${i+1}">${text[i]}</span>`;

        if (text[i] == " " || i == text.length-1) {
            $(element).append(`<span class="word" aria-hidden="true">${word}</span>` );
            word="";
        }
    }
})



let animateOnScroll = () =>{
    $animatedSections.each( (index, element) =>{
        let $this = $(element);
        let animateStart = 0.3;
        let sectionTop = $this.offset().top
        let sectionHeight = $this.outerHeight()
        let scrollTop = $window.scrollTop()
        let scrollBottom = scrollTop + $window.outerHeight()
        let sectionStartPosition = sectionHeight * animateStart

        if ( ( sectionTop + sectionStartPosition ) < scrollBottom) {
            $this.addClass('is-animated');
        }else {
            if ($this.hasClass('btn-bottom-wrapper')) {
                $this.removeClass('is-animated');
            }
        }
    })
}

$('.site-banner .link').on('click', (e) => {
    var position = $('.newsletter-form').offset().top;

    $("body, html").animate({
        scrollTop: position
    }, 1000);
})

$('.newsletter-form .nf-form-input input').attr('placeholder', "Votre email")

$('.js-slider-figure .slider__slides').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
    autoplay: true,
    autoplaySpeed: 3000,
})

$('.js-video-block').each((index, section) => {
    let $section = $(section);
    let video = $section.find("video")[0];
    let $videoBtn = $section.find('.video__btn');

    $videoBtn.on('click', (e) => {
        e.preventDefault();
        if (video.paused) {
            video.play();
            $section.addClass('is-playing')
        } else {
            video.pause();
            $section.removeClass('is-playing')
        }
    })
})

$('.mn-item-lvl-1:not(.mn-item-has-submenu) .mn-link').on('click', (e) => {
    let $this = $(e.currentTarget);
    window.location = $this.attr('href');
})

updateVariables();
$window.on('load', () =>{
    $body.addClass('is-load');
}).on('load resize', () =>{
    updateVariables();
}).on('load scroll', () =>{
    scrollTop = $window.scrollTop()
    $body.toggleClass('has-scroll', scrollTop > 50)
    animateOnScroll();
})
