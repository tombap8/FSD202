(function( $ ) {

    $.fn.scrollReveal = function() {

        //get viewport size
        var windowHeight = $(window).height(),
            windowWidth = $(window).width(),
            initialScroll = $(window).scrollTop(),
            items = $('.js-reveal'),
            items2 = $('.js-reveal2'), //확장샘플
            scroll;

        //hide anything not in the viewport
        items.each(function(){
            if($(this).offset().top >= windowHeight){
                $(this).addClass('js-reveal--hidden');
            }
        });
        //hide anything not in the viewport
        
        //확장샘플
        items2.each(function(){
            if($(this).offset().top >= windowHeight){
                $(this).addClass('js-reveal2--hidden');
            }
        });

        //on scroll
        $(window).scroll(function (event) {
            //get the current scroll position
            scroll = $(window).scrollTop();
            //show anything that is now in view (scroll + windowHeight)
            items.each( function(){
                if($(this).offset().top <= (scroll + windowHeight)){
                    $(this).removeClass('js-reveal--hidden');
                }
            });
            // 확장샘플
            items2.each( function(){
                if($(this).offset().top <= (scroll + windowHeight)){
                    $(this).removeClass('js-reveal2--hidden');
                }
            });
        });

        return this;
    };
}( jQuery ));

