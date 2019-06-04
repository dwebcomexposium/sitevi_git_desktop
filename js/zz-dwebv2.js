// JavaScript Document
jQuery(function($){
$("div.lang-switcher > ul").append('<li class="ls-lang-item ls-lang-dweb"><a class="ls-lang-link" href="/SITEVI-Espagnol"><span style="border-bottom: 1px dotted;">ES</span></a></li>');
$("div.lang-switcher > ul").append('<li class="ls-lang-item ls-lang-dwebb"><a class="ls-lang-link" href="/SITEVI-Portugues"><span style="border-bottom: 1px dotted;">PT</span></a></li>');
$("div.lang-switcher > ul").append('<li class="ls-lang-item ls-lang-dwebbb"><a class="ls-lang-link" href="/SITEVI-Italiano"><span style="border-bottom: 1px dotted;">IT</span></a></li>');
$("div.lang-switcher > ul").append('<li class="ls-lang-item ls-lang-dwebbbb"><a class="ls-lang-link" href="/SITEVI-Allemand"><span style="border-bottom: 1px dotted;">ALL</span></a></li>');
var fouettemoi = false;
if((window.location.href.indexOf("Espagnol") > -1) && !fouettemoi) {
       $('div.lang-switcher.js-lang-switcher > button:first-child').html('ES');
       $('li.ls-lang-item.ls-lang-fr.is-active').removeClass('is-active');
       $('li.ls-lang-dweb').addClass('is-active');
       $('.ls-lang-fr > a').attr("href", "/")
       fouettemoi = true;
}

var fouettetoi = false;
if((window.location.href.indexOf("Portugues") > -1) && !fouettetoi) {
       $('div.lang-switcher.js-lang-switcher > button:first-child').html('PT');
       $('li.ls-lang-item.ls-lang-fr.is-active').removeClass('is-active');
       $('li.ls-lang-dwebb').addClass('is-active');
       $('.ls-lang-fr > a').attr("href", "/")
       fouettetoi = true;
}

var fouettele = false;
if((window.location.href.indexOf("Italiano") > -1) && !fouettele) {
       $('div.lang-switcher.js-lang-switcher > button:first-child').html('IT');
       $('li.ls-lang-item.ls-lang-fr.is-active').removeClass('is-active');
       $('li.ls-lang-dwebbb').addClass('is-active');
       $('.ls-lang-fr > a').attr("href", "/")
       fouettele = true;
}
var fouettelle = false;
if((window.location.href.indexOf("Italiano") > -1) && !fouettele) {
       $('div.lang-switcher.js-lang-switcher > button:first-child').html('ALL');
       $('li.ls-lang-item.ls-lang-fr.is-active').removeClass('is-active');
       $('li.ls-lang-dwebbbb').addClass('is-active');
       $('.ls-lang-fr > a').attr("href", "/")
       fouettelle = true;
}
});
