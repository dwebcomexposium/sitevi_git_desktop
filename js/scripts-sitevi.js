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

let $animatedSections = $('.hero .inside h1, .hero .inside p, .intro .inside h2, .intro .widget-image, .secteurs, .news, .block-add, .wish, .temoins, .partner, .animation .main-title-with-link, .animation .intro, .animation .la-slider, .userAccount-newsletter, .block-socs, .article-title .at-content, .article-intro, .article-content h2, .article-content .cl-item, .article_list .main-title-with-link, .article_list .intro, .article_list .list-articles .la-item, .article_list .gla-item, .article_list .pagination, .btn-bottom-wrapper ')

$animatedSections.addClass('animate-fade-up')
$('.btn-bottom-wrapper').removeClass('animate-fade-up')

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
        }
    })
}

$('.site-banner .link').on('click', (e) => {
    var position = $('.newsletter-form').offset().top;

    $("body, html").animate({
        scrollTop: position
    }, 1000);
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
