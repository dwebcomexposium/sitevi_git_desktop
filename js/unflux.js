/*
jQuery animateNumber plugin v0.0.14
(c) 2013, Alexandr Borisov.
https://github.com/aishek/jquery-animateNumber
*/
(function(d){var r=function(b){return b.split("").reverse().join("")},m={numberStep:function(b,a){var e=Math.floor(b);d(a.elem).text(e)}},g=function(b){var a=b.elem;a.nodeType&&a.parentNode&&(a=a._animateNumberSetter,a||(a=m.numberStep),a(b.now,b))};d.Tween&&d.Tween.propHooks?d.Tween.propHooks.number={set:g}:d.fx.step.number=g;d.animateNumber={numberStepFactories:{append:function(b){return function(a,e){var f=Math.floor(a);d(e.elem).prop("number",a).text(f+b)}},separator:function(b,a,e){b=b||" ";
a=a||3;e=e||"";return function(f,k){var u=0>f,c=Math.floor((u?-1:1)*f).toString(),n=d(k.elem);if(c.length>a){for(var h=c,l=a,m=h.split("").reverse(),c=[],p,s,q,t=0,g=Math.ceil(h.length/l);t<g;t++){p="";for(q=0;q<l;q++){s=t*l+q;if(s===h.length)break;p+=m[s]}c.push(p)}h=c.length-1;l=r(c[h]);c[h]=r(parseInt(l,10).toString());c=c.join(b);c=r(c)}n.prop("number",f).text((u?"-":"")+c+e)}}}};d.fn.animateNumber=function(){for(var b=arguments[0],a=d.extend({},m,b),e=d(this),f=[a],k=1,g=arguments.length;k<g;k++)f.push(arguments[k]);
if(b.numberStep){var c=this.each(function(){this._animateNumberSetter=b.numberStep}),n=a.complete;a.complete=function(){c.each(function(){delete this._animateNumberSetter});n&&n.apply(this,arguments)}}return e.animate.apply(e,f)}})(jQuery);

(function($) {

    var siteviJS = {

        nbN : 0,
        nbCurr : [],

        init : function(){

            this.countElements('chiffres-cle');
            this.countElements('anim');

            this.animateFigures();
            this.animateSections();
            this.onScroll();
        },

        isScrolledIntoView : function($elem, $window) {

            var docViewTop = $window.scrollTop();
            var docViewBottom = docViewTop + $window.height();
            var elemTop = $elem.offset().top;
            var elemBottom = elemTop + $elem.height();
       
            return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
        },

        countElements : function($klass) {

            this.nbN += $('.' + $klass).length;
        },

        verifyNumbers : function($klass){

            var that = this;
            that.nbCurr[$klass] = 0;

            $('.' + $klass).each(function(){
                if($(this).hasClass('sawIt')){
                    that.nbCurr[$klass] ++;
                }
            });
           
            var total = 0

            for (var prop in that.nbCurr) {
                total += that.nbCurr[prop]
            }
           
            return (total == this.nbN) ? true : false;
        },

        animateFigures : function(){

            var that = this;
            var $window = $(window);

            $('.chiffres-cle').each(function(){
            
                $elem = $(this);
                var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
            
                if (that.isScrolledIntoView($elem, $window)) {

                    $elem.addClass('sawIt');

                    $elem.find('.figure').each(function(){
                        $fig = $(this);
                        $fig.animateNumber({
                            number: $fig.attr('data-number'),
                            easing: 'easeOutQuart',
                            numberStep: comma_separator_number_step
                        } , 2000);
                    })
                }
            });
        },

        animateSections : function(){

            var that = this;
            var $window = $(window);

            $('.anim').each(function(){
            
                $elem = $(this);
                
                if (that.isScrolledIntoView($elem, $window)) {

                    $elem.addClass('sawIt');
                }
            });
        },
        
        onScroll : function() {
        
            var that = this;

            $(document).on("scroll", function () {
                
                that.animateFigures();
                that.animateSections();

                if(that.verifyNumbers('chiffres-cle') == true || that.verifyNumbers('anim') == true ){
                    $(document).off('scroll');
                }
            });
        }
    }

    siteviJS.init();

})(jQuery);
